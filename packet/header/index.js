const packet_header = {
    m_packetFormat: Uint16Array,
    m_gameMajorVersion: Uint8Array,
    m_gameMinorVersion: Uint8Array,
    m_packetVersion: Uint8Array,
    m_packetId: Uint8Array,
    m_sessionUID: BigUint64Array,
    m_sessionTime: Uint32Array,
    m_frameIdentifier: Uint32Array,
    m_playerCarIndex: Uint8Array,
    m_secondaryPlayerCarIndex: Uint8Array
}