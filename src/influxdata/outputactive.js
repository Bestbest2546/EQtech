import { InfluxDB } from '@influxdata/influxdb-client';

const influxDB = new InfluxDB({
  url: 'http://119.59.99.194:8086', 
  token: 'eMcuZw7jmVPBgxBLMYRiJAcxu38AXHnSSZhRpEOxrKE1i_AjZkYuC9w0xMqv-EP8bLA6CyM-zKZj-4dDLEo51Q==',
});

const queryApi = influxDB.getQueryApi('TTTA'); 

async function outputactive() {
  const fluxQuery = `
    from(bucket:"TTTA ENERGY")
      |> range(start: -1m)
      |> filter(fn: (r) => r._measurement == "Inverter1")
      |> filter(fn: (r) => r._field == "ac_output_active_power")
  `;
  const result = await queryApi.collectRows(fluxQuery);

  return result;
}

export default outputactive;
