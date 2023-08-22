import { InfluxDB } from '@influxdata/influxdb-client';

const influxDB = new InfluxDB({
  url: 'http://119.59.99.194:8086', // แทนที่ด้วย URL ของ InfluxDB ของคุณ
  token: 'eMcuZw7jmVPBgxBLMYRiJAcxu38AXHnSSZhRpEOxrKE1i_AjZkYuC9w0xMqv-EP8bLA6CyM-zKZj-4dDLEo51Q==', // แทนที่ด้วยโทเค็นที่คุณสร้างใน InfluxDB
});

const queryApi = influxDB.getQueryApi('TTTA'); // แทนที่ด้วยชื่อองค์กรของคุณใน InfluxDB

async function battery_rated_voltage() {
  const fluxQuery = `
    from(bucket:"TTTA ENERGY")
      |> range(start: -1m)
      |> filter(fn: (r) => r._measurement == "Inverter1")
      |> filter(fn: (r) => r._field == "battery_rating_voltage")
  `;
  const result = await queryApi.collectRows(fluxQuery);

  return result;
}

export default battery_rated_voltage;
