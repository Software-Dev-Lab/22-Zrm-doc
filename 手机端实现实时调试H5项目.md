## 一、应用场景

h5（vue+vite）嵌入app后，出现某种问题时，需要每次发布坏境后，才能才看效果，这种来回很耗时间，本文章在于解决手机端直接访问本地启动应用项目，无需重复发布坏境

## 二、实现步骤

1、查看电脑ip

cmd里输入ipconfig，查看IPv4地址，并复制

![image](https://github.com/user-attachments/assets/8f3c2c50-d763-4904-907b-53eea4949b73)

2、修改项目的vite.config.js 文件

port：随意写一个没有被占用的端口

host: 第一步复制的IPv4地址

![image](https://github.com/user-attachments/assets/4eb82b3b-60b8-4a93-bf59-ec6c02d98c7b)

3、测试效果

本地重新启动项目，并打开网址，将浏览器中打开的网址直接复制到手机端，点开即可直接浏览项目
