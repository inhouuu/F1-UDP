const udp = require('dgram');
const buttons = require('./packet/buttons/index.js')
const managementPacket = require('./packet/managementPacket.js');

const servidor = udp.createSocket('udp4');

const porta = 8081;

servidor.on('listening', () => {
    const endereco = servidor.address();
    console.log('Recebendo de', 'Endereço:', endereco.address, 'Porta:', endereco.port);
    servidor.on('message', (msg, info) => {
        // console.log('Info:', info);

        switch (info.size) {
            case 40: //BUTTONS PRESS (40 bytes size)
                let bitButton = Number(Buffer.from([...msg].slice(28, 35).reverse()).toString('hex'));
                buttons.button_end(bitButton);
                break;
            case 1347: //TELEMETRY (1347 bytes size)
                const CarTelemetryData = {
                    m_speed: Uint16Array,
                    m_throttle: Float32Array,
                    m_steer: Float32Array,
                    m_brake: Float32Array,
                    m_clutch: Uint8Array,
                    m_gear: Int8Array,
                    m_engineRPM: Uint16Array,
                    m_drs: Uint8Array,
                    m_revLightsPercent: Uint8Array,
                    m_revLightsBitValue: Uint16Array,
                    m_brakesTemperature: Uint16Array,
                    m_tyresSurfaceTemperature: Uint8Array,
                    m_tyresInnerTemperature: Uint8Array,
                    m_engineTemperature: Uint16Array,
                    m_tyresPressure: Float32Array,
                    m_surfaceType: Uint8Array
                };

                managementPacket.packet_end(24, CarTelemetryData, msg)
        }
    })
})

servidor.bind(porta);

