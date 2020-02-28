# NodeJS-Server
**Basic NodeJS Server**

**Configuring environment ( CentOS 8 )**
```
1. firewall-cmd --list-all 
2. firewall-cmd --get-zones
3. firewall-cmd --get-services
4. firewall-cmd --zone=public --permanent --add-service=http
5. firewall-cmd --zone=public --permanent --add-port 3000/tcp
6. firewall-cmd --reload
```