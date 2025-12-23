const quizData = {
  all: [
    {
      question:
        "Câu 1: Điều nào sau đây không phải là chức năng của Ngân hàng Trung ương?",
      options: {
        A: "Thực thi chính sách tiền tệ",
        B: "Cho doanh nghiệp vay khi họ không vay được từ ngân hàng thương mại",
        C: "Độc quyền phát hành tiền",
        D: "Cho ngân hàng thương mại vay khi cần thiết",
      },
      correct: "B",
    },
    {
      question:
        "Câu 2: Ngân hàng trung ương quyết định tăng tỉ lệ dự trữ bắt buộc, khi đó:",
      options: {
        A: "Số nhân tiền giảm, cung tiền danh nghĩa tăng",
        B: "Số nhân tiền tăng, cung tiền danh nghĩa tăng",
        C: "Số nhân tiền giảm, cung tiền danh nghĩa giảm",
        D: "Số nhân tiền tăng, cung tiền danh nghĩa giảm",
      },
      correct: "C",
    },
    {
      question:
        "Câu 3: Tại sao bạn có thể muốn thử nghiệm một phiên bản hệ điều hành mới mà không ảnh hưởng đến hệ thống hiện tại?",
      options: {
        A: "Để kiểm tra tính tương thích với ứng dụng và phần mềm hiện tại",
        B: "Để kiểm tra hiệu suất của hệ điều hành mới",
        C: "Để đảm bảo tính ổn định trước khi triển khai",
        D: "Tất cả các phương án trên",
      },
      correct: "D",
    },
    {
      question:
        "Câu 4: Bao nhiêu RAM tối thiểu được khuyến nghị cho Windows Server 2019 Standard?",
      options: {
        A: "4 GB",
        B: "8 GB",
        C: "16 GB",
        D: "32 GB",
      },
      correct: "C",
    },
    {
      question: "Câu 5: Card mạng nào sau đây được hỗ trợ bởi Windows Server?",
      options: {
        A: "Ethernet",
        B: "Token Ring",
        C: "Wi-Fi",
        D: "Tất cả các phương án trên",
      },
      correct: "D",
    },
    {
      question:
        "Câu 6: Khi nào chúng ta có thể muốn di chuyển một vai trò máy chủ?",
      options: {
        A: "Triển khai phiên bản mới",
        B: "Chuyển sang máy chủ khác",
        C: "Vai trò hiện tại không ổn định",
        D: "Tất cả các phương án trên",
      },
      correct: "D",
    },
    {
      question: "Câu 7: Điều quan trọng khi di chuyển vai trò máy chủ là gì?",
      options: {
        A: "Nguyên nhân lỗi vai trò cũ",
        B: "Yêu cầu tài nguyên phần cứng",
        C: "Cách cài đặt lại hệ điều hành",
        D: "Tất cả các phương án trên",
      },
      correct: "B",
    },
    {
      question: "Câu 8: Nếu vai trò cũ đang gặp lỗi, điều quan trọng là gì?",
      options: {
        A: "Chuyển toàn bộ hệ thống",
        B: "Sửa lỗi trước khi di chuyển",
        C: "Cập nhật mọi ứng dụng",
        D: "Tất cả các phương án trên",
      },
      correct: "B",
    },
    {
      question: "Câu 9: Tên miền AD DS được sử dụng để làm gì?",
      options: {
        A: "Quản lý tài khoản người dùng và mật khẩu",
        B: "Cung cấp dịch vụ Internet",
        C: "Quản lý website",
        D: "Quản lý phần cứng",
      },
      correct: "A",
    },
    {
      question: "Câu 10: Mục tiêu chính của Global Catalog là gì?",
      options: {
        A: "Chứa bản sao một phần của mọi đối tượng trong Forest",
        B: "Tạo website toàn cầu",
        C: "Quản lý DHCP",
        D: "Cung cấp email",
      },
      correct: "A",
    },
    {
      question: "Câu 11: Mục đích của OU trong AD DS là gì?",
      options: {
        A: "Định nghĩa DNS",
        B: "Tổ chức và quản lý đối tượng",
        C: "Kiểm soát Internet",
        D: "Quản lý định tuyến",
      },
      correct: "B",
    },
    {
      question: "Câu 12: Trust relationship trong AD DS dùng để làm gì?",
      options: {
        A: "Đặt lại mật khẩu",
        B: "Cho phép truy cập tài nguyên giữa các domain",
        C: "Quản lý DHCP",
        D: "Đặt ứng dụng web",
      },
      correct: "B",
    },
    {
      question: "Câu 13: Forest trong AD DS là gì?",
      options: {
        A: "Quản lý người dùng",
        B: "Quản lý domain",
        C: "Cấu trúc AD DS cao nhất",
        D: "Cung cấp DNS",
      },
      correct: "C",
    },
    {
      question: "Câu 14: Forest Root Domain là gì?",
      options: {
        A: "Chứa mọi đối tượng",
        B: "Có quyền cao nhất",
        C: "Domain đầu tiên được tạo",
        D: "Quản lý người dùng",
      },
      correct: "B",
    },
    {
      question: "Câu 15: Trust giữa các Forest cho phép gì?",
      options: {
        A: "Chia sẻ domain",
        B: "Chia sẻ database",
        C: "Chia sẻ tài nguyên",
        D: "Chia sẻ group policy",
      },
      correct: "C",
    },
    {
      question: "Câu 16: Active Directory Sites and Services dùng để làm gì?",
      options: {
        A: "Quản lý GPO",
        B: "Quản lý domain",
        C: "Quản lý Forest",
        D: "Quản lý site và kết nối mạng",
      },
      correct: "D",
    },
    {
      question: "Câu 17: Forest Trust là gì?",
      options: {
        A: "Quan hệ tin cậy giữa các Forest",
        B: "Policy Forest",
        C: "Cơ sở dữ liệu",
        D: "Danh sách Forest",
      },
      correct: "A",
    },
    {
      question: "Câu 18: Ai có quyền thay đổi Schema?",
      options: {
        A: "Domain Admin",
        B: "Forest Admin",
        C: "User",
        D: "Schema Admin",
      },
      correct: "D",
    },
    {
      question: "Câu 19: Thay đổi Schema ảnh hưởng đến gì?",
      options: {
        A: "User",
        B: "Cấu trúc AD",
        C: "GPO",
        D: "DNS",
      },
      correct: "B",
    },
    {
      question: "Câu 20: Quyền Schema cần gán cho ai?",
      options: {
        A: "Domain Admin",
        B: "Forest Admin",
        C: "Schema Admin",
        D: "User",
      },
      correct: "C",
    },
    {
      question: "Câu 21: Để cập nhật Schema, cần dùng gì?",
      options: {
        A: "update-schema",
        B: "AD Schema MMC",
        C: "Restart server",
        D: "Cài lại AD",
      },
      correct: "B",
    },
    {
      question: "Câu 22: Schema Master là gì?",
      options: {
        A: "Quyền Domain",
        B: "Quyền Forest",
        C: "FSMO quản lý Schema",
        D: "Tài khoản đặc biệt",
      },
      correct: "C",
    },
    {
      question: "Câu 23: Global Catalog là gì?",
      options: {
        A: "Danh sách user toàn cầu",
        B: "CSDL chứa thông tin Forest",
        C: "Tên miền quốc tế",
        D: "Phân vùng DNS",
      },
      correct: "B",
    },
    {
      question: "Câu 24: Mục tiêu chính của GC là gì?",
      options: {
        A: "Lưu domain",
        B: "Bản sao một phần mọi đối tượng",
        C: "Quản lý GPO",
        D: "Điều hướng mạng",
      },
      correct: "B",
    },
    {
      question: "Câu 25: GC được lưu trên máy chủ nào?",
      options: {
        A: "Domain Controller",
        B: "DNS",
        C: "File Server",
        D: "DHCP",
      },
      correct: "A",
    },
    {
      question: "Câu 26: GC dùng khi nào?",
      options: {
        A: "Quản lý user",
        B: "Truy vấn toàn Forest",
        C: "DNS",
        D: "GPO",
      },
      correct: "B",
    },
    {
      question: "Câu 27: Thông tin đăng nhập so khớp với gì?",
      options: {
        A: "Danh sách server",
        B: "CSDL AD DS",
        C: "GPO",
        D: "DNS",
      },
      correct: "B",
    },
    {
      question: "Câu 28: Quá trình đăng nhập bao gồm?",
      options: {
        A: "Xác thực và cấp quyền",
        B: "Tạo user",
        C: "Cài phần mềm",
        D: "Đồng bộ dữ liệu",
      },
      correct: "A",
    },
    {
      question: "Câu 29: Khi đăng nhập sai thì sao?",
      options: {
        A: "Tiếp tục",
        B: "Từ chối truy cập",
        C: "Báo admin",
        D: "Reset mật khẩu",
      },
      correct: "B",
    },
    {
      question: "Câu 30: Môi trường AD DS là gì?",
      options: {
        A: "Cấu hình user",
        B: "Lưu trữ domain",
        C: "Email",
        D: "Xác thực & phân quyền",
      },
      correct: "B",
    },
    {
      question: "Câu 31: SRV Record dùng để làm gì?",
      options: {
        A: "Email",
        B: "Xác định dịch vụ",
        C: "Website",
        D: "Lưu trữ",
      },
      correct: "B",
    },
    {
      question: "Câu 32: SRV Record giúp gì?",
      options: {
        A: "Danh sách DNS",
        B: "Tìm dịch vụ AD",
        C: "Xác định DNS",
        D: "Web",
      },
      correct: "B",
    },
    {
      question: "Câu 33: SRV xác định dịch vụ nào?",
      options: {
        A: "Email",
        B: "LDAP, Kerberos, GC",
        C: "HTTP",
        D: "Storage",
      },
      correct: "B",
    },
    {
      question: "Câu 34: LDAP là gì?",
      options: {
        A: "Xác thực web",
        B: "Truy vấn AD",
        C: "Bảo mật",
        D: "Email",
      },
      correct: "B",
    },
    {
      question: "Câu 35: Kerberos là gì?",
      options: {
        A: "Mã hóa",
        B: "Xác thực AD",
        C: "Email",
        D: "Quản lý user",
      },
      correct: "B",
    },
    {
      question: "Câu 36: Để kích hoạt DNS cho AD DS cần gì?",
      options: {
        A: "DHCP",
        B: "Cài DNS",
        C: "Web Server",
        D: "Mail Server",
      },
      correct: "B",
    },
    {
      question: "Câu 37: DNS Forwarder là gì?",
      options: {
        A: "Chuyển tiếp truy vấn DNS",
        B: "Quản lý user",
        C: "Email",
        D: "Lưu trữ",
      },
      correct: "A",
    },
    {
      question: "Câu 38: DNS trong AD DS dùng để?",
      options: {
        A: "User",
        B: "GPO",
        C: "Web",
        D: "Kết nối mạng",
      },
      correct: "C",
    },
    {
      question: "Câu 39: Mục đích DNS trong AD?",
      options: {
        A: "Router",
        B: "Cloud",
        C: "Phân giải tên dịch vụ AD",
        D: "Xác thực",
      },
      correct: "C",
    },
    {
      question: "Câu 40: Khi cài AD, DNS cần cấu hình ở đâu?",
      options: {
        A: "Tất cả máy",
        B: "Domain Controller",
        C: "Không cần DNS",
        D: "Router",
      },
      correct: "B",
    },
  ],
};
// ===== BỔ SUNG CÂU 1 → 30 =====
quizData.all.push(
  {
    question: "Câu 1: Dịch vụ www chạy ở port nào?",
    options: { A: "21", B: "80", C: "100", D: "110" },
    correct: "B",
  },
  {
    question: "Câu 2: Tập tin nào chứa khai báo địa chỉ máy chủ DNS?",
    options: {
      A: "/etc/named",
      B: "/etc/resolv.conf",
      C: "/var/named/server.com.vn.dns",
      D: "Tất cả đều sai",
    },
    correct: "B",
  },
  {
    question:
      "Câu 3: Để bật chức năng chuyển gói tin (IP Forward), ta thực hiện:",
    options: {
      A: "Sửa nội dung tập tin /etc/sysctl.conf",
      B: "Sửa file /proc/sys/net/ipv4/ip_forward = 1",
      C: "echo 1 > ip_forward",
      D: "./proc/sys/net/ipv4/ip_forward",
    },
    correct: "C",
  },
  {
    question: "Câu 4: Lệnh nào dùng để kiểm tra dịch vụ DNS?",
    options: { A: "ping", B: "ipconfig", C: "nslookup", D: "net map" },
    correct: "C",
  },
  {
    question: "Câu 5: Chức năng chính của DNS Server là gì?",
    options: {
      A: "Phân giải tên miền và địa chỉ IP",
      B: "Phân giải MAC – IP",
      C: "Phân giải NetBIOS",
      D: "Tạo mail SMTP/POP3",
    },
    correct: "A",
  },
  {
    question: "Câu 6: Hệ điều hành nào có thể gia nhập AD domain?",
    options: { A: "Windows OS", B: "Linux OS", C: "MAC OS" },
    correct: "A",
  },
  {
    question: "Câu 7: Hệ điều hành nào có thể làm Domain Controller?",
    options: {
      A: "Windows 2000, 2003, 2008, 2016, 2019, 2022",
      B: "Windows NT, 2000, 2003, 2008, 2016, 2019, 2022",
      C: "Windows XP, Vista, 7, 10, 11",
      D: "Windows XP, 2003, 2008, 10",
    },
    correct: "A",
  },
  {
    question: "Câu 8: Đặc điểm của domain user:",
    options: {
      A: "Lưu tại DC, login mọi domain member",
      B: "Lưu tại DC, chỉ login 1 máy",
      C: "User cục bộ",
      D: "User cục bộ login mọi máy",
    },
    correct: "A",
  },
  {
    question: "Câu 9: Để nâng cấp máy lên domain cần:",
    options: {
      A: "Preferred DNS = IP DNS Server",
      B: "Preferred DNS = IP chính nó",
      C: "Preferred DNS = router",
      D: "Preferred DNS = server LAN bất kỳ",
    },
    correct: "A",
  },
  {
    question: "Câu 10: Lệnh cập nhật policy domain:",
    options: {
      A: "gpupdate /force",
      B: "gpedit /force",
      C: "gpeditupdate /force",
      D: "net update /force",
    },
    correct: "A",
  },
  {
    question: "Câu 11: Dịch vụ tạo VPN trên Windows Server?",
    options: {
      A: "Routing and Remote Access",
      B: "NLB",
      C: "Remote Desktop Gateway",
      D: "ADFS",
    },
    correct: "A",
  },
  {
    question: "Câu 12: Công nghệ ảo hóa trên Windows Server?",
    options: { A: "Hyper-V", B: "VMware", C: "VirtualBox", D: "XenServer" },
    correct: "A",
  },
  {
    question: "Câu 13: Công cụ quản lý AD chính?",
    options: {
      A: "AD Users and Computers",
      B: "AD Sites and Services",
      C: "AD Administrative Center",
      D: "ADSI Edit",
    },
    correct: "A",
  },
  {
    question: "Câu 14: Công cụ giám sát thiết bị mạng?",
    options: {
      A: "NPS",
      B: "SCOM",
      C: "WSUS",
      D: "RSAT",
    },
    correct: "B",
  },
  {
    question: "Câu 15: Giao thức quản lý thiết bị mạng?",
    options: { A: "SNMP", B: "SSH", C: "Telnet", D: "ICMP" },
    correct: "A",
  },
  {
    question: "Câu 16: Công nghệ tạo web server trên Windows?",
    options: { A: "IIS", B: "Apache", C: "Nginx", D: "Tomcat" },
    correct: "A",
  },
  {
    question: "Câu 17: Công cụ quản lý DHCP?",
    options: { A: "DHCP Manager", B: "DNS Manager", C: "IIS Manager" },
    correct: "A",
  },
  {
    question: "Câu 18: Công cụ giám sát CPU, băng thông?",
    options: {
      A: "Performance Monitor",
      B: "Task Scheduler",
      C: "Event Viewer",
      D: "Device Manager",
    },
    correct: "A",
  },
  {
    question: "Câu 19: Quản lý mail server trên Windows?",
    options: {
      A: "Microsoft Exchange",
      B: "Sendmail",
      C: "Postfix",
      D: "Outlook",
    },
    correct: "A",
  },
  {
    question: "Câu 20: Quản lý chính sách mạng (VLAN, QoS)?",
    options: {
      A: "Network Policy Server",
      B: "RRAS",
      C: "Firewall",
      D: "Server Manager",
    },
    correct: "A",
  },
  {
    question: "Câu 21: Công cụ quản lý WINS?",
    options: {
      A: "WINS Manager",
      B: "DNS Manager",
      C: "IIS Manager",
      D: "DHCP Manager",
    },
    correct: "A",
  },
  {
    question: "Câu 22: Giao thức VPN trên Windows Server?",
    options: { A: "PPTP", B: "L2TP", C: "SSTP", D: "IPSec" },
    correct: "A",
  },
  {
    question: "Câu 23: Công cụ quản lý NPS?",
    options: {
      A: "NPS Manager",
      B: "DNS Manager",
      C: "IIS Manager",
      D: "DHCP Manager",
    },
    correct: "A",
  },
  {
    question: "Câu 24: Quản lý máy tính từ xa?",
    options: {
      A: "Remote Desktop",
      B: "PowerShell Remoting",
      C: "Telnet",
      D: "SSH",
    },
    correct: "A",
  },
  {
    question: "Câu 25: Lệnh xem kết nối mạng đang hoạt động?",
    options: {
      A: "Get-NetConnection",
      B: "Get-NetAdapter",
      C: "Get-NetRoute",
      D: "Get-NetSession",
    },
    correct: "A",
  },
  {
    question: "Câu 26: Lệnh tạo rule Firewall mới?",
    options: {
      A: "New-FirewallRule",
      B: "Set-FirewallRule",
      C: "Add-FirewallRule",
      D: "Enable-FirewallRule",
    },
    correct: "A",
  },
  {
    question: "Câu 27: Lệnh xem dịch vụ đang chạy từ xa?",
    options: {
      A: "Get-Service",
      B: "Invoke-Command",
      C: "Get-WmiObject",
      D: "Get-Process",
    },
    correct: "A",
  },
  {
    question: "Câu 28: Lệnh cấu hình IP cho card mạng?",
    options: {
      A: "Set-IPAddress",
      B: "Set-NetIPConfiguration",
      C: "Set-NetAdapterIPAddress",
      D: "Set-NetTCPSetting",
    },
    correct: "A",
  },
  {
    question: "Câu 29: Lệnh xem DNS record?",
    options: {
      A: "Get-DNSRecord",
      B: "Get-DnsServerResourceRecord",
      C: "Get-DnsClientCache",
      D: "Get-DnsServerStatistics",
    },
    correct: "A",
  },
  {
    question: "Câu 30: Lệnh restart service từ xa?",
    options: {
      A: "Restart-Service",
      B: "Invoke-Command",
      C: "Stop-Service",
      D: "Start-Service",
    },
    correct: "A",
  }
);
