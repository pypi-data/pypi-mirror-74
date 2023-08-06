Pcapgen PCAP Generation Suite
=================================

# pgtlib
-----------------------------------------

pgtlib is a wrapper built on top of Scapy/Kamene to provide additional flexibility to create custom TCP client<->server packet captures. This module would also provide functionality to prefix 3-way TCP Handshake and close established connections gracefully.

#### Usage

Let's say over TCP/5555, you would want to send "----> hey from client\n" from client and server echoes back with a response message saying, "<---- ACK\n". Let's construct a packet based on this:

```python
from pcapgen.pgtlib import *

fHandle = PCAP('/tmp/tcp.pcap')             # PCAP Output Filename
conn = fHandle.tcp_conn_to_server(5555)     # Assign dest port as TCP/5555
conn.to_server('----> From Client\r\n')     # Client message to server
conn.to_client('<---- From Server\r\n')     # Server message to client
conn.finish()                               # Construct FIN
fHandle.close()                             # Close file handle
print('[*]Done.')
```

# pft
-----------------------------------------

PCAP Fix Tool (pft, in short) is a wrapper on top of scapy/kamene. This utility helps in resolving broken TCP communications, changing endpoint directions and ports etc. This tool takes the C Arrays input of any TCP stream, appends the missing TCP 3-Way handshakes along with adding the necessary FIN TCP flags to terminate the established TCP communication gracefully.

#### Usage

* Open faulty pcap and navigate to the faulty TCP stream index that you want to correct.
* View data as 'C Arrays' and export the output to any flat file e.g. /tmp/raw
* $python pft.py -p 1337 -w /tmp/raw
* This would geneate raw.pcap (currently supports PCAP format only) which would have TCP/1337 as destination port along with the end-to-end PDU data intact.

# pgt
-----------------------------------------

PCAP Genation Tool (pgt) is wrapper built on top of scapy/kamene again which generates simulated HTTP,FTP and Email (SMTP/IMAP) protocols data along with several encoding types i.e. base64, deflate, gzip etc.

#### Usage

```bash
$python pgt.py ~/Desktop/sample.docx # Generates HTTP(GET/POST), FTP(active and passive), SMTP and IMAP PCAPs.
```

### External dependencies
- kamene [pip3 install kamene]
- python-magic [pip3 install python-magic]

### Credits

* Major credit goes to Andrewg Felinemenace for developing this excellent utility. Those scripts can be found [here](https://github.com/andrewg-felinemenace/PCAP-Generation-Tools)
* Mine is just an add-on with some minor fixes on top of it. :)
