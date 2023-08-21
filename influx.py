from influxdb_client import InfluxDBClient, Point
from influxdb_client.client.write_api import SYNCHRONOUS

# กำหนดค่า configuration
url = "http://119.59.99.194:8086"
token = "eMcuZw7jmVPBgxBLMYRiJAcxu38AXHnSSZhRpEOxrKE1i_AjZkYuC9w0xMqv-EP8bLA6CyM-zKZj-4dDLEo51Q=="
org = "TTTA"
bucket = "TTTA ENERGY"

# สร้าง client
client = InfluxDBClient(url=url, token=token)

# สร้าง query
query = f'from(bucket: "{bucket}") |> range(start: -1m) |> filter(fn: (r) => r._measurement == "Inverter1" and r._field == " Outputinverter1 ")'

# ดึงข้อมูล
tables = client.query_api().query(org=org, query=query)

# แสดงข้อมูล
for table in tables:
    for record in table.records:
        print(record.values)


# ปิด client
client.__del__()
