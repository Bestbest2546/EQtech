
import serial
import time
import requests
from influxdb_client import InfluxDBClient, Point
from influxdb_client.client.write_api import SYNCHRONOUS

url = "http://119.59.99.194:8086"
token = "eMcuZw7jmVPBgxBLMYRiJAcxu38AXHnSSZhRpEOxrKE1i_AjZkYuC9w0xMqv-EP8bLA6CyM-zKZj-4dDLEo51Q=="
org = "TTTA"
bucket = "TTTA ENERGY"


urlline = 'https://notify-api.line.me/api/notify'

# สร้างการเชื่อมต่อ InfluxDB Client
client = InfluxDBClient(url=url, token=token)

# กำหนดชื่อ Measurement และ Tags ตามที่เหมาะสมกับข้อมูล
measurement = "Inverter1"
 

ser = serial.Serial(port='/dev/ttyUSB0', baudrate=2400, timeout=10)
print("connected to: " + ser.portstr)

START = '515049475300000D'
MODE  = '514D4F4400000D'  
OUTPUTPRIORITY  = '514F50505400000D'
CHARGERPRIORITY  = '51 43 48 50 54 00 00 0D'
RATING  = '51 50 49 52 49 00 00 0D'


print(ser.isOpen())
print(ser.in_waiting)

def send_text(token, text):
    LINE_HEADERS = {'content-type':'application/x-www-form-urlencoded','Authorization':'Bearer '+token}
    session_post = requests.post(urlline, headers=LINE_HEADERS , data = {'message':text})
    print(session_post.text)

battery_status = None

def send_notification(battery_capacity, battery_Ah):
    global battery_status
    token = 'rtzy53J8WDXkJiPQaRB4iCVXKm662QddoV2fWejryzf'

    if 5 > battery_capacity <= 27 and battery_status != 'low':
        text = "Battery" + str(battery_capacity) + "%" + str(battery_Ah) + "Ah" + "ขณะนี้ Inverter กำลังชาร์จแบตเตอรี่ โปรดปิด แอร์ และ เครื่องใช้ไฟฟ้า ที่ไม่จำเป็นของทุกท่าน "
        send_text(token, text)
        battery_status = 'low'

    elif 57 > battery_capacity >= 55 and battery_status != 'high':
        text = "Battery" + str(battery_capacity) + "%" + str(battery_Ah) + "Ah" + "สามารถใช้งานแอร์ และ เครื่องใช้ไฟฟ้าได้ตามปกติ"
        send_text(token, text)
        battery_status = 'high'
        
    elif battery_capacity > 99 and battery_status != 'Full':
        text = "Battery" + str(battery_capacity) + "%" + str(battery_Ah) + "Ah" + "Battery is Full"
        send_text(token, text)
        battery_status = 'Full'

    elif battery_capacity <= 5 and battery_status != 'Dead':
        text = "Battery" + str(battery_capacity) + "%" + str(battery_Ah) + "Ah" + "แบตไกล้หมดแล้วจ้าอย่าลืมปิดเครื่องใช้ไฟฟ้าของท่าน"
        send_text(token, text)
        battery_status = 'Dead'

ser.write(bytes.fromhex(START))

while True:
    print("waiting")
    ser.write(bytes.fromhex(START))
    time.sleep(1)

    print("Before timeout")
    time.sleep(1)
    print("reading")
    val = ser.readline()

    try:
        decoded_data = val.decode('latin-1')
        print(decoded_data.strip()) 
    except UnicodeDecodeError as e:
        print(f"Error decoding data: {e}")



  
    data_elements = decoded_data.strip('()').split()


    grid_voltage = float(data_elements[0])
    grid_frequency = float(data_elements[1])
    ac_output_voltage = float(data_elements[2])
    ac_output_frequency = float(data_elements[3])
    ac_output_apparent_power = float(data_elements[4])
    ac_output_active_power = float(data_elements[5])
    outut_load_percent = int(data_elements[6])
    bus_voltage = int(data_elements[7])
    battery_voltage = float(data_elements[8])
    battery_charging_current = float(data_elements[9])
    battery_capacity = int(data_elements[10])
    battery_Ah = battery_capacity*2.8
    inverter_heat_sink_temperature = int(data_elements[11])
    pv_input_current_for_battery = float(data_elements[12])
    pv_input_voltage_1 = float(data_elements[13])
    battery_voltage_from_scc = float(data_elements[14])
    battery_discharge_current = str(data_elements)[15]
    device_status = int(data_elements[16], 2) 
    battery_offset_for_fans_on = int(data_elements[17])
    eeprom_version = int(data_elements[18])
    pv_charging_power = int(data_elements[19])
    device_status_2 = int(data_elements[20], 2)  



