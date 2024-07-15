
//FUNÇÃO PARA ENDEREÇAR BUFFER;
module.exports.packet_end = (outset, packet, buffer) => {
    const packetAllocInfo = new Object();
    let idxAlloc = outset;
    Object.entries(packet).map((e, idx) => {
        let arrPositions = [];
        for (let idx = 0 + idxAlloc; idx < e[1].BYTES_PER_ELEMENT + idxAlloc; idx++) {
            arrPositions.push(new Uint32Array(buffer)[idx].toString(10));
        }
        idxAlloc += arrPositions.length;
        packetAllocInfo[e[0]] = arrPositions;
    })
    console.clear();
    console.log('alloc info obj', packetAllocInfo);
}