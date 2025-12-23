const quizData = {
  all: [
    {
      question:
        "1) Để kiểm tra các máy trong mạng có thể trao đổi thông tin được với nhau, bạn kiểm tra bằng câu lệnh nào sau đây?",
      options: {
        A: "ping",
        B: "ipconfig /all",
        C: "ipconfig",
        D: "nslookup",
      },
      correct: "A",
    },
    {
      question: "2) Mạng LAN khác mạng WAN ở chỗ:",
      options: {
        A: "Mạng LAN là mạng dùng chung, Mạng WAN là mạng dùng riêng",
        B: "Mạng LAN và WAN đều phải do một doanh nghiệp sở hữu",
        C: "Kích thước (tính theo bán kính của mạng) mạng LAN lớn hơn mạng WAN. Tốc độ truyền thông tin trên mạng LAN không nhanh hơn trên mạng WAN",
        D: "Kích thước (tính theo bán kính của mạng) mạng LAN nhỏ hơn mạng WAN. Tốc độ truyền thông tin trên mạng LAN nhanh hơn trên mạng WAN",
      },
      correct: "D",
    },
    {
      question:
        "3) Đối với server 2008 dung lượng RAM khuyến khích (Recommended) là bao nhiêu GB?",
      options: {
        A: "1GB",
        B: "512MB",
        C: "3GB",
        D: "2GB",
      },
      correct: "D",
    },
    {
      question: "4) Tiện ích nào dùng để xem đầy đủ thông tin địa chỉ IP?",
      options: {
        A: "Ipconfig",
        B: "Ping",
        C: "Ipconfig /all",
        D: "Netstat",
      },
      correct: "C",
    },
    {
      question: "5) Những dòng server nào hổ trợ cho server core (2)",
      options: {
        A: "Windows server 2008 standard",
        B: "Windows server 2008 for Itanium-based Systems",
        C: "Windows Web server 2008",
        D: "Windows server 2008 Datacenter",
      },
      correct: "A",
    },
    {
      question: "6) Windows Server 2008 sử dụng giao thức nào?",
      options: {
        A: "AppleTalk",
        B: "NetBEUI",
        C: "TCP/IP",
        D: "IPX",
      },
      correct: "C",
    },
    {
      question:
        "7) Để kiểm tra kết nối từ máy A đến máy B có địa chỉ IP 192.168.1.20, thực hiện?",
      options: {
        A: "Nslookup 192.168.1.20",
        B: "Netstat 192.168.1.20",
        C: "Ping 192.168.1.20",
        D: "Ping 192.168.20.1",
      },
      correct: "C",
    },
    {
      question:
        "8) Cách nào sau đây cho phép vào Group Policy trong Windows 7?",
      options: {
        A: "Run -> secpol.msc",
        B: "Run -> msconfig",
        C: "Run -> gpedit.msc",
        D: "Run -> regdit",
      },
      correct: "C",
    },
    {
      question:
        "9) Để kết nối giữa máy thật và máy ảo thì card Vmnet nào được sử dụng trong Vmware Workstation? (2)",
      options: {
        A: "Vmnet 9",
        B: "Vmnet 8",
        C: "Vmnet 1",
        D: "Vmnet 2",
      },
      correct: "C",
    },
    {
      question:
        "10) Hệ điều hành nào không được nâng cấp lên Windows server 2008 Enterprise?",
      options: {
        A: "Windows Server 2003 R2 Enterprise",
        B: "Windows Server 2003 Enterprise, (SP1)",
        C: "Windows Server 2003 Standard, service pack 1 (SP2)",
        D: "Windows Server 2003 R2 Standard",
      },
      correct: "D",
    },
    {
      question:
        "11) Bộ xử lý trung tâm của server 2008 cần tốc độ khuyến khích (Recommended) là bao nhiêu Ghz?",
      options: {
        A: "3Ghz",
        B: "2Ghz",
        C: "1Ghz",
        D: "4Ghz",
      },
      correct: "B",
    },
    {
      question:
        "12) Hãy cho biết biểu tượng máy tính bị chéo đỏ cho biết card mạng đang ở trạng thái nào sau đây?",
      options: {
        A: "Card mạng đang nhận IP",
        B: "Card mạng không được gắn cáp",
        C: "Card mạng bị trùng IP với một card mạng khác",
        D: "Card mạng không nhận được IP",
      },
      correct: "B",
    },
    {
      question:
        "13) Để xem địa chỉ IP của các Card mạng ta có thể dùng lệnh nào?",
      options: {
        A: "nslookup",
        B: "tracert",
        C: "ipconfig",
        D: "ping",
      },
      correct: "C",
    },
    {
      question:
        "14) Để cho máy ảo kết nối với Internet thông qua máy thật thì ta sử dụng card nào của Vmware workstation? (2)",
      options: {
        A: "Vmnet2",
        B: "Bridged",
        C: "Host-only",
        D: "NAT",
      },
      correct: "D",
    },
    {
      question:
        "15) Khi cấu hình TCP/IP cho phép một PC truy cập Internet bạn phải cấu hình các thông số nào?",
      options: {
        A: "Cấu hình địa chỉ IP, Subnet mask, Default Gateway, Preferred DNS Server và Alternate DNS Server",
        B: "Cấu hình địa chỉ IP, Subnet mask, Default Gateway",
        C: "Cấu hình địa chỉ IP, Subnet mask và Preferred DNS Server",
        D: "Cấu hình địa chỉ IP, Subnet mask, Preferred DNS Server và Alternate DNS Server",
      },
      correct: "A",
    },
    {
      question: "16) Đối với server 2008 cần tối thiểu bao nhiêu GB RAM?",
      options: {
        A: "1GB",
        B: "2GB",
        C: "700MB",
        D: "512MB",
      },
      correct: "D",
    },
    {
      question:
        "17) Bộ xử lý trung tâm của server 2008 cần tốc độ tối ưu (Optimal) là bao nhiêu Ghz?",
      options: {
        A: "2Ghz",
        B: "1Ghz",
        C: "Không cần thiết",
        D: "Từ 3Ghz trở lên",
      },
      correct: "A",
    },
    {
      question:
        "18) Tên gọi của máy tính cài đặt hệ điều hành Windows Server 2008 trong môi trường WORKGROUP là?",
      options: {
        A: "Stand-alone Server",
        B: "Member Server",
        C: "Domain Controller (DC)",
        D: "Tất cả đều sai",
      },
      correct: "A",
    },
    {
      question:
        "19) Để xem tên máy tính đang sử dụng thì nhấn chuột phải vào mục nào dưới đây?",
      options: {
        A: "My Computer -> Properties -> chọn Computer Name",
        B: "My Network -> Properties -> chọn Computer Name",
        C: "Network -> Properties -> chọn Computer Name",
        D: "My Netword Place -> Properties -> chọn Computer Name",
      },
      correct: "A",
    },
    {
      question:
        "20) Bộ xử lý trung tâm của server 2008 cần tốc độ tối thiểu (Minimum) là bao nhiêu Ghz?",
      options: {
        A: "1Ghz",
        B: "3Ghz",
        C: "2Ghz",
        D: "4Ghz",
      },
      correct: "A",
    },
    {
      question:
        "21) Bạn muốn xem địa chỉ MAC (địa chỉ vật lý) của card mạng. Bạn nên làm gì?",
      options: {
        A: "Vào DOS, gõ lệnh Ipconfig /all",
        B: "Từ Servces snap-in, xem properties của card kết nối",
        C: "Vào DOS, gõ lệnh Net view \\server1",
        D: "Từ Device Manager snap-in, xem properties của card mạng",
      },
      correct: "A",
    },
    {
      question: "22) Độ dài của địa chỉ MAC là?",
      options: {
        A: "48 bits",
        B: "36 bits",
        C: "24 bits",
        D: "8 bits",
      },
      correct: "A",
    },
    {
      question:
        "23) Hệ điều hành nào được nâng cấp lên Windows server 2008 DataCenter?",
      options: {
        A: "Windows Server 2003 Enterprise, (SP1)",
        B: "Windows Server 2003 R2 Standard",
        C: "Windows Server 2003 R2 Datacenter",
        D: "Windows Server 2003 R2 Enterprise",
      },
      correct: "C",
    },
    {
      question:
        "24) Hệ điều hành nào được nâng cấp lên Windows server 2008 Standard",
      options: {
        A: "Windows Server 2003 Enterprise, (SP1)",
        B: "Windows Server 2003 R2 Enterprise",
        C: "Windows Server 2003 R2 Standard",
        D: "Windows Server 2003 R2 Datacenter",
      },
      correct: "C",
    },
    {
      question:
        "25) Đối với các dòng server 2008 Standard (32bit) hổ trợ tối đa dung lượng RAM là bao nhiêu GB?",
      options: {
        A: "4GB",
        B: "8GB",
        C: "16GB",
        D: "32GB",
      },
      correct: "A",
    },
    {
      question:
        "26) Đối với các dòng server 2008 Enterprise (32bit) hổ trợ tối đa dung lượng RAM là bao nhiêu GB?",
      options: {
        A: "8GB",
        B: "64GB",
        C: "16GB",
        D: "32GB",
      },
      correct: "B",
    },
    {
      question:
        "27) Tên gọi của máy tính hệ điều hành Windows Server 2008 trong môi trường domain là?",
      options: {
        A: "Member Server",
        B: "Stand-alone Server",
        C: "Domain Controller (DC)",
        D: "Tất cả đều sai",
      },
      correct: "A",
    },
    {
      question: "28) Chức năng của Active Directory là gì?",
      options: {
        A: "Lưu trữ các tài nguyên trên mạng",
        B: "Lưu trữ thông tin người dùng",
        C: "Cả 2 câu trên đều sai",
        D: "Cả 2 câu trên đều đúng",
      },
      correct: "D",
    },
    {
      question:
        "29) Câu lệnh nào được dùng để nâng cấp từ 1 máy tính cài đặt Windows Server 2008 lên một bộ điểu khiển miền (Domain Controller)?",
      options: {
        A: "DCUPGRADE",
        B: "PROMODC",
        C: "DCPROMO",
        D: "UPGRADEDC",
      },
      correct: "C",
    },
    {
      question:
        "30) Sau khi tạo OU có tên Nhanvien trên máy chủ Windows 2008 domain controller. Anh/Chị muốn tạo Account 'nmphuoc' và Account này sẽ thuộc OU Nhanvien. Mở công cụ Active Directory User and Computer và thực hiện như thế nào?",
      options: {
        A: "Nhấp chuột phải vào OU Nhanvien chọn New > User",
        B: "Nhấp chuột phải vào OU Nhanvien chọn New > Organizational Unit",
        C: "Nhấp chuột phải vào OU Nhanvien chọn New > Group",
        D: "Tất cả các cách đều sai",
      },
      correct: "A",
    },
    {
      question: "31) Những bước nào sau đây có thể tạo ra User?",
      options: {
        A: "Start /program/admin tool/Domain controller Security policy /Click Tên máy chọn biểu tượng tạo User",
        B: "Start /program/admin tool/Active Directory users and Computers /Click Tên máy chọn biểu tượng tạo User",
        C: "Start /program/admin tool/Active Directory Domain and trust /Click Tên máy chọn biểu tượng tạo User",
        D: "Start /program/admin tool/Domain Security policy /Click Tên máy chọn biểu tượng tạo User",
      },
      correct: "B",
    },
    {
      question:
        "32) Để đăng nhập một máy con vào một máy DC bạn phải đảm bảo những yêu cầu nào sau đây?",
      options: {
        A: "Khai báo primary DNS Suffix",
        B: "Khai báo IP DNS",
        C: "Thay đổi môi trường workgroup thành Domain.",
        D: "Cả 3 câu trên",
      },
      correct: "D",
    },
    {
      question: "33) Đặc điểm nào mô tả về mô hình mạng Workgroup?",
      options: {
        A: "Các máy tính trong mạng có vai trò như nhau",
        B: "Hoạt động theo cơ chế Client - Server",
        C: "Có ít nhất một Server làm trung tâm",
        D: "Tất cả đều sai",
      },
      correct: "A",
    },
    {
      question:
        "34) Số máy Windows 2008 Server làm Domain Controller tối đa trong một domain là?",
      options: {
        A: "2",
        B: "1",
        C: "3",
        D: "Tất cả đều sai",
      },
      correct: "D",
    },
    {
      question:
        "35) Công cụ nào có chức năng tạo và quản lý các đối tượng cơ bản của hệ thống Active Directory?",
      options: {
        A: "Active Directory Sites and Services",
        B: "Computer Management",
        C: "Active Directory Domains and Trusts",
        D: "Active Directory Users and Computers",
      },
      correct: "D",
    },
    {
      question: "36) Đặc điểm nào mô tả về mô hình mạng domain?",
      options: {
        A: "Thông tin tài khoản người dùng lưu trong tập tin SAM",
        B: "Các máy tính trong mạng có vai trò như nhau",
        C: "Quá trình chứng thực người dùng đăng nhập diễn ra tập trung tại máy Domain Controller",
        D: "Quá trình chứng thực người dùng đăng nhập diễn ra tại máy cục bộ mà user đăng nhập",
      },
      correct: "C",
    },
    {
      question:
        "37) Bạn có một văn phòng nhỏ mỗi máy thì chịu trách nhiệm cho sự bảo mật của chính nó. Kiểu mạng nào mà bạn cần thực thi?",
      options: {
        A: "Mạng diện rộng(WAN)",
        B: "Mạng ngang hàng",
        C: "Mạng hợp tác",
        D: "Tất cả đều sai",
      },
      correct: "B",
    },
    {
      question:
        "38) Sau khi nâng cấp lên DC thì mặc định tạo user yêu cầu passowrd phức tạp. Password nào sau đây là phức tạp?",
      options: {
        A: "password",
        B: "password123",
        C: "pass123WORD",
        D: "passwordpas",
      },
      correct: "C",
    },
    {
      question: "39) Chức năng nào là của domain?",
      options: {
        A: "Đóng vai trò như một khu vực quản trị các đối tượng",
        B: "Giúp chúng ta quản lý bảo mật các tài nguyên chia sẻ",
        C: "Cung cấp các server dự phòng làm chức năng điều khiển vùng",
        D: "Cả 3 ý trên",
      },
      correct: "D",
    },
    {
      question: "40) Thông tin người dùng được quản lý ở đâu trên Domain?",
      options: {
        A: "Web",
        B: "Active Directory",
        C: "NTFS",
        D: "Mail",
      },
      correct: "B",
    },
    {
      question: "41) Organizational Unit là gì?",
      options: {
        A: "Đơn vị trung bình trong AD",
        B: "Đơn vị nhỏ nhất trong AD",
        C: "Đơn vị nhỏ nhất trong Workgroup",
        D: "Đơn vị lớn nhất trong AD",
      },
      correct: "B",
    },
    {
      question:
        "42) Những bước nào sau đây có thể tạo ra Organizational Unit (OU) ?",
      options: {
        A: "Start/Programs/Administrative Tools/Domain Security Policy /Click tên miền chọn biểu tượng tạo OU",
        B: "Start/Programs/Administrative Tools/Domain Controller Security Policy /Click tên miền chọn biểu tượng tạo OU",
        C: "Start/Programs/Administrative Tools/Active Directory Domain and Trust /Click tên miền chọn biểu tượng tạo OU",
        D: "Start/Programs/Administrative Tools/Active Directory Users and Computers /Click tên miền chọn biểu tượng tạo OU",
      },
      correct: "D",
    },
    {
      question:
        "43) Trong môi trường Workgroup, thông tin tài khoản được lưu trong tập tin nào?",
      options: {
        A: "URL",
        B: "SAN",
        C: "SAM",
        D: "DOC",
      },
      correct: "C",
    },
    {
      question:
        "44) Khi máy client join vào trong Domain thì tài khoản nào được dùng chứng thực quá trình gia nhập đó?",
      options: {
        A: "teo@domain.local",
        B: "user@domain.local",
        C: "Administrator@domain.local",
        D: "users",
      },
      correct: "C",
    },
    {
      question:
        "45) Có ít nhất bao nhiêu server làm chức năng điều khiển vùng?",
      options: {
        A: "2",
        B: "3",
        C: "1",
        D: "4",
      },
      correct: "C",
    },
    {
      question: "46) Chức năng nào là của Active Directory là gì?",
      options: {
        A: "Đóng vai trò chứng thực",
        B: "Quản lý đăng nhập",
        C: "Cả 2 câu trên đều đúng",
        D: "Cả 2 câu trên đều sai",
      },
      correct: "C",
    },
    {
      question:
        "47) Để cấp quyền cho người dùng có thể logon hệ thống mà không nhấn tổ hợp phím CTRL+ALT+DELETE, ta cấp quyền cho user các quyền sau:",
      options: {
        A: "Interactive logon: do not require CTRL+ALT+DEL",
        B: "Interactive logon: deny CTRL+ALT+DEL",
        C: "Cả A & B",
        D: "Tất cả đề sai",
      },
      correct: "A",
    },
    {
      question: "48) Mạng ứng dụng Domain được xây dựng từ...",
      options: {
        A: "Mô hình xử lý tập trung và mô hình quản lý tập trung",
        B: "Mô hình xử lý tập trung và mô hình quản lý wordgroup",
        C: "Mô hình xử lý cộng tác và mô hình quản lý tập trung",
        D: "Mô hình xử lý phân phối và mô hình quản lý tập trung",
      },
      correct: "A",
    },
    {
      question: "49) Domain tree là gì?",
      options: {
        A: "là cấu trúc bao gồm nhiều domain được sắp xếp các cấp bậc theo cấu trúc hình vuông",
        B: "là cấu trúc bao gồm nhiều domain được sắp xếp các cấp bậc theo cấu trúc hình tròn",
        C: "là cấu trúc bao gồm nhiều domain được sắp xếp các cấp bậc theo cấu trúc hình gấp khúc",
        D: "là cấu trúc bao gồm nhiều domain được sắp xếp các cấp bậc theo cấu trúc hình cây",
      },
      correct: "D",
    },
    {
      question: "50) Hệ điều hành nào không gia nhập vào domain được?",
      options: {
        A: "windows 8",
        B: "windows 7",
        C: "windows server 2008",
        D: "adroid",
      },
      correct: "D",
    },
    {
      question:
        "51) Trong môi trường Domain, thông tin tài khoản được lưu trong tập tin nào?",
      options: {
        A: "NTDS.DIT",
        B: "syslog.msc",
        C: "AD",
        D: "log",
      },
      correct: "A",
    },
    {
      question:
        "52) Trong môi trường domain, dịch vụ nào quản lý thông tin người dùng?",
      options: {
        A: "DNS",
        B: "Active Directory",
        C: "MAIL",
        D: "DHCP",
      },
      correct: "B",
    },
    {
      question:
        "53) Cơ chế chứng thực chính nào được dùng vào máy phục vụ Web an toàn",
      options: {
        A: "SSL/TLS",
        B: "L2TP",
        C: "PPTP",
        D: "STPP",
      },
      correct: "A",
    },
    {
      question: "54) Password nào là password phức tạp",
      options: {
        A: "Aa123456",
        B: "#@&**&hsasaslajlk",
        C: "FHUDJJSJlfajfasfdskafsda",
        D: "A12345678900987654321",
      },
      correct: "A",
    },
    {
      question:
        "55) Khi tạo tài khoản mới ta có sự lựa chọn cho các chính sách password User must change password at next logon thì sẽ làm gì?",
      options: {
        A: "Lần đăng nhập tiếp theo sẽ phải đổi Password",
        B: "Tài khoản bị khóa",
        C: "Password không bao giờ hết hạn",
        D: "Tài khoản đó không được thay đổi password",
      },
      correct: "A",
    },
    {
      question:
        "56) Silas muốn tạo một tài khoản user cục bộ trên máy tính Windows 7. Anh cần sử dụng công cụ gì?",
      options: {
        A: "Local Users and Groups",
        B: "User Manager",
        C: "Active Directory Users and Groups",
        D: "Computer Manager",
      },
      correct: "A",
    },
    {
      question:
        "57) Sau khi tạo OU có tên Nhanvien trên máy chủ Windows 2008 domain controller, bạn muốn tạo nhóm tên Kinhdoanh và nhóm này sẽ thuộc OU Nhanvien. Mở công cụ Active Directory User and Computer và thực hiện như thế?",
      options: {
        A: "Nhấp chuột phải vào OU Nhanvien chọn New > Organizational Unit",
        B: "Nhấp chuột phải vào OU Nhanvien chọn New > Group",
        C: "Nhấp chuột phải vào OU Nhanvien chọn New > User",
        D: "Tất cả các cách đều sai",
      },
      correct: "B",
    },
    {
      question:
        "58) Mặc định khi tạo user account trên Windows Server 2008 domain controller thuộc nhóm nào?",
      options: {
        A: "Local Users",
        B: "Power Users",
        C: "Domain Users",
        D: "Administrators",
      },
      correct: "C",
    },
    {
      question:
        "59) Khi tạo tài khoản mới ta có sự lựa chọn cho các chính sách Password never express thì sẽ làm gì?",
      options: {
        A: "Tài khoản bị khóa",
        B: "Lần đăng nhập tiếp theo sẽ phải đổi Password",
        C: "Tài khoản đó không được thay đổi password",
        D: "Password không bao giờ hết hạn",
      },
      correct: "D",
    },
    {
      question:
        "60) Công cụ sau đây cho phép tạo ra các tài khoản người dùng, máy tính và nhóm dựa trên dữ liệu bạn nhập vào hoặc từ một file?",
      options: {
        A: "DSQUERY",
        B: "DSMOD",
        C: "Active Directory Domains And Trusts",
        D: "Active Directory Users And Computer",
      },
      correct: "D",
    },
    {
      question: "61) 00152 Độ dài của Username có độ dài từ?",
      options: {
        A: "1 đến 20 ký tự",
        B: "1 đến 30 ký tự",
        C: "0 đến 15 ký tự",
        D: "1 đến 40 ký tự",
      },
      correct: "A",
    },
    {
      question:
        "62) Khi tạo tài khoản mới ta có sự lựa chọn cho các chính sách password User Cannot change password thì sẽ làm gì?",
      options: {
        A: "Lần đăng nhập tiếp theo sẽ phải đổi Password",
        B: "Tài khoản đó không được thay đổi password",
        C: "Password không bao giờ hết hạn",
        D: "Tài khoản bị khóa",
      },
      correct: "B",
    },
    {
      question:
        "63) 00132 Các nhóm Built in Domain Local nào dưới đây có thể backup file mà không phụ thuộc vào các quyền NTFS?",
      options: {
        A: "Server Operators",
        B: "Account Operators",
        C: "Backup Operators",
        D: "Administrator",
      },
      correct: "C",
    },
    {
      question: "64) Username nào là không đúng?",
      options: {
        A: "Flash_a",
        B: "123456",
        C: "anh",
        D: "bao=bao",
      },
      correct: "D",
    },
    {
      question:
        "65) Tiện ích nào được dùng để tạo user accounts được lưu trữ trên Windows Server 2008 domain controllers?",
      options: {
        A: "Active Directory Users and Computers",
        B: "Active Directory Users and Groups",
        C: "Domain Userver and Groups",
        D: "Domain Users and Computers",
      },
      correct: "A",
    },
    {
      question:
        "66) Hai tài khoản user cục bộ nào tự động được tạo ra khi cài đặt Windows 7 ?",
      options: {
        A: "Administrator và Guest",
        B: "Administrators và Power Users",
        C: "Administrator và Power User",
        D: "Administrators và Guests",
      },
      correct: "A",
    },
    {
      question:
        "67) Khi tạo tài khoản mới ta có sự lựa chọn cho các chính sách Password Account is disible thì sẽ làm gì?",
      options: {
        A: "Lần đăng nhập tiếp theo sẽ phải đổi Password",
        B: "Password không bao giờ hết hạn",
        C: "Tài khoản đó không được thay đổi password",
        D: "Tài khoản bị khóa",
      },
      correct: "D",
    },
    {
      question:
        "68) Tài khoản có tên là Administrator là tài khoản gì trên hệ điều hành Windows?",
      options: {
        A: "Tài khoản user thông thường",
        B: "Tài khoản quản trị máy tính",
        C: "Tài khoản để cứu hộ máy tính",
        D: "Tài khoản cài đặt máy tính",
      },
      correct: "B",
    },
    {
      question:
        "69) 00031 Khi tiến hành cài đặt dịch vụ Active Directory, nếu muốn tạo mới Domain Controller để quản lý 1 domain thì chọn mục nào?",
      options: {
        A: "Domain in a new forest",
        B: "Child domain in an existing domain tree",
        C: "Domain tree in an existing forest",
        D: "Tất cả đều đúng",
      },
      correct: "A",
    },
    {
      question: "70) Nhóm built in nào có quyền share trong domain controller?",
      options: {
        A: "Power Operators",
        B: "Users",
        C: "Power users",
        D: "Server Operators",
      },
      correct: "D",
    },
    {
      question:
        "71) Một người dùng quên mật khẩu của mình. Anh ta cố gắng đăng nhập hệ thống và nhận được thông báo lỗi nói rằng tài khoản của anh ta bị khóa và đề nghị anh ta liên hệ với người quản trị. Bạn là người quản trị, bạn phải làm gì?",
      options: {
        A: "Mở khóa (Unlock) tài khoản",
        B: "Enable tài khoản",
        C: "Đặt lại mật khẩu cho tài khoản",
        D: "Đổi tên tài khoản",
      },
      correct: "C",
    },
    {
      question: "72) Những nhóm nào không phải là nhóm bảo mật?",
      options: {
        A: "SID",
        B: "Local",
        C: "global",
        D: "domain local",
      },
      correct: "A",
    },
    {
      question: "73) 00026 Lệnh DCPROMO dùng để làm gì?",
      options: {
        A: "Nâng cấp Windows 7 Professional thành Domain controler",
        B: "Nâng cấp Windows 2003 Server thành Windows Server 2008",
        C: "Liệt kê danh sách các Domain controler",
        D: "Nâng cấp Windows Server 2008 thành Domain controler",
      },
      correct: "D",
    },
    {
      question:
        "74) 00150 Để thay đổi chính sách mật khẩu trong phần chính sách hệ thống của miền ta làm như sau :",
      options: {
        A: "Start/Programs/ Administrative Tools/Domain Security Policy /Account Policies/Password Policy",
        B: "Start/Programs/Administrative Tools/Domain Controller Security Policy /Security Settings/Account Policies/Password Policy",
        C: "Start/Programs/ Administrative Tools/Domain Security Policy /Security Settings/Account Policies/Password Policy",
        D: "Start/Programs/ Administrative Tools/Domain Controller Security Policy /Account Policies/Password Policy",
      },
      correct: "A",
    },
    {
      question:
        "75) Nguyên tắc nào sau đây không đúng khi tạo user trên Windows 7?",
      options: {
        A: "1 User name có thể dài đến 20 ký tự",
        B: "Passwords user có phân biệt chữ thường và chữ hoa",
        C: "User name có phân biệt chữ thường và chữ hoa",
        D: "Ký tự * không được dùng để đặt tên user name",
      },
      correct: "C",
    },
    {
      question:
        "76) 00159 Để xem tất cả các tài khoản trên Windows 7 đồng thời có thể xóa, đổi tên hoặc tạo thêm tài khoản mới. Trong Computer Management ta chọn",
      options: {
        A: "User Accounts",
        B: "Task Manager",
        C: "Share Folder",
        D: "Local User and Groups",
      },
      correct: "D",
    },
    {
      question:
        "77) 00134 Để nâng cao bảo mật trong mạng bạn thực hiện chính sách Maximum Password Age là 7 ngày. Chính sách này sẽ yêu cầu người sử dụng phải đổi mật khẩu hàng tuần. Tuy nhiên sau một thời gian bạn nhận thấy có một vài người sử dụng sau khi đổi sang mật khẩu mới lại đổi ngay về mật khẩu cũ. Bạn sẽ sử dụng chính sách nào dưới đây để tránh tình trạng này?",
      options: {
        A: "Minimum Password Age",
        B: "Enforce Password History",
        C: "Maximum Password Age",
        D: "Store Passwords Using Reversible Encrytion",
      },
      correct: "A",
    },
    {
      question:
        "78) Trong chính sách mật khẩu của server 2008 thì trong chính sách sau bao nhiêu ngày thì phải đổi password?",
      options: {
        A: "42",
        B: "44",
        C: "48",
        D: "46",
      },
      correct: "A",
    },
    {
      question:
        "79) Trong chính sách mật khẩu của server 2008 thì chính sách sẽ lưu bao nhiêu password cũ?",
      options: {
        A: "28",
        B: "26",
        C: "30",
        D: "24",
      },
      correct: "D",
    },
    {
      question: "80) Accout Policy được dùng để chỉ định các thông số nào?",
      options: {
        A: "Chỉ định thông số về thông tin AD",
        B: "Chỉ định thông số về tài khoản người dùng",
        C: "Chỉ định thông số về cấu hình DC",
        D: "Chỉ định thông số và bản quyền DC",
      },
      correct: "B",
    },
    {
      question:
        "81) Trong chính sách kiểm toán, chính sách Audit Directory Service Access là gì?",
      options: {
        A: "Ghi nhận việc truy cập các tập tin, thư mục và máy in",
        B: "Ghi nhận việc thay đổi trong chính sách kiểm toán",
        C: "Ghi nhận các sự kiện liên quan đến quá trình Logon",
        D: "Ghi nhận việc truy cập các dịch vụ thư mục",
      },
      correct: "D",
    },
    {
      question:
        "82) Trong chính sách kiểm toán, chính sách Audit Policy Change là gì?",
      options: {
        A: "Ghi nhận các sự kiện liên quan đến quá trình Logon",
        B: "Ghi nhận việc truy cập các dịch vụ thư mục",
        C: "Ghi nhận việc truy cập các tập tin, thư mục và máy in",
        D: "Ghi nhận việc thay đổi trong chính sách kiểm toán",
      },
      correct: "D",
    },
    {
      question:
        "83) Giới hạn tài khoản user có password trắng đăng nhập, là chính sách nào dưới đây?",
      options: {
        A: "Accout: rename guuest account",
        B: "Interactive logon: do not display last username",
        C: "Accout: Limit local account use of blank passwords to console logon only",
        D: "cả 3 câu đề sai",
      },
      correct: "C",
    },
    {
      question:
        "84) Trong chính sách mật khẩu của server 2008 thì trong chính sách sau bao nhiêu ngày mới được đổi password?",
      options: {
        A: "5",
        B: "7",
        C: "1",
        D: "3",
      },
      correct: "C",
    },
    {
      question:
        "85) Trong chính sách kiểm toán, chính sách Audit Object Access là gì?",
      options: {
        A: "Ghi nhận việc truy cập các dịch vụ thư mục",
        B: "Ghi nhận việc truy cập các tập tin, thư mục và máy in",
        C: "Ghi nhận việc thay đổi trong chính sách kiểm toán",
        D: "Ghi nhận các sự kiện liên quan đến quá trình Logon",
      },
      correct: "B",
    },
    {
      question:
        "86) Chính sách nào giúp cho người dùng shutdown máy tính cục bộ server 2008?",
      options: {
        A: "Deny Logon Locally",
        B: "Load nad unload device",
        C: "Log on Locally",
        D: "Shutdown the system",
      },
      correct: "D",
    },
    {
      question:
        "87) 00019 Để vào Group Policy thì chúng ta dùng lệnh nào sau đây?",
      options: {
        A: "SECPOL.MSC",
        B: "MSCONFIG",
        C: "DISKMGMT.MSC",
        D: "GPEDIT.MSC",
      },
      correct: "D",
    },
    {
      question:
        "88) Công cụ nào sau đây cung cấp thông tin về các chương trình và quá trình đang chạy (thực thi) trên máy tính?",
      options: {
        A: "Task Manager",
        B: "Add/Remove Program",
        C: "Computer Management",
        D: "Biểu tượng System trong Control Panel",
      },
      correct: "A",
    },
    {
      question:
        "89) Trong chế độ mặc định của windows server 2008 thì những nhóm hay user nào được đăng nhập vào server 2008?",
      options: {
        A: "Nhóm user",
        B: "Nhóm administrator",
        C: "teo",
        D: "user",
      },
      correct: "B",
    },
    {
      question:
        "90) Trong chính sách kiểm toán, chính sách Audit Logon Events là gì?",
      options: {
        A: "Ghi nhận các sự kiện liên quan đến quá trình Logon",
        B: "Ghi nhận việc thay đổi trong chính sách kiểm toán",
        C: "Ghi nhận việc truy cập các tập tin, thư mục và máy in",
        D: "Ghi nhận việc truy cập các dịch vụ thư mục",
      },
      correct: "A",
    },
    {
      question: "91) Bộ lọc IPsec dựa trên yếu tố nào?",
      options: {
        A: "Cả 3 câu trên đều đúng",
        B: "Địa chỉ IP, subnet hoặc tên DNS của máy đích",
        C: "Địa chỉ IP, subnet hoặc tên DNS của máy nguồn",
        D: "Theo số hiệu cổng và kiểu cổng",
      },
      correct: "A",
    },
    {
      question:
        "92) Trong chính sách mật khẩu của server 2008 DC thì chính sách mật khẩu sẽ có ít nhất bao nhiêu ký tự?",
      options: {
        A: "8",
        B: "10",
        C: "7",
        D: "9",
      },
      correct: "C",
    },
    {
      question:
        "93) Domain Controller Security Policy với các tùy chỉnh trong đây sẽ tác động lên đâu?",
      options: {
        A: "Tác động lên DC và User",
        B: "Tác động lên DC trên Domain",
        C: "Tác động lên Local",
        D: "Tác động lên User trên Domain",
      },
      correct: "B",
    },
    {
      question:
        "94) Trong server 2008 mặc định nhóm tài khoản nào không được đăng nhập trong server 2008?",
      options: {
        A: "nhóm Backup Operators",
        B: "nhóm users",
        C: "nhóm adminstrators",
        D: "nhóm Server Operators",
      },
      correct: "B",
    },
    {
      question: "95) IP Securirty hoạt động ở tầng thứ mấy của mô hình OSI?",
      options: {
        A: "2",
        B: "3",
        C: "4",
        D: "5",
      },
      correct: "B",
    },
    {
      question:
        "96) Trong chính sách mật khẩu, chính sách Reset Account Lockout Counter After là gì?",
      options: {
        A: "quy định số lần cố gắng đăng nhập trước khi tài khoản bị khóa",
        B: "quy định thời gian khóa tài khoản",
        C: "quy định thời gian đếm lại số lần đăng nhập không thành công",
        D: "Cả 3 đều sai",
      },
      correct: "C",
    },
    {
      question:
        "97) Domain Security Policy các tùy chỉnh trong này sẽ tác động lên đâu?",
      options: {
        A: "Tác động lên DC và User trên Domain",
        B: "Tác động lên DC trên Domain",
        C: "Tác động lên User trên Domain",
        D: "Tác động trên Local",
      },
      correct: "A",
    },
    {
      question:
        "98) Trong chính sách mật khẩu, chính sách Accout Lockout Duration là gì?",
      options: {
        A: "quy định thời gian đếm lại số lần đăng nhập không thành công",
        B: "quy định thời gian khóa tài khoản",
        C: "quy định số lần cố gắng đăng nhập trước khi tài khoản bị khóa",
        D: "Cả 3 đều sai",
      },
      correct: "B",
    },
    {
      question: "99) Trong chế độ chính sách mật khẩu của server 2008 là?",
      options: {
        A: "đơn giản",
        B: "bình thường",
        C: "Phức tạp",
        D: "chữ hoa và chữ thường",
      },
      correct: "C",
    },
    {
      question:
        "100) Trong chính sách mật khẩu, chính sách Accout Lockout threshold là gì?",
      options: {
        A: "quy định số lần cố gắng đăng nhập trước khi tài khoản bị khóa",
        B: "quy định thời gian khóa tài khoản",
        C: "quy định thời gian đếm lại số lần đăng nhập không thành công",
        D: "Cả 3 đều sai",
      },
      correct: "A",
    },
    {
      question:
        "101) Để thực thi các chính sách khi có sự thay đổi thì thứ tự ưu tiên nào đúng?",
      options: {
        A: "restart máy tính, log off, gpupdate /force",
        B: "gpupdate / force, log off, restart máy tính",
        C: "log off, gpupdate /force, restart máy tính",
        D: "log off, restart máy tính, gpudate /force",
      },
      correct: "B",
    },
    {
      question: "102) câu lệnh dùng để mở Account Policy là gì?",
      options: {
        A: "gpedit.msc",
        B: "secpol.msc",
        C: "gpupdate",
        D: "mmc",
      },
      correct: "B",
    },
    {
      question:
        "103) Mục nào trong Group Policy cho phép khóa 1 User hoặc 1 Group Local không cho Login vào Windows?",
      options: {
        A: "Account lock out duration",
        B: "Deny logon as a services",
        C: "Deny logon through Terminal Services",
        D: "Deny logon locally",
      },
      correct: "D",
    },
    {
      question:
        "104) Để cập nhập tất cả thông tin vào Group policy. Bạn thực hiện câu lệnh nào sau đây?",
      options: {
        A: "GPDATE /FORCE",
        B: "GROUPUPDATE /FORCE",
        C: "GPUPDATE /FORCE",
        D: "UPDATE /FORCE",
      },
      correct: "C",
    },
    {
      question:
        "105) Cấm user truy cập vào Control Panel thì tạo theo ý nào dưới đây là đúng?",
      options: {
        A: "User Configuration -->Administrator Templates -->Control Panel --> Phibit access to the Control Panel --> Not Configured",
        B: "User Configuration -->Administrator Templates -->Control Panel --> Phibit access to the Control Panel --> enable",
        C: "User Configuration -->Administrator Templates -->Control Panel --> Phibit access to the Control Panel --> disable",
        D: "Cả 3 đều sai",
      },
      correct: "B",
    },
    {
      question:
        "106) Để áp những chính sách lên trên máy tính thì ta cấu hình ở đâu?",
      options: {
        A: "Computer configuration",
        B: "Local user and Group",
        C: "User Configuration",
        D: "Local policy",
      },
      correct: "A",
    },
    {
      question:
        "107) Trong GPO nếu có chính sách nhóm tại chổ trên máy cục sẽ xử lý thế nào, khi có chính sách của site hoặc miền",
      options: {
        A: "xử lý đồng thời",
        B: "xử lý trước chính sách của site hoặc miền",
        C: "xử lý song song",
        D: "xử lý sau chính sách của site hoặc miền",
      },
      correct: "B",
    },
    {
      question:
        "108) Để xóa icon của biểu tượng Recycle bin của user nào đó thì ta làm như thế nào?",
      options: {
        A: "User configuration --> Admin template --> Control Panel --> Remove icon Recycle Bin",
        B: "Computer configuration --> Admin template --> Control panel --> Remove icon Recycle Bin",
        C: "User configuration --> Admin template --> Desktop --> Remove icon Recycle Bin",
        D: "Computer configuration --> Admin template --> Desktop --> Remove icon Recycle Bin",
      },
      correct: "C",
    },
    {
      question:
        "109) Hiện một vài items trong control panel, thì ta làm sao, mặc định những items không cho phép là ẩn hết?",
      options: {
        A: "Configuration Computer --> Control Panel --> show specified control panel items",
        B: "Configuration User --> Control Panel --> hide specified control panel items",
        C: "Configuration User --> Control Panel --> show specified control panel items",
        D: "Configuration Computer --> Control Panel --> hide specified control panel items",
      },
      correct: "C",
    },
    {
      question: "110) 00045 Hệ thống file nào sau đây cho phép bảo mật nội bộ?",
      options: {
        A: "NTFS",
        B: "FAT16",
        C: "HPFS",
        D: "FAT32",
      },
      correct: "A",
    },
    {
      question:
        "111) Ẩn một vài items trong control panel, thì ta làm sao, mặc định những items còn lại là hiện ra ?",
      options: {
        A: "Configuration User --> Control Panel --> show specified control panel items",
        B: "Configuration Computer --> Control Panel --> show specified control panel items",
        C: "Configuration Computer --> Control Panel --> hide specified control panel items",
        D: "Configuration User --> Control Panel --> hide specified control panel items",
      },
      correct: "D",
    },
    {
      question: "112) Chức năng nào là của Group Policy?",
      options: {
        A: "Gán quyền hệ thống cho người dùng",
        B: "Triển khai phần mềm ứng dụng",
        C: "Cả 2 yếu tố trên đều đúng",
        D: "Cả 2 yếu tố trên đều sai",
      },
      correct: "C",
    },
    {
      question:
        "113) Khi các máy con gia nhập vào domain thì các tên của máy con nằm ở đâu?",
      options: {
        A: "Active Directory Users and Computer --> Domain Controller",
        B: "Active Directory Users and Computer --> Computers",
        C: "Active Directory Users and Computer --> Managed Service Accouts",
        D: "Active Directory Users and Computer --> Users",
      },
      correct: "B",
    },
    {
      question:
        "114) các chính sách được áp dụng cho nhiều cấp độ là tính chất của?",
      options: {
        A: "Workgroup",
        B: "Domain",
        C: "Cả 2 đều đúng",
        D: "Cả 2 đều sai",
      },
      correct: "B",
    },
    {
      question: "115) Chức năng nào là đúng của Group Policy",
      options: {
        A: "Xóa bỏ phần mềm của admin",
        B: "Xóa tài khoản Administrator",
        C: "Thi hành một vài chính sách không cần thiết cho Admin",
        D: "Giới hạn những ứng dụng mà người dùng được phép thi hành",
      },
      correct: "D",
    },
    {
      question:
        "116) 00033 Để một user thuộc nhóm Domain Users có thể đăng nhập cục bộ vào máy Domain Controller thì trong chính sách hệ thống (User Rights), Anh/Chị phải cấp quyền gì cho user đó?",
      options: {
        A: "Deny log on locally",
        B: "Allow log on local computer",
        C: "Allow log on locally",
        D: "Allow log on through Terminal services",
      },
      correct: "C",
    },
    {
      question: "117) Để OU ta phải làm sao",
      options: {
        A: "nhấp phải vào User --> new -->OU",
        B: "nhấp phải vào User --> new -->User",
        C: "nhấp phải vào Computer --> new -->OU",
        D: "nhấp phải vào Domain Controller --> new -->OU",
      },
      correct: "D",
    },
    {
      question:
        "118) Quyền gì sẽ áp đặt lên thư mục con khi ta áp đặt quyền NTFS lên thư mục cha của nó?",
      options: {
        A: "Read",
        B: "Giống quyền thư mục cha",
        C: "Write",
        D: "Full Control",
      },
      correct: "B",
    },
    {
      question:
        "119) Người dùng có tên là Hải khi truy nhập một thư mục chia sẻ trên máy bạn, cô ấy tạo 1 thư mục con trong đó, khi đó cô ấy nhận được 1 thông báo lỗi như sau : Access is denied”. Bạn nên cấp quyền gì trong quyền chia sẻ để Hải có thể tạo được thư mục con trong thư mục chia sẻ?",
      options: {
        A: "Read",
        B: "Không cấp được",
        C: "Write",
        D: "Change",
      },
      correct: "D",
    },
    {
      question:
        "120) Muốn cho những phần mềm nào được phép chạy cho những user thì ta làm sao?",
      options: {
        A: "Configuration Computer --> System --> Don't run specified win application",
        B: "Configuration User --> Control Panel --> Don't run specified win application",
        C: "Configuration Computer --> Control Panel --> Don't run specified win application",
        D: "Configuration User --> System --> Don't run specified win application",
      },
      correct: "D",
    },
    {
      question:
        "121) Các cấu hình liên quan đến các phần mềm được cài đặt dành cho người dùng ta điều chỉnh những cấu hình ở đâu?",
      options: {
        A: "User configuration -->Window Setting",
        B: "User configuration -->Software Setting",
        C: "User configuration -->Administrative Template",
        D: "Computer configuration -->Software Setting",
      },
      correct: "B",
    },
    {
      question:
        "122) Muốn giấu biểu tượng Recycle Bin trên màn hình Desktop ta làm sao?",
      options: {
        A: "User Configuration -->Administrator Templates --> Desktop --> Remove Recycle Bin icon from desktop-->enable",
        B: "User Configuration -->Administrator Templates --> Desktop --> Remove Recycle Bin icon from desktop-->Not Configured",
        C: "User Configuration -->Administrator Templates --> Desktop --> Remove Recycle Bin icon from desktop-->disable",
        D: "Cả 3 câu trên đều sai",
      },
      correct: "A",
    },
    {
      question:
        "123) Hiển thị button shutdown tại màn hình của user thì ta làm sao?",
      options: {
        A: "Configurtion Computer --> Admin templete --> Templete --> system --> displaf lay shutdown --> disible",
        B: "Configurtion Computer --> Admin templete --> Templete --> system --> Auto Play policies --> enable",
        C: "Configurtion User --> Admin templete --> Templete --> system --> display shutdown --> enable",
        D: "Configurtion Computer --> Admin templete --> Templete --> system --> display shutdown --> enable",
      },
      correct: "C",
    },
    {
      question:
        "124) Triển khai chính sách nhóm trên miền, chính sách Software Setting các cấu hình trên chúng lên quan tới vấn đề gì?",
      options: {
        A: "Các chính sách hệ thống",
        B: "Các cấu hình liên quan đến các phần mềm được cài đặt",
        C: "Các thiết lập liên quan trong quá trình sử dụng Windows",
        D: "Các thiết lập cho các thành phần của Windows",
      },
      correct: "B",
    },
    {
      question: "125) Chức năng nào là của Group Policy?",
      options: {
        A: "Đơn giản hóa và hạn chế các chương trình",
        B: "Kiểm soát kịch bản đăng nhập",
        C: "Cả 2 yếu tố trên đều đúng",
        D: "Cả 2 yếu tố trên đều sai",
      },
      correct: "A",
    },
    {
      question:
        "126) 00008 Lệnh nào được sử dụng để bắt đầu Microsoft Management Console (MMC)?",
      options: {
        A: "MMC",
        B: "MANAGECON",
        C: "ADMINCONSOLE",
        D: "MMCONSOLE",
      },
      correct: "A",
    },
    {
      question: "127) Chức năng nào là của Group Policy?",
      options: {
        A: "Giới hạn những ứng dụng mà người dùng được phép thi hành",
        B: "Kiểm soát các thiết lập hệ thống",
        C: "Cả 2 yếu tố trên đều đúng",
        D: "Cả 2 yếu tố trên đều sai",
      },
      correct: "C",
    },
    {
      question:
        "128) 00128 Cấu hình mặc định khi chúng ta thực hiện các policy là?",
      options: {
        A: "Enabled",
        B: "Disabled",
        C: "Not Configured",
        D: "Allowed",
      },
      correct: "C",
    },
    {
      question:
        "129) Thực thể nào sau đây cho phép phát hành , quản lý, và phân phối các chứng chỉ số ?",
      options: {
        A: "Chính phủ (NSA)",
        B: "PKI",
        C: "Quyền cấp chứng chỉ (Certificate Authority)",
        D: "Quyền đang ký (Registation Authority)",
      },
      correct: "C",
    },
    {
      question:
        "130) Ta đang sử dụng trang web có tên miền Taolao.com nhưng khi truy cập www.taolao.com thì không vào được ta phải cấu hình gì trên DNS?",
      options: {
        A: "Tạo Host A để phân giải từ www.taolao.com thành Taolao.com",
        B: "Tạo Alias để phân giải từ www.taolao.com thành Taolao.com",
        C: "cả 2 câu a và b đều dúng",
        D: "Cả 2 câu a và b đều sai",
      },
      correct: "C",
    },
    {
      question: "131) Định tuyến tĩnh là loại định tuyến?",
      options: {
        A: "Dùng cho mạng nhỏ cấu trúc đơn giản",
        B: "Nhà quản trị chỉ việc cấu hình giao thức định tuyến cho Router",
        C: "Router có thể giúp lựa chọn đường đi ngắn nhất trên mạng",
        D: "Nhà quản trị phải cấu hình từng dòng lệnh cho các mạng đích cần thiết",
      },
      correct: "D",
    },
    {
      question:
        "132) Các giao thức nào sau đây cần xóa trên một máy chủ email để ngăn chặn một user trái phép khai thác các điểm yếu bảo mật từ phần mềm giám sát mạng ?",
      options: {
        A: "POP3",
        B: "TCP/IP",
        C: "IMAP",
        D: "SNMP",
      },
      correct: "D",
    },
    {
      question: "133) Giao thức HTTP là:",
      options: {
        A: "Giao thức tầng vận chuyển cho phép truyền tải các trang web)",
        B: "Giao thức ứng dụng cho phép các máy tính giao tiếp với nhau qua Web và có khả năng liên kết các trang Web với nhau",
        C: "Giao diện web",
        D: "Một thành phần của tên miền",
      },
      correct: "B",
    },
    {
      question:
        "134) Dịch vụ mạng nào sau đây có thể đảm bảo cho máy tính của bạn nhận được IP, subnet mask, default gateway, DNS?",
      options: {
        A: "WINS",
        B: "DNS",
        C: "DHCP",
        D: "FTP",
      },
      correct: "C",
    },
    {
      question:
        "135) 00007 Để xem địa chỉ IP của các Card mạng ta có thể dùng lệnh nào?",
      options: {
        A: "nslookup",
        B: "ping",
        C: "ipconfig",
        D: "tracert",
      },
      correct: "C",
    },
    {
      question: "136) Nhược điểm của BootTP là?",
      options: {
        A: "Thu thập MAC",
        B: "Thu thập cấu hình PC",
        C: "Thu thập ip",
        D: "Tất cả",
      },
      correct: "A",
    },
    {
      question:
        "137) Lan dự tính gia nhập một máy trạm Windows XP vào domain có tên abc.com. Các thao tác Lan thực hiện như sau: - Nhấp phải chuột vào My Computer --> Properties->Chọn tab Computer Name --> Change-->Tại mục domain, nhập tên miền abc.com-->Sau đó nhấp OK để thực hiện. Màn hình thông báo lỗi xuất hiện. Anh/Chị hãy cho biết nguyên nhân và cách khắc phục.",
      options: {
        A: "Do Lan chưa cấu hình DNS cho máy XP để hệ thống có thể phân giải tên miền.",
        B: "Không thể gia nhập máy Windows XP vào domain.",
        C: "Do Lan nhập sai tên miền",
        D: "Cả a và b đúng",
      },
      correct: "A",
    },
    {
      question:
        "138) Trong các giao thức sau, giao thức nào được sử dụng trong dịch vụ mail ?",
      options: {
        A: "TCP/IP và FTP",
        B: "FTP và HTTP",
        C: "POP3 và SMTP",
        D: "NetBEUI và TCP/IP",
      },
      correct: "C",
    },
    {
      question:
        "139) 00038 Khi sử dụng dịch vụ FTP. Kết nối vào FTP Server thì phần lớn FTP Server cho phép kết nói thông qua account nào?",
      options: {
        A: "Administrator",
        B: "Anonymous",
        C: "Netuser",
        D: "Guest",
      },
      correct: "B",
    },
    {
      question:
        "140) Thiết bị nào cho phép ta kết nối đến một mạng LAN của công ty qua Internet thông qua một kênh được mã hóa an toàn ?",
      options: {
        A: "WEP",
        B: "Modem",
        C: "VPN",
        D: "Telnet",
      },
      correct: "C",
    },
    {
      question:
        "141) Các thiết bị hay các ứng dụng bảo mật nào sau đây nên được sử dụng để theo dõi và cảnh báo các quản trị mạng về truy cập trái phép ?",
      options: {
        A: "Hệ thống phát hiện xâm nhập (IDS)",
        B: "Dụng cụ phân tích mạng",
        C: "Switch",
        D: "Chương trình Antivirus",
      },
      correct: "A",
    },
    {
      question: "142) Record MX dùng làm gì?",
      options: {
        A: "Dùng để backup",
        B: "Cho dịch vụ chuyển gói tin",
        C: "Dùng cho dịch vụ FTP",
        D: "Cho dịch vụ chuyển mail",
      },
      correct: "D",
    },
    {
      question:
        "143) Sau khi máy server nhận được thông tin xin IP của client thì máy server sẽ gửi gói tin gì ra?",
      options: {
        A: "DHCPOFFER",
        B: "DHCPREQUEST",
        C: "DHCPACK",
        D: "DHCPDISCOVER",
      },
      correct: "A",
    },
    {
      question:
        "144) Muốn chặn một dãy IP nào không muốn cấp cho client thì ta làm sao?",
      options: {
        A: "Cấu hình trong Exclusion Range",
        B: "Cấu hình trong Feature",
        C: "Cấu hình trong Address",
        D: "Cấu hình trong Role",
      },
      correct: "A",
    },
    {
      question: "145) Dịch vụ VPN có chức năng chính là gì?",
      options: {
        A: "Điều khiển máy tính từ xa",
        B: "Cấp địa chỉ IP tự động",
        C: "Tạo Email sử dụng qua Internet",
        D: "Tạo mạng riêng ảo thông qua mạng Internet",
      },
      correct: "D",
    },
    {
      question: "146) Hãy cho biết giao thức được sử dụng nhận mail?",
      options: {
        A: "HTTP",
        B: "SMTP",
        C: "POP3",
        D: "RDP",
      },
      correct: "C",
    },
    {
      question:
        "147) Trong cơ chế hoạt động của DHCP khi máy client muốn xin IP thì nó gửi gói tin gì ra?",
      options: {
        A: "DHCPACK",
        B: "DHCPDISCOVER",
        C: "DHCPREQUEST",
        D: "DHCPOFFER",
      },
      correct: "B",
    },
    {
      question: "148) DHCP Relay Agent là?",
      options: {
        A: "Đại lí chuyển tiếp DHCP",
        B: "Đại lí chuyển tiếp DNS",
        C: "Giúp tăng tốc DHCP server",
        D: "Tất cả",
      },
      correct: "A",
    },
    {
      question: "149) Thiết bị mạng nào làm giảm bớt sự va chạm (collisions)?",
      options: {
        A: "Hub",
        B: "Transceiver",
        C: "Switch",
        D: "NIC",
      },
      correct: "C",
    },
    {
      question:
        "150) Ta muốn cài đặt một máy chủ cung cấp các dịch vụ Web đến các máy trạm thông qua Internet. Ta không muốn để lộ mạng bên trong để tránh rủi ro. Phương pháp nào để thực hiện điều này ?",
      options: {
        A: "Cài đặt máy chủ trong một VLAN",
        B: "Cài đặt máy chủ trong mạng Extranet",
        C: "Cài đặt máy chủ trong một DMZ",
        D: "Cài đặt máy chủ trong mạng Intranet",
      },
      correct: "C",
    },
    {
      question:
        "151) Dịch vụ nào cho phép chuyển các file từ trạm này sang trạm khác, bất kể yếu tố địa lý hay hệ điều hành sử dụng?",
      options: {
        A: "FTP",
        B: "Email",
        C: "Telnet",
        D: "WWW",
      },
      correct: "A",
    },
    {
      question:
        "152) Dịch vụ mạng nào cho phép các địa chỉ mạng bên trong được “che dấu”(hidden) khỏi các mạng bên ngoài và cho phép vài host của mạng bên trong sử dụng các địa chỉ trùng với mạng bên ngoài ?",
      options: {
        A: "VPN",
        B: "VLAN",
        C: "IP spoofing",
        D: "NAT",
      },
      correct: "D",
    },
    {
      question:
        "153) Việc phân giải tên máy trước khi có WINS thì dùng tập tin nào sau đây?",
      options: {
        A: "Lmhost",
        B: "REConect.txt",
        C: "Ntds.dit",
        D: "Tất cả",
      },
      correct: "A",
    },
    {
      question:
        "154) 00018 Dịch vụ nào được sử dụng để truyền các tập tin (file) giữa 2 máy tính sử dụng giao thức TCP?",
      options: {
        A: "SNMP",
        B: "HTTP",
        C: "FTP",
        D: "NNTP",
      },
      correct: "C",
    },
    {
      question: "155) Windows Server 2008 sử dụng giao thức nào?",
      options: {
        A: "IPX",
        B: "NetBEUI",
        C: "TCP/IP",
        D: "AppleTalk",
      },
      correct: "C",
    },
    {
      question: "156) Mục đích của một máy chủ RADIUS là?",
      options: {
        A: "Thỏa thuận tốc độ kết nối",
        B: "Mã hóa",
        C: "Packet Sniffing",
        D: "Xác thực",
      },
      correct: "D",
    },
    {
      question:
        "157) Vùng nào của cấu trúc liên kết bảo mật mạng chứa các máy chủ Intenet, như là web, FTP, và các máy chủ email ?",
      options: {
        A: "VLAN",
        B: "DMZ",
        C: "Intranet",
        D: "VPN",
      },
      correct: "B",
    },
    {
      question: "158) Dịch vụ DHCP được dùng để làm gì?",
      options: {
        A: "Ánh xạ giữa địa chỉ MAC và địa chỉ IP của máy",
        B: "Ánh xạ giữa tên máy và địa chỉ IP",
        C: "Cấp phát địa chỉ IP động cho các máy khách (client) trong mạng",
        D: "Quản lý và chứng thực người dùng thông qua tài khoản (account)",
      },
      correct: "C",
    },
    {
      question: "159) Trình bày ý nghĩa của thông số Preferred DNS server?",
      options: {
        A: "Là địa chỉ Web server",
        B: "Là mục tiêu của gói tin truy vấn DNS. Truy vấn DNS là gói tin yêu cầu phân giải từ tên ra địa chỉ IP hoặc ngược lại",
        C: "Là địa chỉ của DC",
        D: "Tất cả điều sai",
      },
      correct: "B",
    },
    {
      question:
        "160) Tiện ích nào sau đây là một phương thức bảo mật truy cập từ xa tốt hơn telnet ?",
      options: {
        A: "IPSec",
        B: "SSH",
        C: "SSL",
        D: "VPN",
      },
      correct: "B",
    },
    {
      question: "161) Phân bổ 1 ip cho 1 MAC, đây là cách của?",
      options: {
        A: "BootTP",
        B: "WINS",
        C: "DNS",
        D: "DHCP",
      },
      correct: "A",
    },
    {
      question:
        "162) Anh/Chị hãy cho biết mục Address Pool trong dịch vụ DHCP trên Windows Server 2003 dùng để chứa thông số nào sau đây ?",
      options: {
        A: "Vùng địa chỉ IP dùng để cấp phát cho máy trạm",
        B: "Các tùy chọn kèm theo địa chỉ IP cấp cho máy trạm",
        C: "Vùng địa chỉ dành riêng",
        D: "Vùng địa chỉ IP đã cấp cho máy trạm",
      },
      correct: "A",
    },
    {
      question: "163) Địa chỉ MAC là?",
      options: {
        A: "Có thể thay đổi bằng TCP/IP Properties của Windows",
        B: "Địa chỉ lớp 3 được Router xử lý cho việc định tuyến",
        C: "Địa chỉ lớp 4 được gắn với cổng dịch vụ",
        D: "Địa chỉ lớp 2 được gắn cứng vào Card mạng",
      },
      correct: "D",
    },
    {
      question: "164) HTTPS mặc định có cổng bao nhiêu?",
      options: {
        A: "443",
        B: "80",
        C: "110",
        D: "143",
      },
      correct: "A",
    },
    {
      question: "165) Có thể tạo nhiều scope trong 1 DHCP server được không?",
      options: {
        A: "không",
        B: "Có",
      },
      correct: "B",
    },
    {
      question:
        "166) Một máy chủ trên mạng có một chương trình đang chạy vượt quá thẩm quyền . Loại tấn công nào đã xảy ra ?",
      options: {
        A: "DDoS",
        B: "Back door",
        C: "DoS",
        D: "Social engineering (Khai thác giao tiếp)",
      },
      correct: "B",
    },
    {
      question: "167) Các máy DHCP server khi nào mới cấp ip cho client?",
      options: {
        A: "Khi đã kích hoạt scope",
        B: "Khi đã tạo scope",
        C: "Khi đã được trao quyền",
        D: "Tất cả các câu trả lời trên",
      },
      correct: "D",
    },
    {
      question:
        "168) Bạn muốn xem địa chỉ MAC (địa chỉ vật lý) của card mạng. Bạn nên làm gì?",
      options: {
        A: "Từ Device Manager snap-in, xem properties của card mạng",
        B: "Từ Servces snap-in, xem properties của card kết nối",
        C: "Vào DOS, gõ lệnh Net view \\server1",
        D: "Vào DOS, gõ lệnh Ipconfig /all",
      },
      correct: "D",
    },
    {
      question: "169) POP3 có cổng bao nhiêu?",
      options: {
        A: "110",
        B: "443",
        C: "25",
        D: "Tất cả đều đúng",
      },
      correct: "A",
    },
    {
      question:
        "170) 0000500075Mục đích của việc cấu hình scope option trong DHCP là?",
      options: {
        A: "Cấu hình dãy IP cho các máy con",
        B: "Cấp phát cố định một IP cho một máy cụ thể",
        C: "Cấu hình các tùy chọn như default getway, DNS ...",
        D: "Tất cả đều sai",
      },
      correct: "C",
    },
    {
      question: "171) Các loại khoá mật mã nào sau đây dễ bị crack nhất ?",
      options: {
        A: "256 bit",
        B: "40 bit",
        C: "128 bit",
        D: "56 bit",
      },
      correct: "B",
    },
    {
      question: "172) Hãy cho biết giao thức được sử dụng để gửi mail?",
      options: {
        A: "SMTP",
        B: "FTP",
        C: "HTTP",
        D: "POP3",
      },
      correct: "A",
    },
    {
      question:
        "173) Loại tấn công nào sử dụng nhiều hơn một máy tính để tấn công nạn nhân ?",
      options: {
        A: "Sâu",
        B: "Tấn công UDP",
        C: "DoS",
        D: "DDoS",
      },
      correct: "D",
    },
    {
      question:
        "174) Không sử dụng một liên kết chuyên dụng , phương pháp tốt nhất để kết nối hai mạng được định vị trong các văn phòng có khoảng cách địa lý xa nhau là gì ?",
      options: {
        A: "Tường lửa",
        B: "VPN",
        C: "VLAN",
        D: "DMZ",
      },
      correct: "B",
    },
    {
      question:
        "175) LAC ( L2TP Access Control) và LNS ( L2TP Network Server)) là các thành phần của giao thức đường hầm nào ?",
      options: {
        A: "IPSec",
        B: "PPTP",
        C: "PPP",
        D: "L2TP",
      },
      correct: "D",
    },
    {
      question:
        "176) Giao thức mạng nào dưới đây được sử dụng trong mạng cục bộ LAN?",
      options: {
        A: "TCP/IP",
        B: "IPX",
        C: "NETBIOS",
        D: "Tất cả các câu trên",
      },
      correct: "D",
    },
    {
      question: "177) Trong DNS record nào phân giải từ IP thành tên?",
      options: {
        A: "MX record",
        B: "Host A",
        C: "Pointer",
        D: "Tất cả đều đúng",
      },
      correct: "C",
    },
    {
      question:
        "178) Phương thức nào mà trong đó cả hai bên đều có thể đồng thời gửi dữ liệu đi?",
      options: {
        A: "Simplex",
        B: "Half - duplex",
        C: "Full - duplex",
        D: "Phương thức khác",
      },
      correct: "C",
    },
    {
      question:
        "179) Muốn gán một địa chỉ IP cho một máy tính cố định nào đó thì ta cấu hình ở đâu?",
      options: {
        A: "Reservation",
        B: "Exclusion Range",
        C: "Role",
        D: "Feature",
      },
      correct: "A",
    },
    {
      question:
        "180) Kỹ thuật cho phép tạo kết nối ảo giữa hai mạng sử dụng một giao thức bảo mật được gọi là gì ?",
      options: {
        A: "Tunelling",
        B: "Internet",
        C: "Extranet",
        D: "VLAN",
      },
      correct: "A",
    },
    {
      question: "181) Dịch vụ mạng SMTP dùng để?",
      options: {
        A: "Gửi thư điện tử",
        B: "Nhận thư điện tử",
        C: "Phân giải tên và địa chỉ",
        D: "Cấp địa chỉ cho máy trạm",
      },
      correct: "A",
    },
    {
      question: "182) Chương trình Telnet cho phép?",
      options: {
        A: "Người sử dụng từ xa có thể chạy các chương trình ở trên host",
        B: "Theo dõi toàn bộ hoạt động của mạng",
        C: "Gọi một cuộc điện thoại liên quốc gia",
        D: "Hiển thị danh sách các tập tin và thư mục",
      },
      correct: "A",
    },
    {
      question: "183) 00077 Ý nghĩa của việc cấu hình reservation là gì?",
      options: {
        A: "Tất cả đều sai",
        B: "Cấu hình dãy IP cho các máy con",
        C: "Cấp phát cố định một IP cho một máy cụ thể",
        D: "Cấu hình các tùy chọn như default getway, DNS ...",
      },
      correct: "C",
    },
    {
      question:
        "184) Các giao thức nào sau đây làm việc trên lớp IP để bảo vệ thông tin IP trên mạng ?",
      options: {
        A: "TACACS+",
        B: "IPX",
        C: "IPSec",
        D: "SSH",
      },
      correct: "C",
    },
    {
      question: "185) Hub là thiết bị hoạt động ở tầng nào của mô hình OSI?",
      options: {
        A: "Tầng Network",
        B: "Tầng Data Link",
        C: "Tầng Transport",
        D: "Tầng Vật lý",
      },
      correct: "D",
    },
    {
      question:
        "186) Kỹ thuật nào được sử dụng để bảo đảm thông tin liên lạc qua một mạng không được bảo mật ?",
      options: {
        A: "VPN",
        B: "Telnet",
        C: "PPP",
        D: "SLIP",
      },
      correct: "A",
    },
    {
      question:
        "187) Để phân giải địa chỉ IP thành địa chỉ MAC, sử dụng giao thức?",
      options: {
        A: "DHCP",
        B: "RARP",
        C: "ARP",
        D: "ICMP",
      },
      correct: "C",
    },
    {
      question:
        "188) Trong số các cặp giao thức và cổng dịch vụ sau, cặp nào là đúng?",
      options: {
        A: "HTTP: TCP Port 80",
        B: "SMTP: TCP Port 25?",
        C: "Telnet: UDP Port 23",
        D: "TFTP: TCP Port 69",
      },
      correct: "A",
    },
    {
      question: "189) Khả năng định tuyến được thực hiện bởi thiết bị?",
      options: {
        A: "Switch",
        B: "NIC",
        C: "Router",
        D: "Hub",
      },
      correct: "C",
    },
    {
      question: "190) SMTP có cổng bao nhiêu?",
      options: {
        A: "443",
        B: "25",
        C: "110",
        D: "Tất cả đều đúng",
      },
      correct: "B",
    },
    {
      question:
        "191) Các gói tin Broadcast dùng trong dịch vụ DHCP có đi qua Router được không?",
      options: {
        A: "Tất cả đều sai",
        B: "Có",
        C: "Có, nhưng Router phải có chuẩn RFC1542",
        D: "Không",
      },
      correct: "C",
    },
    {
      question: "192) Các tập tin nào sau đây có khả năng chứa virus nhất ?",
      options: {
        A: "bigpic.jpeg",
        B: "database.dat",
        C: "picture.gif.exe",
        D: "note.txt",
      },
      correct: "C",
    },
    {
      question:
        "193) Loại tấn công nào làm việc truy cập của user đến các tài nguyên mạng bị từ chối ?",
      options: {
        A: "Logic Bomb (bomb ngập lụt đường truyền)",
        B: "DoS",
        C: "Sâu",
        D: "Social engineering (Khai thác giao tiếp)",
      },
      correct: "B",
    },
    {
      question:
        "194) Địa chỉ nào được SWITCH sử dụng khi quyết định gửi data sang cổng (port) nào?",
      options: {
        A: "Destination MAC address",
        B: "Source MAC address",
        C: "Subnetwork address",
        D: "Network address",
      },
      correct: "A",
    },
    {
      question:
        "195) Dịch vụ nào cho phép người sử dụng từ một trạm làm việc của mình có thể đăng nhập vào một trạm ở xa qua mạng và có thể làm việc với hệ thống:",
      options: {
        A: "WWW",
        B: "FTP",
        C: "Email",
        D: "Telnet",
      },
      correct: "D",
    },
    {
      question:
        "196) Hãy cho biết biểu tượng máy tính bị chéo đỏ cho biết card mạng đang ở trạng thái nào sau đây?",
      options: {
        A: "Card mạng không nhận được IP",
        B: "Card mạng đang nhận IP",
        C: "Card mạng bị trùng IP với một card mạng khác",
        D: "Card mạng không được gắn cáp",
      },
      correct: "D",
    },
    {
      question:
        "197) Thiết bị mạng nào dùng để nối các mạng và kiểm soát được broadcast?",
      options: {
        A: "Ethernet switch",
        B: "Hub",
        C: "Bridge",
        D: "Router",
      },
      correct: "D",
    },
    {
      question: "198) Sự khác nhau giữa scope option và server option là?",
      options: {
        A: "Scope option là những tùy chọn có tác dụng trên scope đó còn server option là những tùy chọn có ảnh hưởng trên tất cả các scope.",
        B: "Scope option là cấu hình tùy chọn cho máy wordgroup còn server option là tùy chọn cho domain",
        C: "Không có sự khác nhau",
        D: "Tất cả đều sai",
      },
      correct: "A",
    },
    {
      question:
        "199) Cách nào sau đây là tốt nhất để chống lại điểm yếu bảo mật trong phần mềm HĐH ?",
      options: {
        A: "Cài đặt bản service pack mới nhất",
        B: "Cài đặt lại HĐH thông dụng",
        C: "Shut down hệ thống khi không sử dụng",
        D: "Cài đặt lại HĐH thông dụng",
      },
      correct: "A",
    },
    {
      question:
        "200) 00176 Để kiểm tra kết nối từ máy A đến máy B có địa chỉ IP 192.168.1.20, thực hiện?",
      options: {
        A: "Nslookup 192.168.1.20",
        B: "Ping 192.168.20.1",
        C: "Netstat 192.168.1.20",
        D: "Ping 192.168.1.20",
      },
      correct: "D",
    },
    {
      question:
        "201) Để một DHCP domain member server có thể cấp phát thông số IP thì cần phải thực hiện hành động gì trước tiên, với quyền hạn của ai?",
      options: {
        A: "Tạo scope",
        B: "Tạo scope options",
        C: "Authorize với quyền Domain Admins",
        D: "a và b là đúng",
      },
      correct: "C",
    },
    {
      question:
        "202) Khi cấu hình TCP/IP cho phép một PC truy cập Internet bạn phải cấu hình các thông số nào?",
      options: {
        A: "Cấu hình địa chỉ IP, Subnet mask và Preferred DNS Server",
        B: "Cấu hình địa chỉ IP, Subnet mask, Default Gateway",
        C: "Cấu hình địa chỉ IP, Subnet mask, Preferred DNS Server và Alternate DNS Server",
        D: "Cấu hình địa chỉ IP, Subnet mask, Default Gateway, Preferred DNS Server và Alternate DNS Server",
      },
      correct: "D",
    },
    {
      question:
        "203) Sử dụng dịch vụ nào sau đây để phân giải tên miền sang địa chỉ IP ?",
      options: {
        A: "FTP",
        B: "WINS",
        C: "DHCP",
        D: "DNS",
      },
      correct: "D",
    },
    {
      question:
        "204) Các dịch vụ quay số tương tự (Dial-up) sử dụng thiết bị nào để chuyển đổi tín hiệu số sang tín hiệu tương tự?",
      options: {
        A: "Router",
        B: "Modem",
        C: "NIC",
        D: "Repeater",
      },
      correct: "B",
    },
    {
      question:
        "205) Mức mã hóa WEP nào nên được thiết lập trên một mạng 802.11b ?",
      options: {
        A: "40 bit",
        B: "28 bit",
        C: "128 bit",
        D: "16 bit",
      },
      correct: "C",
    },
    {
      question: "206) Port (cổng) mặc định của giao thức HTTP là?",
      options: {
        A: "23",
        B: "8080",
        C: "81",
        D: "80",
      },
      correct: "D",
    },
    {
      question:
        "207) Điều gì cần được thực hiện với một email server để ngăn chặn user bên ngoài gởi email thông qua nó (chọn 2 đáp án)?",
      options: {
        A: "Xoá quyền truy cập POP3 và IMAP",
        B: "Hạn chế chuyên tiếp tín hiệu SMTP.",
        C: "Enable login được mã hóa",
        D: "Cài đặt phần mềm antivirus và antispam.",
      },
      correct: "B",
    },
    {
      question:
        "208) Giao thức được sử dụng rộng rãi nhất để truy cập kiểu quay số đến một máy chủ từ xa là (chọn 2 đáp án)?",
      options: {
        A: "SLIP",
        B: "PPP",
        C: "Telnet",
        D: "RAS",
      },
      correct: "B",
    },
    {
      question:
        "209) Thiết bị nào sử dụng bộ lọc gói và các quy tắc truy cập để kiểm soát truy cập đến các mạng riêng từ các mạng công cộng , như là Internet ?",
      options: {
        A: "Router",
        B: "Điểm truy cập không dây",
        C: "Tường lửa",
        D: "Switch",
      },
      correct: "C",
    },
    {
      question:
        "210) Một IP flood theo các host phát tán trực tiếp đến một Web server là một ví dụ của loại tấn công gì (chọn 2 câu)?",
      options: {
        A: "DoS phân tán (DDoS)",
        B: "Tấn công IP",
        C: "Sâu",
        D: "Trojan Hors",
      },
      correct: "A",
    },
    {
      question:
        "211) Loại máy phục vụ nào được sử dụng để chuyển địa chỉ IP sang tên NetBIOS?",
      options: {
        A: "WINS",
        B: "DHCP",
        C: "RIS",
        D: "HTTP",
      },
      correct: "A",
    },
    {
      question:
        "212) Cách bảo vệ nào sau đây là tốt nhất để chống lại tấn công DoS kiểu làm tràn băng thông và bộ đệm của hệ thống",
      options: {
        A: "Chặn giao thức ICMP",
        B: "Subnet mask",
        C: "Cài đặt phần mềm bảo vệ Antivirus",
        D: "Disable web server",
      },
      correct: "A",
    },
    {
      question: "213) FTP tương ứng với tầng nào của mô hình OSI?",
      options: {
        A: "Layer 5",
        B: "Layer 7",
        C: "Layer 6",
        D: "Layer 4",
      },
      correct: "B",
    },
    {
      question:
        "214) Công nghệ nào được sử dụng để chia một mạng bên trong thành mạng logic nhỏ hơn, dễ sử dụng hơn ?",
      options: {
        A: "NAT",
        B: "VPN",
        C: "VLAN",
        D: "Tunneling",
      },
      correct: "C",
    },
    {
      question:
        "215) Khi ta cài đặt các dịch vụ thì chúng ta có cấn đưa đĩa Windows Server 2008 vào để cài không?",
      options: {
        A: "không",
        B: "có",
        C: "Cả 2 yếu tố trên Sai",
        D: "Cả 2 yếu tố trên Đúng",
      },
      correct: "A",
    },
    {
      question:
        "216) Một Hub tốc độ 100Mbps có 12 cổng thì tốc độ của mỗi cổng sẽ là?",
      options: {
        A: "Tối thiểu 8.3Mbps khi có 12 máy tính cắm vào Hub",
        B: "Tối đa 100Mbps khi chỉ có một máy tính cắm vào Hub",
        C: "Tối thiểu 100Mbps khi chỉ có một máy tính cắm vào Hub",
        D: "Tối đa 100Mbps khi có 12 máy tính cắm vào Hub",
      },
      correct: "A",
    },
    {
      question: "217) Bản ghi qui định các tên server là?",
      options: {
        A: "NS",
        B: "SOA",
        C: "MX",
        D: "Cname",
      },
      correct: "A",
    },
    {
      question:
        "218) Cơ cấu bảo mật mạng không dây nào sau đây là ít an toàn nhất ?",
      options: {
        A: "Mã hóa WEP 40 bit",
        B: "Bảo mật định danh mạng",
        C: "VPN",
        D: "Mã hóa WEP 128 bi",
      },
      correct: "A",
    },
  ],
};