# สร้าง Point จากข้อมูลที่แยกแล้ว
    point = Point(measurement).field(" grid_voltage ",  grid_voltage ) \
        .field("grid_frequency", grid_frequency) \
        .field("ac_output_voltage", ac_output_voltage) \
        .field("ac_output_frequency", ac_output_frequency) \
        .field("ac_output_apparent_power", ac_output_apparent_power) \
        .field("ac_output_active_power", ac_output_active_power) \
        .field("outut_load_percent", outut_load_percent) \
        .field("bus_voltage", bus_voltage) \
        .field("Battery Voltage", battery_voltage) \
        .field("battery_charging_current", battery_charging_current) \
        .field("battery_capacity", battery_capacity) \
        .field("inverter_heat_sink_temperature", inverter_heat_sink_temperature) \
        .field("pv_input_current_for_battery", pv_input_current_for_battery) \
        .field("pv_input_voltage_1", pv_input_voltage_1) \
        .field("battery_voltage_from_scc", battery_voltage_from_scc) \
        .field("battery_discharge_current", battery_discharge_current) \
        .field("pv_charging_power", pv_charging_power) \

    write_api = client.write_api(write_options=SYNCHRONOUS)
    write_api.write(bucket=bucket, org=org, record=point)

    print("Data has been stored in InfluxDB inverter1.")

    send_notification(battery_capacity,battery_Ah)

    print("waiting for mode")
    ser.write(bytes.fromhex(MODE))
    time.sleep(1)

    print("reading mode")

    val = ser.readline()

    try:
        keywords = ['P', 'S', 'L', 'F', 'H', 'D', 'C', 'Y', 'E','B']
        decoded_data = val.decode('latin-1') # Use 'latin-1' encoding
        positions = [decoded_data.find(keyword) for keyword in keywords]
        non_negative_positions = [pos for pos in positions if pos != -1]
        start_index = min(non_negative_positions) if non_negative_positions else -1

        if start_index != -1:
            # ลบค่าที่ตามหลัง 'B' ออก
            cleaned_data = decoded_data[:start_index + 1]
        else:
            print("ไม่พบในข้อมูล.")
    except UnicodeDecodeError as e:
        print(f"Error decoding data: {e}")
        
    data_elements = cleaned_data.strip('()').split()
    mode = str(data_elements[0])
    ascii_code = ord(mode)
    modenumber = int(ascii_code)
    print(modenumber)

    point = Point(measurement).field("modeinverter1",  modenumber ) \

    write_api = client.write_api(write_options=SYNCHRONOUS)
    write_api.write(bucket=bucket, org=org, record=point)

    print("Data Mode has been stored in InfluxDB.")
    
    time.sleep(1)
    
    print("Wait for OUTPUTPRIORITY")
    ser.write(bytes.fromhex(OUTPUTPRIORITY))
    time.sleep(1)
    print("reading")
    val = ser.readline()
    try:
        decoded_data = val.decode('latin-1')
        print(decoded_data.strip()) 
    except UnicodeDecodeError as e:
        print(f"Error decoding data: {e}")
    data_elements = decoded_data.strip('()').split()
    
    output = int(data_elements[25]) 

    point = Point(measurement).field(" Chargerinverter1 ",  output ) \


    write_api = client.write_api(write_options=SYNCHRONOUS)
    write_api.write(bucket=bucket, org=org, record=point)

    print("OUTPUT_priority has been stored in InfluxDB inverter1.")
    time.sleep(1)
    
    print("Wait for CHARGERPRIORITY")
    ser.write(bytes.fromhex(CHARGERPRIORITY))
    time.sleep(1)
    print("reading")
    val = ser.readline()
    try:
        decoded_data = val.decode('latin-1')
        print(decoded_data.strip())
    except UnicodeDecodeError as e:
        print(f"Error decoding data: {e}")
    data_elements = decoded_data.strip('()').split()
    
    charger = int(data_elements[24]) 

    point = Point(measurement).field(" Chargerinverter1 ",  charger ) \

    write_api = client.write_api(write_options=SYNCHRONOUS)
    write_api.write(bucket=bucket, org=org, record=point)

    print("CHARGER_PRORITY has been stored in InfluxDB inverter1.")
    time.sleep(1)
    
    
    print("Wait for Rating")
    ser.write(bytes.fromhex(RATING))
    time.sleep(1)
    print("reading")
    val = ser.readline()
    try:
        decoded_data = val.decode('latin-1')
        print(decoded_data.strip())
    except UnicodeDecodeError as e:
        print(f"Error decoding data: {e}")
    data_elements = decoded_data.strip('()').split()
    
    grid_rating_voltage= round(float(data_elements[0]), 2)
    grid_rating_current = round(float(data_elements[1]), 2)
    ac_output_rating_voltage = round(float(data_elements[2]), 2)
    ac_output__rating_frequency = round(float(data_elements[3]), 2)
    ac_output_rating_current = round(float(data_elements[4]), 2)
    ac_output_rating_apparent_power = round(float(data_elements[5]), 2)
    ac_output_rating_active_power = round(float(data_elements[6]), 2)
    battery_rating_voltage = round(float(data_elements[7]), 2)
    battery_re_charge_voltage = round(float(data_elements[8]), 2)
    battery_under_voltage = round(float(data_elements[9]), 2)
    battery_bulk_voltage = round(float(data_elements[10]), 2)
    battery_float_voltage = round(float(data_elements[11]), 2)
    battery_type = round(float(data_elements[12]), 2)
    current_max_ac_charging_current = round(float(data_elements[13]), 2)
    current_max_charging_current = round(float(data_elements[14]), 2)
    input_voltage_range = round(float(data_elements[15]), 2)
    output_source_priority = round(float(data_elements[16]), 2)
    charger_source_priority = round(float(data_elements[17]), 2)
    parallel_max_number = round(float(data_elements[18]), 2)
    machine_type = round(float(data_elements[19]), 2)
    topology = round(float(data_elements[20]), 2)
    Output_mode = round(float(data_elements[21]), 2)
    battery_re_discharge_voltage =round(float(data_elements[22]), 2)  
    pv_ok_condition_for_parallel = round(float(data_elements[23]), 2)
    pv_power_balance = round(float(data_elements[24]), 2)
    # max_charging_time_at_cv_stage = round(float(data_elements[25]), 2)
    # operation_logic =round(float(data_elements[26]), 2)



    point = Point(measurement).field("grid_rating_voltage",  grid_rating_voltage ) \
        .field("grid_rating_current",  grid_rating_current ) \
        .field("ac_output_rating_voltage",  ac_output_rating_voltage ) \
        .field("ac_output__rating_frequency",  ac_output__rating_frequency ) \
        .field("ac_output_rating_current",  ac_output_rating_current ) \
        .field("ac_output_rating_apparent_power",  ac_output_rating_apparent_power ) \
        .field("ac_output_rating_active_power",  ac_output_rating_active_power ) \
        .field("battery_rating_voltage",  battery_rating_voltage ) \
        .field("battery_re_charge_voltage",  battery_re_charge_voltage ) \
        .field("battery_under_voltage",  battery_under_voltage ) \
        .field("battery_bulk_voltage",  battery_bulk_voltage ) \
        .field("battery_float_voltage",  battery_float_voltage ) \
        .field("battery_type",  battery_type ) \
        .field("current_max_ac_charging_current",  current_max_ac_charging_current ) \
        .field("current_max_charging_current",  current_max_charging_current ) \
        .field("input_voltage_range",  input_voltage_range ) \
        .field("output_source_priority",  output_source_priority ) \
        .field("charger_source_priority",  charger_source_priority ) \
        .field("parallel_max_number",  parallel_max_number ) \
        .field("machine_type",  machine_type ) \
        .field("topology",  topology ) \
        .field("Output_mode",  Output_mode ) \
        .field("battery_re_discharge_voltage",  battery_re_discharge_voltage ) \
        .field("pv_ok_condition_for_parallel",  pv_ok_condition_for_parallel ) \
        .field("pv_power_balance",  pv_power_balance ) \
        # .field("max_charging_time_at_cv_stage",  max_charging_time_at_cv_stage ) \
        # .field("operation_logic",  operation_logic ) \


    write_api = client.write_api(write_options=SYNCHRONOUS)
    write_api.write(bucket=bucket, org=org, record=point)

    print("Rating has been stored in InfluxDB inverter1.")
    time.sleep(1)
    
# ser.close()
