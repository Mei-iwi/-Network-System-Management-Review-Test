const quizData = {
  all: [
    {
      question:
        "Câu 1: Bạn là quản trị viên của Công ty ABC. Bạn đang muốn cài đặt Windows Server 2012 R2 và bạn cần quyết định phiên bản nào để cài đặt. Bạn cần cài đặt một phiên bản Windows chỉ dành cho việc xác thực đăng nhập và không có gì khác. Bạn muốn tùy chọn an toàn nhất và chi phí không phải là vấn đề. Bạn nên cài đặt cái gì?",
      options: {
        A: "Windows Server 2012 R2 Datacenter với GUI",
        B: "Windows Server 2012 R2 Datacenter Server Core",
        C: "Windows Server 2012 R2 Standard với GUI",
        D: "Windows Server 2012 R2 Web Server Core",
      },
      correct: "B",
    },
    {
      question:
        "Câu 2: Bạn là giám đốc CNTT cho một tổ chức lớn. Một trong những đồng nghiệp của bạn đã cài đặt một máy Windows Server 2012 R2 Datacenter Server Core mới, nhưng bây giờ đội ngũ CNTT đã quyết định rằng nó nên là một máy Windows Server 2012 R2 Datacenter với GUI. Bạn nên làm gì?",
      options: {
        A: "Cài đặt lại Windows Server 2012 R2 Datacenter Server Core trên cùng một máy.",
        B: "Cài đặt một máy mới với Windows Server 2012 R2 Datacenter Server Core.",
        C: "Chuyển đổi Windows Server 2012 R2 Datacenter Server Core hiện tại sang phiên bản Windows Server 2012 R2 Datacenter với GUI.",
        D: "Khởi động kép máy với cả Windows Server 2012 R2 Datacenter Server Core và Windows Server 2012 R2 Datacenter với GUI.",
      },
      correct: "C",
    },
    {
      question:
        "Câu 3: Bạn là quản trị viên cho công ty của mình và bạn đang xem xét nâng cấp máy chủ web Windows Server 2008 lên Windows Server 2012 R2. Microsoft đề xuất bạn sử dụng phiên bản nào của Windows Server 2012 R2?",
      options: {
        A: "Windows Server 2012 R2 Datacenter",
        B: "Windows Server 2012 R2 Standard",
        C: "Windows Server 2012 R2 Essentials",
        D: "Windows Server 2012 R2 Foundation",
      },
      correct: "B",
    },
    {
      question:
        "Câu 4: Bạn đang xem xét nâng cấp máy Windows Server 2008 R2 Enterprise với SP2 của mình lên Windows Server 2012 R2. Tổ chức của bạn đang xem xét ảo hóa toàn bộ phòng máy chủ của mình, nơi có 25 máy chủ. Bạn sẽ nâng cấp lên phiên bản nào của Windows Server 2012 R2?",
      options: {
        A: "Windows Server 2012 R2 Datacenter",
        B: "Windows Server 2012 R2 Standard",
        C: "Windows Server 2012 R2 Essentials",
        D: "Windows Server 2012 R2 Foundation",
      },
      correct: "A",
    },
    {
      question:
        "Câu 5: Bạn đã được thuê để giúp một công ty nhỏ thiết lập mạng Windows đầu tiên của họ. Công ty đã có cùng 13 người dùng trong suốt hai năm hoạt động và không có kế hoạch mở rộng. Bạn sẽ đề xuất phiên bản nào của Windows Server 2012 R2?",
      options: {
        A: "Windows Server 2012 R2 Datacenter",
        B: "Windows Server 2012 R2 Standard",
        C: "Windows Server 2012 R2 Essentials",
        D: "Windows Server 2012 R2 Foundation",
      },
      correct: "C",
    },
    {
      question:
        "Câu 6: Bạn đã được thuê để giúp một công ty nhỏ thiết lập mạng Windows của họ. Công ty có 20 người dùng và không có kế hoạch mở rộng. Bạn sẽ đề xuất phiên bản nào của Windows Server 2012 R2?",
      options: {
        A: "Windows Server 2012 R2 Datacenter",
        B: "Windows Server 2012 R2 Standard",
        C: "Windows Server 2012 R2 Essentials",
        D: "Windows Server 2012 R2 Foundation",
      },
      correct: "C",
    },
    {
      question:
        "Câu 7: Những lợi ích của việc sử dụng Windows Server 2012 R2 Server Core là gì?",
      options: { A: "1,2,3", B: "1", C: "1,2", D: "1,2,3,4" },
      correct: "D",
    },
    {
      question:
        "Câu 8: Bạn là quản trị viên máy chủ và bạn đang cố gắng tiết kiệm dung lượng ổ cứng trên máy Windows Server 2012 R2 Datacenter của mình. Tính năng nào có thể giúp bạn tiết kiệm dung lượng ổ cứng?",
      options: {
        A: "HDSaver.exe",
        B: "Features On Demand (Tính năng theo yêu cầu)",
        C: "ADDS (Dịch vụ Miền Active Directory)",
        D: "WinRM (Quản lý từ xa Windows)",
      },
      correct: "B",
    },
    {
      question:
        "Câu 9: Bạn có một máy chủ tên là SRV1 chạy Windows Server 2012 R2. Bạn muốn xóa Windows Explorer, Windows Internet Explorer và tất cả các thành phần và tệp khỏi máy này. Bạn nên chạy lệnh nào?",
      options: {
        A: "msiexec.exe /uninstall iexplore.exe /x",
        B: "msiexec.exe /uninstall explorer.exe /x",
        C: "Uninstall-WindowsFeature Server-Gui-Mgmt-Infra -Remove",
        D: "Uninstall-WindowsFeature Server-Gui-Shell -Remove",
      },
      correct: "D",
    },
    {
      question:
        "Câu 10: Bạn sẽ cài đặt loại bộ điều khiển miền nào vào một khu vực có lo ngại về an ninh vật lý?",
      options: {
        A: "Bộ điều khiển miền chính (Primary domain controller)",
        B: "Bộ điều khiển miền dự phòng (Backup domain controller)",
        C: "Bộ điều khiển miền chỉ đọc (Read-only domain controller)",
        D: "Bộ điều khiển miền bị khóa (Locked-down domain controller)",
      },
      correct: "C",
    },
    {
      question:
        "Câu 11: Bạn là quản trị viên hệ thống của một tổ chức lớn gần đây đã triển khai Windows Server 2012 R2. Bạn có một vài trang web từ xa không có an ninh chặt chẽ. Bạn đã quyết định triển khai các bộ điều khiển miền chỉ đọc (RODC). Mạng cần có các cấp độ chức năng rừng và miền nào để bạn thực hiện cài đặt?",
      options: {
        A: "Windows 2000 Mixed",
        B: "Windows 2008 R2",
        C: "Windows 2003",
        D: "Windows 2008",
      },
      correct: "C",
    },
    {
      question:
        "Câu 12: Số lượng miền tối đa mà một máy tính Windows Server 2012 R2 được cấu hình làm bộ điều khiển miền có thể tham gia cùng một lúc là bao nhiêu?",
      options: {
        A: "Không",
        B: "Một",
        C: "Hai",
        D: "Bất kỳ số lượng miền nào",
      },
      correct: "B",
    },
    {
      question:
        "Câu 13: Một quản trị viên hệ thống đang cố gắng xác định hệ thống tệp nào sẽ sử dụng cho một máy chủ sẽ trở thành máy chủ tệp và bộ điều khiển miền Windows Server 2012 R2. Công ty có các yêu cầu về bảo mật và Sysvol.",
      options: { A: "FAT", B: "FAT32", C: "HPFS", D: "NTFS" },
      correct: "D",
    },
    {
      question:
        "Câu 14: Vì lý do bảo mật, bạn đã quyết định rằng bạn phải chuyển đổi phân vùng hệ thống trên ổ đĩa di động của mình từ hệ thống tệp FAT32 sang NTFS. Bạn phải thực hiện các bước nào sau đây để chuyển đổi hệ thống tệp?",
      options: { A: "1,2", B: "1,3", C: "1,4", D: "2,3" },
      correct: "C",
    },
    {
      question:
        "Câu 15: Windows Server 2012 R2 yêu cầu sử dụng các giao thức hoặc dịch vụ nào sau đây để hỗ trợ Active Directory?",
      options: { A: "1,2", B: "2,3", C: "4,5", D: "2,5" },
      correct: "D",
    },
    {
      question:
        "Câu 16: Bạn đang thăng cấp một máy tính Windows Server 2012 R2 thành một bộ điều khiển miền Active Directory cho mục đích thử nghiệm... Nguyên nhân của sự cố có thể là gì?",
      options: { A: "1,2", B: "2,3", C: "3,4", D: "1,3" },
      correct: "D",
    },
    {
      question:
        "Câu 17: Mạng của bạn chứa một miền Active Directory duy nhất... Bạn dự định cài đặt một bộ điều khiển miền Windows Server 2012 R2 mới. Bạn sẽ cần thực hiện hai hành động nào?",
      options: { A: "1,2", B: "2,3", C: "3,4", D: "4,5" },
      correct: "B",
    },
    {
      question:
        "Câu 18: Bạn là quản trị viên mạng cho một công ty lớn... Bạn cần triển khai quản lý danh tính liên kết. Điều nào sau đây sẽ giúp bạn làm điều này?",
      options: {
        A: "Active Directory Federation Services",
        B: "Active Directory DNS Services",
        C: "Active Directory IIS Services",
        D: "Active Directory IAS Services",
      },
      correct: "A",
    },
    {
      question:
        "Câu 19: Bạn muốn kiểm tra DNS trên hệ thống cục bộ và cần xem liệu tên máy chủ server-1 có phân giải thành địa chỉ IP 10.1.1.1 hay không.",
      options: {
        A: "Thêm một máy chủ DNS.",
        B: "Thêm ánh xạ vào tệp HOSTS.",
        C: "Thêm một bản ghi A vào WINS.",
        D: "Thêm một bản ghi MX vào DNS.",
      },
      correct: "B",
    },
    {
      question:
        "Câu 20: Ngăn người dùng này sửa đổi bản ghi SOA của Stellatest.com (vùng Tích hợp Active Directory).",
      options: {
        A: "Sửa đổi quyền của vùng Stellacon.com.",
        B: "Sửa đổi quyền của vùng Stellatest.com.",
        C: "Chạy Delegation Of Control Wizard trong AD.",
        D: "Chạy Delegation Of Control Wizard trong DNS.",
      },
      correct: "A",
    },
    {
      question:
        "Câu 21: Người dùng nói rằng họ không thể thấy bất kỳ tài nguyên (chia sẻ tệp/máy in) nào bạn đã tạo trên Windows Server 2012 R2.",
      options: {
        A: "Quên bật NetBIOS.",
        B: "Cần buộc sao chép.",
        C: "Bạn cần xuất bản các chia sẻ trong thư mục.",
        D: "Khoảng thời gian sao chép bình thường.",
      },
      correct: "C",
    },
    {
      question:
        "Câu 22: Bạn muốn xuất bản một máy in lên Active Directory. Bạn sẽ nhấp vào đâu để hoàn thành tác vụ này?",
      options: {
        A: "Tab Sharing (Chia sẻ)",
        B: "Tab Advanced",
        C: "Tab Device Settings",
        D: "Nút Printing Preferences",
      },
      correct: "A",
    },
    {
      question:
        "Câu 23: Đối tượng Máy in cục bộ không hiển thị trong Active Directory khi người dùng thực hiện tìm kiếm. Những lý do có thể là gì?",
      options: { A: "1,2", B: "1,3", C: "1,4", D: "2,3" },
      correct: "B",
    },
    {
      question:
        "Câu 24: Bạn nên cấu hình gì để giúp họ (người dùng di động) làm việc trên các tài liệu khi ở xa văn phòng?",
      options: {
        A: "Truy cập tệp trực tuyến",
        B: "Truy cập tệp ngoại tuyến (Offline file access)",
        C: "Quyền chia sẻ",
        D: "Quyền NTFS",
      },
      correct: "B",
    },
    {
      question:
        "Câu 25: Một số lợi thế của NTFS là gì? (Bảo mật, Hạn ngạch, Nén, Mã hóa)",
      options: { A: "1", B: "1,2", C: "1,2,3", D: "1,2,3,4" },
      correct: "D",
    },
    {
      question:
        "Câu 26: Cấp cho Moe (nhóm Sales và Finance) số quyền tối thiểu để thực hiện công việc (đọc và thay đổi tệp).",
      options: {
        A: "Cấp Sales Full Control chia sẻ.",
        B: "Cấp Moe Full Control NTFS.",
        C: "Cấp Finance Modify NTFS.",
        D: "Cấp cho Moe quyền Modify cho bảo mật NTFS.",
      },
      correct: "D",
    },
    {
      question:
        "Câu 27: Bạn cần triển khai gì để giải quyết vấn đề (ổ cứng đầy, giới hạn dung lượng người dùng)?",
      options: {
        A: "Phân bổ đĩa",
        B: "Hạn ngạch đĩa (Disk quotas)",
        C: "Làm cứng đĩa",
        D: "Giới hạn đĩa",
      },
      correct: "B",
    },
    {
      question:
        "Câu 28: Cấp cho nhóm Admin quyền đọc, thay đổi và gán quyền cho các tài liệu (Stellacon Documents).",
      options: { A: "1,2", B: "2,3", C: "3,4", D: "3,5" },
      correct: "D",
    },
    {
      question:
        "Câu 29: Các ứng dụng cấu hình từ xa nào để cấu hình máy chủ Server Core?",
      options: { A: "1,2", B: "2,3", C: "1,4", D: "1,3" },
      correct: "D",
    },
    {
      question:
        "Câu 30: Bạn sẽ thiết lập loại máy chủ nào (cho vị trí thư mục chính của người dùng)?",
      options: {
        A: "Máy chủ PDC",
        B: "Máy chủ web",
        C: "Máy chủ Exchange",
        D: "Máy chủ tệp (File server)",
      },
      correct: "D",
    },
    {
      question: "Câu 31 (Ảo hóa 1): Đảm bảo các máy ảo chỉ giao tiếp với nhau.",
      options: {
        A: "External",
        B: "Internal only",
        C: "Private virtual machine network",
        D: "Public",
      },
      correct: "C",
    },
    {
      question:
        "Câu 32 (Ảo hóa 2): Thay đổi bộ nhớ của một máy ảo hiện đang được bật.",
      options: {
        A: "Tắt máy ảo, cài đặt lại.",
        B: "Sử dụng cài đặt trực tiếp.",
        C: "Tạm dừng máy ảo.",
        D: "Lưu trạng thái máy ảo.",
      },
      correct: "A",
    },
    {
      question:
        "Câu 33 (Ảo hóa 3): Đảm bảo không gian đĩa cứng cho máy ảo chỉ bị chiếm dụng khi cần thiết.",
      options: {
        A: "Đĩa mở rộng động (Dynamically expanding disk)",
        B: "Đĩa cố định",
        C: "Đĩa khác biệt",
        D: "Đĩa vật lý",
      },
      correct: "A",
    },
    {
      question:
        "Câu 34 (Ảo hóa 4): Làm thế nào để bạn thêm một đĩa vật lý vào một máy ảo?",
      options: {
        A: "Virtual Hard Disk Wizard",
        B: "Edit VHD Wizard",
        C: "Sử dụng cài đặt của máy ảo.",
        D: "New VM Wizard",
      },
      correct: "C",
    },
    {
      question:
        "Câu 35 (Ảo hóa 5): Yêu cầu CPU tối thiểu để chạy Hyper-V (Câu Sai)?",
      options: {
        A: "x64",
        B: "DEP bật",
        C: "Ảo hóa phần cứng bật",
        D: "Phải có ít nhất là lõi kép.",
      },
      correct: "D",
    },
    {
      question:
        "Câu 36 (Ảo hóa 6): Phát biểu đúng đối với mạng ảo bên ngoài (external)?",
      options: {
        A: "Máy ảo - Máy chủ",
        B: "Máy ảo - Máy ảo",
        C: "Máy ảo - Máy chủ - Mạng bên ngoài.",
        D: "Không giao tiếp",
      },
      correct: "C",
    },
    {
      question:
        "Câu 37 (Quản trị 7): Sử dụng tab nào để dừng một ứng dụng đang chạy trong Task Manager?",
      options: { A: "Performance", B: "Users", C: "Options", D: "Details" },
      correct: "D",
    },
    {
      question: "Câu 38 (WSUS 8): Bạn cài đặt WSUS từ đâu?",
      options: {
        A: "Add/Remove Programs",
        B: "Programs",
        C: "Server Manager",
        D: "Administrative Tools",
      },
      correct: "C",
    },
    {
      question:
        "Câu 39 (MBSA 9): Bạn cần cài đặt Microsoft Baseline Security Analyzer thế nào?",
      options: {
        A: "Tải xuống MBSA từ trang web Microsoft.",
        B: "Server Manager",
        C: "Add/Remove Programs",
        D: "Programs",
      },
      correct: "A",
    },
    {
      question:
        "Câu 40 (WSUS 10): Cấu hình máy chủ nhận bản cập nhật trong tùy chọn nào?",
      options: {
        A: "Products And Classifications",
        B: "Update Files",
        C: "Update Source And Proxy Server",
        D: "Synchronization Schedule",
      },
      correct: "C",
    },
    {
      question:
        "Câu 41 (AD 11): Lỗi 'Tài khoản người dùng này đã hết hạn'. Cần làm gì để không xảy ra nữa?",
      options: {
        A: "Vô hiệu khóa tài khoản.",
        B: "Mật khẩu tuổi thọ 0.",
        C: "Cài đặt Account Never Expires.",
        D: "Sửa thuộc tính mật khẩu.",
      },
      correct: "C",
    },
    {
      question:
        "Câu 42 (AD 12): Tạo một tài khoản người dùng mới bằng dấu nhắc lệnh.",
      options: { A: "dsmodify", B: "dscreate", C: "dsnew", D: "dsadd" },
      correct: "D",
    },
    {
      question:
        "Câu 43 (AD 13): Maria (Distribution group Sales) không thể truy cập máy in. Khắc phục thế nào?",
      options: {
        A: "Thay đổi loại nhóm thành bảo mật (security group).",
        B: "Thêm vào Administrators.",
        C: "Thêm vào Printer Operators.",
        D: "Đổi thành nhóm cục bộ.",
      },
      correct: "A",
    },
    {
      question:
        "Câu 44 (AD 14): Đặc điểm nào của OU gây ra sự thay đổi về quyền (OU Austin bị ảnh hưởng bởi OU Texas)?",
      options: {
        A: "Kế thừa (Inheritance)",
        B: "Group Policy",
        C: "Ủy quyền",
        D: "Thuộc tính",
      },
      correct: "A",
    },
    {
      question:
        "Câu 45 (AD 15): Nhân viên mới đặt lại mật khẩu cho OU cụ thể, không đổi được quyền ở OU khác.",
      options: {
        A: "Tài khoản quản trị đặc biệt.",
        B: "Di chuyển tài khoản vào OU.",
        C: "Di chuyển vào OU cha.",
        D: "Sử dụng Delegation of Control Wizard.",
      },
      correct: "D",
    },
    {
      question:
        "Câu 46 (Hyper-V 16): Hyper-V chạy trên các phiên bản x64 nào của Windows Server 2012 R2?",
      options: { A: "1,2", B: "1,3", C: "1,4", D: "2,4" },
      correct: "D",
    },
    {
      question:
        "Câu 47 (Hyper-V 17): Lệnh cài đặt Hyper-V trên Windows Server 2008 Server Core?",
      options: {
        A: "ocsetup Hyper-V",
        B: "ocsetup microsoft-hyper-v",
        C: "ocsetup Microsoft-Hyper-V",
        D: "ocsetup hyper-v",
      },
      correct: "B",
    },
    {
      question:
        "Câu 48 (Hyper-V 18): Bạn có thể cài đặt Hyper-V Manager MMC trên những hệ điều hành nào?",
      options: { A: "1,2", B: "1,3", C: "1,4", D: "2,3" },
      correct: "C",
    },
    {
      question:
        "Câu 49 (MBSA 19): Lệnh dòng lệnh của MBSA để quét dựa trên địa chỉ IP?",
      options: {
        A: "mdsacli /hf -i",
        B: "mdsacli /ip",
        C: "mbsa.exe /hf -ip",
        D: "mbsa.exe /ip",
      },
      correct: "C",
    },
    {
      question:
        "Câu 50 (WSUS 20): Điều nào KHÔNG phải là bước hoàn tất cấu hình WSUS trên SERVERB (nhận từ SERVERA)?",
      options: {
        A: "Phê duyệt cập nhật.",
        B: "Đồng bộ tự động.",
        C: "Tự động lấy từ bất kỳ nguồn nào SERVERA lấy.",
        D: "Đặt thời gian hàng ngày.",
      },
      correct: "C",
    },
    {
      question:
        "Câu 51 (AD 21): Tài khoản người dùng cũ quay lại sau 16 tuần, lỗi xác thực máy tính thất bại.",
      options: {
        A: "Đặt lại (reset) tài khoản máy tính, gỡ và gia nhập lại.",
        B: "ADadd.",
        C: "Domain Computers snap-in.",
        D: "Tạo lại user.",
      },
      correct: "A",
    },
    {
      question:
        "Câu 52 (AD 22): Giới hạn hiển thị đối tượng trong OU lớn (chỉ xem Máy tính).",
      options: {
        A: "Sử dụng tùy chọn Lọc (Filter).",
        B: "Delegation of Control.",
        C: "Quy ước đặt tên.",
        D: "Domains and Trusts.",
      },
      correct: "A",
    },
    {
      question:
        "Câu 53 (Backup 23): Cho phép quản trị viên cấp dưới thực hiện sao lưu (Windows Server Backup).",
      options: {
        A: "Computer Management.",
        B: "Authorization Manager task.",
        C: "Gán Quyền Người dùng (User Rights Assignment).",
        D: "Authorization Manager role.",
      },
      correct: "C",
    },
    {
      question:
        "Câu 54 (AD 24): Khôi phục cơ sở dữ liệu Active Directory bị mất.",
      options: {
        A: "Event Viewer",
        B: "Performance Monitor",
        C: "Đĩa cứng từ máy khác",
        D: "Một bản sao lưu trạng thái hệ thống (System State) hợp lệ.",
      },
      correct: "D",
    },
    {
      question: "Câu 25 (Network 25): Ghi lại và kiểm tra các gói mạng cụ thể.",
      options: {
        A: "Task Manager",
        B: "Performance Monitor",
        C: "Event Viewer",
        D: "Network Monitor",
      },
      correct: "D",
    },
    {
      question:
        "Câu 26 (AD 26): Tác vụ phổ biến trong Trình hướng dẫn Ủy quyền Kiểm soát (Reset pass, GP links, Modify group, Manage group).",
      options: { A: "1", B: "1,2", C: "1,2,3", D: "1,2,3,4" },
      correct: "D",
    },
    {
      question:
        "Câu 27 (WSUS 27): Mục đăng ký cho máy khách Windows 8 sử dụng WSUSServer.",
      options: {
        A: "UseWUServer 0",
        B: "Sử dụng UseWUServer dữ liệu 1 và WUServer http://WSUSServer.",
        C: "WUServer WSUSServer",
        D: "AU WUServer",
      },
      correct: "B",
    },
    {
      question:
        "Câu 28 (WSUS 28): Đảm bảo bản cập nhật phần mềm được áp dụng cho máy tính xách tay nhân viên bán hàng di động.",
      options: { A: "1,2,3", B: "4,5,6", C: "2,3,4", D: "2,4,6" },
      correct: "D",
    },
    {
      question: "Câu 1 (GPO 1): Cài đặt tự động Office 2013 cho OU Tài chính.",
      options: {
        A: "Gán ứng dụng cho User, liên kết GPO với OU Tài chính.",
        B: "Gán cho User, liên kết Miền.",
        C: "Gán cho Máy tính, liên kết Miền.",
        D: "Gán cho Máy tính, liên kết OU Tài chính.",
      },
      correct: "A",
    },
    {
      question:
        "Câu 2 (GPO 2): Tìm ra GPO nào đang thay đổi hình nền máy tính của chủ sở hữu.",
      options: {
        A: "RSoP tất cả máy tính.",
        B: "RSoP máy tính chủ sở hữu.",
        C: "Chạy tiện ích RSoP đối với tài khoản người dùng của chủ sở hữu.",
        D: "RSoP tất cả máy tính miền.",
      },
      correct: "C",
    },
    {
      question:
        "Câu 3 (GPO 3): GPO OU Sales không thể ghi đè GPO của SalesSite.",
      options: {
        A: "Vô hiệu Block Child Inheritance.",
        B: "Trên GPO, đặt cài đặt Thi hành (Enforce).",
        C: "Ưu tiên 1.",
        D: "Inherit Parent Policy.",
      },
      correct: "B",
    },
    {
      question:
        "Câu 4 (GPO 4): Đảm bảo người dùng Boston (ISDN 256Kbps) nhận được GPO gán phần mềm.",
      options: {
        A: "Vô hiệu hóa Slow Link Detection.",
        B: "Liên kết OU Boston.",
        C: "Xuất bản ứng dụng.",
        D: "GPResult /force.",
      },
      correct: "A",
    },
    {
      question:
        "Câu 5 (GPO 5): Vô hiệu hóa cài đặt GPO cho một nhóm bảo mật cụ thể.",
      options: {
        A: "Deny Write",
        B: "Allow Write",
        C: "Enable Apply Group Policy",
        D: "Từ chối Áp dụng Chính sách Nhóm (Deny Apply Group Policy)",
      },
      correct: "D",
    },
    {
      question:
        "Câu 6 (GPO 6): Cấp độ nào ghi đè các cài đặt GPO ở cấp độ miền?",
      options: { A: "OU", B: "Site", C: "Domain", D: "Cả OU và Site" },
      correct: "A",
    },
    {
      question:
        "Câu 7 (GPO 7): Đảm bảo chỉ các GPO tại OU mới ảnh hưởng đến đối tượng trong OU.",
      options: {
        A: "Enforced",
        B: "Chặn kế thừa chính sách (Block Policy Inheritance)",
        C: "Disable",
        D: "Deny",
      },
      correct: "B",
    },
    {
      question:
        "Câu 8 (Backup 8): Khôi phục cấu hình AD 2012 R2 nếu đĩa cứng lỗi.",
      options: {
        A: "Tạo một hình ảnh Sao lưu và Khôi phục PC hoàn chỉnh.",
        B: "Danh mục tệp.",
        C: "ASR.",
        D: "Điểm khôi phục.",
      },
      correct: "A",
    },
    {
      question:
        "Câu 9 (AD 9): Tạo nhiều chính sách mật khẩu (FGPP) cho người dùng trong miền.",
      options: {
        A: "MMC",
        B: "Schema Editor",
        C: "ADSI Edit",
        D: "Secedit.exe",
      },
      correct: "C",
    },
    {
      question:
        "Câu 10 (AD 10): Hỗ trợ DC 2008 và 2012 R2, loại nhóm nào KHÔNG thể sử dụng?",
      options: {
        A: "Universal",
        B: "Global",
        C: "Domain local",
        D: "Không có - bạn có thể sử dụng tất cả các loại nhóm",
      },
      correct: "D",
    },
    {
      question:
        "Câu 11 (AD 11): Thư mục nào trong ADUC dùng cho người dùng bên ngoài rừng được cấp quyền?",
      options: {
        A: "Users",
        B: "Computers",
        C: "Domain Controllers",
        D: "Foreign Security Principals",
      },
      correct: "D",
    },
    {
      question:
        "Câu 12 (AD 12): Tạo và quản lý các phân vùng dữ liệu ứng dụng (Application Data Partitions).",
      options: {
        A: "DCPromo.exe",
        B: "NTDSUtil.exe",
        C: "ADUtil.exe",
        D: "ADSI.exe",
      },
      correct: "B",
    },
    {
      question:
        "Câu 13 (GPO 13): Quá trình gán quyền đặt GPO cho OU gọi là gì?",
      options: {
        A: "Promotion",
        B: "Inheritance",
        C: "Ủy quyền (Delegation)",
        D: "Filtering",
      },
      correct: "C",
    },
    {
      question:
        "Câu 14 (GPO 14): Khi một gói phần mềm bị xóa khỏi một GPO liên kết với OU.",
      options: {
        A: "Gỡ tự động.",
        B: "Không ảnh hưởng.",
        C: "Quản trị viên hệ thống có thể xác định hiệu ứng.",
        D: "User xác định.",
      },
      correct: "C",
    },
    {
      question:
        "Câu 15 (GPO 15): Điều nào KHÔNG phải là tùy chọn nhắm mục tiêu cấp mục (item-level targeting)?",
      options: {
        A: "Battery",
        B: "Computer Name",
        C: "CPU Speed",
        D: "Nhắm mục tiêu có DVD (DVD Present Targeting)",
      },
      correct: "D",
    },
    {
      question:
        "Câu 16 (GPO 16): Kiểm soát cài đặt registry, cho phép quản trị viên khác sửa bằng công cụ AD tiêu chuẩn.",
      options: { A: "1,2", B: "3,4", C: "4,5", D: "1,3" },
      correct: "C",
    },
    {
      question:
        "Câu 17 (AD 17): Xóa DC giữ vai trò chủ hoạt động trên toàn rừng (FSMO). Cần chuyển vai trò nào?",
      options: { A: "1,2", B: "2,3", C: "2,4", D: "2,5" },
      correct: "C",
    },
    {
      question: "Câu 18 (GPO 18): Lệnh để GPO có hiệu lực ngay lập tức.",
      options: { A: "GPForce", B: "GPUpdate", C: "GPResult", D: "GPExecute" },
      correct: "B",
    },
    {
      question:
        "Câu 19 (GPO 19): PowerShell cmdlet để GPO có hiệu lực ngay lập tức.",
      options: {
        A: "Invoke-GPUpdate",
        B: "Invoke-GPForce",
        C: "Invoke-GPResult",
        D: "Invoke-GPExecute",
      },
      correct: "A",
    },
    {
      question:
        "Câu 20 (Backup 20): Sao lưu/khôi phục tệp C:\\Data vào phương tiện bên ngoài.",
      options: {
        A: "Previous Versions",
        B: "System Restore",
        C: "NTBackup",
        D: "Sử dụng Sao lưu Windows Server (Windows Server Backup).",
      },
      correct: "D",
    },
    {
      question:
        "Câu 21 (Backup 21): Sao lưu nhanh, dung lượng tối thiểu (tuần đầy đủ, ngày tệp đổi).",
      options: { A: "1,2", B: "1,3", C: "1,4", D: "1,5" },
      correct: "D",
    },
    {
      question:
        "Câu 22 (GPO 22): Gán các cài đặt Chính sách Nhóm ở cấp độ nào? (Site, Domain, OU, Local)",
      options: { A: "1", B: "1,2", C: "1,2,3", D: "1,2,3,4" },
      correct: "D",
    },
    {
      question:
        "Câu 23 (Security 23): Sai mật khẩu 3 lần/5 phút, khóa 30 phút. Đặt 3 hành động nào?",
      options: { A: "1,2,3", B: "4,5,6", C: "2,3,4", D: "2,3,5" },
      correct: "D",
    },
    {
      question:
        "Câu 1 (Audit 1): Giám sát người dùng OU Bán hàng kết nối với máy chủ tệp.",
      options: {
        A: "Kiểm toán Truy cập Đối tượng (Audit Object Access)",
        B: "Logon Events",
        C: "System Events",
        D: "Process Tracking",
      },
      correct: "A",
    },
    {
      question: "Câu 2 (Storage 2): Cổng TCP mặc định cho iSCSI là gì?",
      options: { A: "3260", B: "1433", C: "21", D: "3389" },
      correct: "A",
    },
    {
      question:
        "Câu 3 (Storage 3): Lệnh đăng ký thủ công một trình khởi tạo iSCSI vào máy chủ iSNS?",
      options: {
        A: "refreshisnsserver",
        B: "listisnsservers",
        C: "removeisnsserver",
        D: "iscsicli addisnsserver server_name",
      },
      correct: "D",
    },
    {
      question:
        "Câu 4 (Storage 4): Truy cập tài nguyên iSCSI bằng một kho lưu trữ tập trung.",
      options: {
        A: "iSCSI Target Storage Provider",
        B: "Storage Management",
        C: "iSCSI Target Server",
        D: "Tính năng dịch vụ Máy chủ iSNS (iSNS Server service).",
      },
      correct: "D",
    },
    {
      question:
        "Câu 5 (BranchCache 5): Tải trước dữ liệu (preload) từ FS01 sang FS02.",
      options: {
        A: "Export-BCCachePackage",
        B: "Publish-BCFileContent",
        C: "Set-BCCache",
        D: "Add-BCDataCacheExtension",
      },
      correct: "A",
    },
    {
      question:
        "Câu 6 (File 6): Thuộc tính phân loại đang được sử dụng và không thể xóa được.",
      options: {
        A: "Xóa giá trị.",
        B: "Xóa quy tắc phân loại được gán thuộc tính phân loại đó.",
        C: "Vô hiệu hóa quy tắc.",
        D: "Đổi Có thành Không.",
      },
      correct: "B",
    },
    {
      question:
        "Câu 7 (Security 7): Kiểm toán thay đổi user trong OU, tài khoản Audit sửa thông tin bảo mật.",
      options: { A: "1,2,3", B: "4,5,6", C: "2,3,4", D: "2,5,6" },
      correct: "D",
    },
    {
      question:
        "Câu 8 (Audit 8): Ghi lại truy cập/sửa tệp nhạy cảm, đăng nhập máy dùng chung.",
      options: { A: "1,5,7,8", B: "3,5,7,8", C: "4,5,7,8", D: "2,5,7,8" },
      correct: "A",
    },
    {
      question:
        "Câu 1 (Cluster 1): Phiên bản Windows Server 2012 R2 KHÔNG thể cấu hình failover cluster?",
      options: {
        A: "Hyper-V",
        B: "Standard",
        C: "Foundation edition",
        D: "Datacenter",
      },
      correct: "C",
    },
    {
      question:
        "Câu 2 (NLB 2): Phiên bản Windows Server 2012 KHÔNG thể cấu hình NLB cluster?",
      options: {
        A: "Essentials",
        B: "Standard",
        C: "Hyper-V edition",
        D: "Datacenter",
      },
      correct: "C",
    },
    {
      question:
        "Câu 3 (Cluster 3): Số lượng nút (node) tối đa failover cluster?",
      options: { A: "2", B: "4", C: "16", D: "64" },
      correct: "D",
    },
    {
      question:
        "Câu 4 (NLB 4): Bảo trì nút NLB mà không chấm dứt các kết nối hiện tại.",
      options: { A: "Evict", B: "Dừng xả (Drainstop)", C: "Pause", D: "Stop" },
      correct: "B",
    },
    {
      question:
        "Câu 5 (NLB 5): Số lượng nút tối đa NLB Windows Server 2012 R2?",
      options: { A: "4", B: "8", C: "16", D: "32" },
      correct: "D",
    },
    {
      question:
        "Câu 6 (NLB 6): NLB với unicast, số lượng card mạng tối thiểu trong mỗi nút?",
      options: { A: "1", B: "2", C: "3", D: "6" },
      correct: "B",
    },
    {
      question:
        "Câu 7 (Cluster 7): Cụm 4 nút Node And File Share Majority, mất bao nhiêu phiếu trước khi mất quorum?",
      options: { A: "1", B: "2", C: "3", D: "4" },
      correct: "B",
    },
    {
      question:
        "Câu 8 (Cluster 8): Cụm 3 nút Node Majority, bao nhiêu nút có thể ngoại tuyến trước khi mất quorum?",
      options: { A: "0", B: "1", C: "2", D: "3" },
      correct: "B",
    },
    {
      question: "Câu 9 (CA 9): Giảm lưu lượng mạng khi thăm dò CRL.",
      options: {
        A: "Enrollment Policy.",
        B: "Bạn nên xem xét việc triển khai một trình phản hồi trực tuyến (Online Responder).",
        C: "CA gốc.",
        D: "Xuất bản nhiều CRL.",
      },
      correct: "B",
    },
    {
      question: "Câu 10 (CA 10): Ghi lại các sửa đổi cấu hình CA.",
      options: { A: "1,3", B: "2,3", C: "4,3", D: "5,3" },
      correct: "A",
    },
    {
      question:
        "Câu 11 (Workplace Join 11): Tính năng Workplace Join mới hỗ trợ những gì?",
      options: {
        A: "iPhone.",
        B: "Windows 8 claim-based.",
        C: "Windows 8 auto trust.",
        D: "Tát cả các tính năng đều đúng",
      },
      correct: "D",
    },
    {
      question:
        "Câu 12 (AD FS 12): 4 máy chủ AD FS tích cực thực hiện chức năng (Active-Active).",
      options: {
        A: "Failover Clustering",
        B: "WIF 3.5",
        C: "Network Load Balancing",
        D: "Web Proxy",
      },
      correct: "C",
    },
    {
      question:
        "Câu 13 (AD FS 13): Triển khai AD FS cluster 8 máy chủ liên kết, cần công nghệ gì trước?",
      options: {
        A: "NLB",
        B: "FIM 2010",
        C: "Internal Database",
        D: "Microsoft SQL Server 2012 R2",
      },
      correct: "D",
    },
    {
      question: "Câu 14 (AD FS 14): Tự động đăng ký các chứng chỉ cho AD FS.",
      options: {
        A: "Forest CA",
        B: "Third-party cert",
        C: "SSL cert",
        D: "Chứng chỉ Ký mã thông báo (Token Signing certificate)",
      },
      correct: "D",
    },
    {
      question: "Câu 15 (AD RMS 15): Xác định bao nhiêu cụm gốc AD RMS?",
      options: {
        A: "Một cho doanh nghiệp.",
        B: "Bạn nên cần ít nhất một cụm gốc AD RMS cho mỗi rừng.",
        C: "Một mỗi miền.",
        D: "Một mỗi trang.",
      },
      correct: "B",
    },
    {
      question:
        "Câu 16 (DHCP 16): Cấu hình DHCP vừa có khả năng chịu lỗi vừa dự phòng (reliable).",
      options: {
        A: "Split scope",
        B: "Multicast",
        C: "DHCP failover",
        D: "Super scope",
      },
      correct: "C",
    },
    {
      question: "Câu 17 (DNS 17): Ba tùy chọn bảo mật DNS nâng cao (Câu SAI)?",
      options: {
        A: "DNSSEC",
        B: "Đăng ký DNS (DNS registration)",
        C: "Cache locking",
        D: "Socket pooling",
      },
      correct: "B",
    },
    {
      question: "Câu 18 (DNS 18): Truy vấn DNS luôn gửi đến máy chủ gần nhất.",
      options: {
        A: "Logging",
        B: "Delegated admin",
        C: "Recursion",
        D: "Sắp xếp theo netmask DNS (DNS netmask ordering)",
      },
      correct: "D",
    },
    {
      question: "Câu 19 (DNS 19): Nhóm bảo mật phù hợp chỉ để quản lý DNS.",
      options: {
        A: "Domain Admins",
        B: "Enterprise Admins",
        C: "Schema Admins",
        D: "DNSAdmins",
      },
      correct: "D",
    },
    {
      question:
        "Câu 20 (DHCP 20): Bản ghi A không bị ghi đè bởi thiết bị mới cùng tên.",
      options: {
        A: "DNS Registration",
        B: "Cấu hình Bảo vệ Tên DHCP (Configure DHCP Name Protection)",
        C: "High Availability",
        D: "DHCPv6 Scope",
      },
      correct: "B",
    },
    {
      question:
        "Câu 21 (IPAM 21): Noelle quản lý không gian địa chỉ IPAM (IP address blocks), không theo dõi/kiểm toán.",
      options: {
        A: "Administrators",
        B: "Users",
        C: "IPAM ASM Administrators",
        D: "MSM Administrators",
      },
      correct: "C",
    },
    {
      question: "Câu 22 (IPAM 22): Máy chủ chính quản lý toàn bộ doanh nghiệp.",
      options: {
        A: "Isolated",
        B: "Tập trung (Centralized)",
        C: "Hybrid",
        D: "Distributed",
      },
      correct: "B",
    },
    {
      question: "Câu 23 (IPAM 23): Bước hợp lý tiếp theo sau khi cài đặt IPAM.",
      options: {
        A: "Tạo khối IP.",
        B: "Ủy quyền.",
        C: "Cấu hình khám phá máy chủ (Configure server discovery).",
        D: "Tạo dải IP.",
      },
      correct: "C",
    },
    {
      question:
        "Câu 24 (IPAM 24): Xác minh cài đặt cấu hình cơ sở dữ liệu IPAM hiện tại.",
      options: {
        A: "Get-IpamDatabase",
        B: "Show-IpamDatabaseConfig",
        C: "Show-IpamStatistics",
        D: "Get-IpamMigrationSettings",
      },
      correct: "B",
    },
    {
      question: "Câu 25 (Cluster 25): SQL Server, Exchange.",
      options: { A: "1,2", B: "1,3", C: "1,4", D: "2,4" },
      correct: "B",
    },
    {
      question: "Câu 26 (Cluster 26): Web, Terminal Services.",
      options: { A: "1,2", B: "1,3", C: "1,4", D: "2,4" },
      correct: "D",
    },
    {
      question:
        "Câu 27 (CA 27): CA trong DMZ cấp chứng chỉ cho người dùng từ xa.",
      options: { A: "1,2", B: "3,4", C: "5,6", D: "1,5" },
      correct: "D",
    },
    {
      question:
        "Câu 28 (AD FS 28): JavaCup (rừng chủ) và Boston Tea (rừng khách).",
      options: { A: "1,2", B: "1,3", C: "1,4", D: "2,3" },
      correct: "C",
    },
    {
      question:
        "Câu 1 (DNS Failover 1): WAN lỗi, cả 2 trang vẫn cập nhật bản ghi và giải quyết truy vấn.",
      options: {
        A: "Secondary zone.",
        B: "Stub zone.",
        C: "Cấu hình ServerB làm một vùng Tích hợp Active Directory và chuyển đổi ServerA thành AD Integrated.",
        D: "Primary - Secondary.",
      },
      correct: "C",
    },
    {
      question:
        "Câu 2 (DNS 2): Chỉ các máy tính trong miền mới đăng ký với DNS.",
      options: {
        A: "None.",
        B: "Nonsecure And Secure.",
        C: "Domain Users Only.",
        D: "Chỉ an toàn (Secure Only).",
      },
      correct: "D",
    },
    {
      question:
        "Câu 3 (DNS 3): Cho phép chuyển vùng (zone transfer) đến máy chủ DNS dựa trên Unix.",
      options: {
        A: "Bật BIND Secondaries.",
        B: "Stub zone.",
        C: "AD Integrated.",
        D: "Forward requests.",
      },
      correct: "A",
    },
    {
      question:
        "Câu 4 (DNS 4): Giải quyết tên miền stellacon.com từ abc.com mà không chuyển vùng.",
      options: {
        A: "Secondary zone.",
        B: "Cấu hình chuyển tiếp có điều kiện (conditional forwarding).",
        C: "Secondary zone.",
        D: "Forwarding.",
      },
      correct: "B",
    },
    {
      question:
        "Câu 5 (DNS 5): Tất cả các truy vấn DNS đến cần phải được ghi lại.",
      options: {
        A: "Object Access.",
        B: "Bật ghi nhật ký gỡ lỗi DNS (DNS debug logging).",
        C: "Query logging.",
        D: "DNS Auditing.",
      },
      correct: "B",
    },
    {
      question:
        "Câu 6 (DNS 6): Tất cả lần chuyển vùng (zone transfer) phải được mã hóa.",
      options: {
        A: "Secure Only DNS1.",
        B: "Secure Only DNS2.",
        C: "Zone Transfers tab.",
        D: "Chuyển đổi cả hai sang Tích hợp Active Directory.",
      },
      correct: "D",
    },
    {
      question:
        "Câu 7 (DNS 7): Xử lý số lượng lớn các bản ghi cũ không hợp lệ.",
      options: {
        A: "Zone Aging and Scavenging.",
        B: "Trong thuộc tính máy chủ, bật Lão hóa vùng và Dọn dẹp.",
        C: "Xóa thủ công.",
        D: "None.",
      },
      correct: "B",
    },
    {
      question:
        "Câu 8 (DNS 8): Cung cấp bản sao của vùng DNS Tích hợp AD (để bảo mật).",
      options: {
        A: "zonecopy",
        B: "zoneinfo",
        C: "dnscmd /zoneexport",
        D: "zonefile",
      },
      correct: "C",
    },
    {
      question:
        "Câu 9 (DNS 9): Định vị máy chủ DNS có thẩm quyền ở địa điểm chính qua liên kết chậm.",
      options: {
        A: "Primary",
        B: "Secondary",
        C: "AD Integrated",
        D: "Vùng sơ khai (Stub zone)",
      },
      correct: "D",
    },
    {
      question:
        "Câu 10 (DHCP 10): Tác nhân chuyển tiếp DHCP chuyển yêu cầu đến server từ xa nếu server cục bộ không trả lời.",
      options: {
        A: "Static route.",
        B: "Điều chỉnh ngưỡng khởi động (boot threshold).",
        C: "Registry.",
        D: "General properties.",
      },
      correct: "B",
    },
    {
      question:
        "Câu 11 (Network 11): Điều KHÔNG phải lợi ích của PPP đa liên kết?",
      options: {
        A: "Nhanh hơn.",
        B: "Đa liên kết cho phép mã hóa dữ liệu.",
        C: "Chi phí thấp.",
        D: "Dễ sử dụng.",
      },
      correct: "B",
    },
    {
      question: "Câu 12 (VPN 12): Xác thực VPN cho Win XP và Win 8 (qua RRAS).",
      options: { A: "CHAP", B: "MS-CHAPv2", C: "EAP-TLS", D: "PAP" },
      correct: "B",
    },
    {
      question:
        "Câu 13 (VPN 13): Khắc phục sự cố giao tiếp VPN giữa các văn phòng.",
      options: {
        A: "MPPE",
        B: "Không mã hóa.",
        C: "L2TP sử dụng IPsec ở chế độ truyền tải (transport mode).",
        D: "Tunnel mode.",
      },
      correct: "C",
    },
    {
      question:
        "Câu 14 (RRAS 14): Tìm thông tin ghi nhật ký kết nối (Windows accounting).",
      options: {
        A: "Performance Monitor",
        B: "Active Directory",
        C: "Thư mục systemroot\\System32\\LogFiles",
        D: "Event Viewer",
      },
      correct: "C",
    },
    {
      question:
        "Câu 15 (NAP 15): Chính sách DHCP cho máy khách không tuân thủ NAP.",
      options: {
        A: "Relay info",
        B: "Lớp người dùng (User class)",
        C: "Vendor class",
        D: "Client ID",
      },
      correct: "B",
    },
    {
      question:
        "Câu 16 (NAP 16): Tạo tệp nhật ký theo dõi sự kiện NAP trên máy khách.",
      options: {
        A: "Register-ObjectEvent",
        B: "Register-EngineEvent",
        C: "tracert",
        D: "logman",
      },
      correct: "D",
    },
    {
      question: "Câu 17 (RADIUS 17): ServerB/C active, ServerD standby.",
      options: {
        A: "Trọng số B/C 10.",
        B: "Trọng số D 10.",
        C: "Ưu tiên B/C 10.",
        D: "Thay đổi mức độ ưu tiên của ServerD thành 10.",
      },
      correct: "D",
    },
    {
      question:
        "Câu 18 (RADIUS 18): Chấp nhận yêu cầu xác thực từ Server2 trên Server1.",
      options: {
        A: "Set-RemoteAccessRadius",
        B: "CMAK",
        C: "NPS",
        D: "Routing and Remote Access",
      },
      correct: "C",
    },
    {
      question: "Câu 19 (VPN 19): Chỉ Win 7/8 có thể thiết lập VPN.",
      options: {
        A: "Vendor specific.",
        B: "Một điều kiện của một chính sách mạng NPS.",
        C: "Connection request policy.",
        D: "Constraint.",
      },
      correct: "B",
    },
    {
      question:
        "Câu 20 (Security 20): Xác thực 802.1X lẫn nhau dựa trên chứng chỉ.",
      options: {
        A: "PEAP-MS-CHAP v2",
        B: "MS-CHAP v2",
        C: "EAP-TLS",
        D: "MS-CHAP",
      },
      correct: "C",
    },
    {
      question:
        "Câu 21 (DNS 21): DNS2 không vào được Internet (do có vùng root).",
      options: {
        A: "AD Integrated.",
        B: "Xóa vùng .(root) khỏi DNS2 và cấu hình chuyển tiếp có điều kiện.",
        C: "Xóa cache.dns.",
        D: "Update root hints.",
      },
      correct: "B",
    },
    {
      question:
        "Câu 22 (VPN 22): VPN được mã hóa và xác thực giữa hai cơ sở (Internet hiện tại).",
      options: { A: "1,2", B: "1,3", C: "1,4", D: "1,5" },
      correct: "B",
    },
    {
      question: "Câu 23 (RRAS 23): Giám sát tất cả máy chủ RRAS.",
      options: {
        A: "Server Monitor",
        B: "Nút Server Status của snap-in RRAS",
        C: "System Monitor",
        D: "MMC",
      },
      correct: "B",
    },
    {
      question:
        "Câu 24 (NAP 24): Cấu hình thực thi VPN trên Server1 (NAP). Cần gì trước?",
      options: {
        A: "HCAP",
        B: "SHV",
        C: "Remote Access role",
        D: "Một chứng chỉ máy tính",
      },
      correct: "D",
    },
    {
      question:
        "Câu 25 (RADIUS 25): Ghi nhật ký kế toán SQL, đảm bảo ghi lại nếu SQL server lỗi.",
      options: {
        A: "Failover Cluster.",
        B: "Database mirroring.",
        C: "Chạy Trình hướng dẫn Cấu hình Kế toán (Accounting Configuration Wizard).",
        D: "SQL Logging properties.",
      },
      correct: "C",
    },
    {
      question:
        "Câu 26 (VPN 26): 450 user VPN, lỗi không kết nối được (mặc định).",
      options: {
        A: "Win 8 không hỗ trợ.",
        B: "RRAS không hỗ trợ.",
        C: "Cấu hình RRAS mặc định không hỗ trợ đủ kết nối VPN.",
        D: "L2TP.",
      },
      correct: "C",
    },
    {
      question:
        "Câu 27 (NAP 27): DHCP NAP, chỉ cung cấp gateway hợp lệ nếu vượt qua kiểm tra tình trạng.",
      options: { A: "1,2", B: "2,3", C: "2,4", D: "2,5" },
      correct: "C",
    },
    {
      question:
        "Câu 28 (Security 28): NPS xác thực dựa trên chứng chỉ (PEAP, EAP-TLS).",
      options: { A: "1,2", B: "2,3", C: "2,4", D: "2,5" },
      correct: "C",
    },
    {
      question:
        "Câu 29 (RRAS 29): Bảo mật đường dây quay số theo yêu cầu (demand-dial).",
      options: { A: "3,1", B: "3,2", C: "3,4", D: "3,5" },
      correct: "D",
    },
    {
      question:
        "Câu 30 (RRAS 30): Bảo mật truyền tải không qua Internet, chi phí thấp (dial-up).",
      options: { A: "1,2,3", B: "3,4,5", C: "6,7,8", D: "3,5,7" },
      correct: "D",
    },
    {
      question:
        "Câu 1 (Backup 1): Khôi phục cấu hình/dữ liệu nếu đĩa cứng bị lỗi.",
      options: {
        A: "Tạo một bản Sao lưu PC hoàn chỉnh.",
        B: "Tất cả tệp.",
        C: "ASR.",
        D: "Restore point.",
      },
      correct: "A",
    },
    {
      question:
        "Câu 2 (Troubleshoot 2): Treo màn hình đăng nhập sau khi cập nhật trình điều khiển.",
      options: {
        A: "Restore backup.",
        B: "Safe Mode.",
        C: "Cấu hình Tốt được biết đến sau cùng (Last Known Good Configuration).",
        D: "Copy driver manual.",
      },
      correct: "C",
    },
    {
      question:
        "Câu 3 (Backup 3): Lịch trình sao lưu phục hồi toàn bộ trong vòng 24 giờ cuối.",
      options: {
        A: "Thông thường (Normal)",
        B: "Differential",
        C: "Incremental",
        D: "Daily",
      },
      correct: "A",
    },
    {
      question: "Câu 4 (Restore 4): Tạo một điểm khôi phục theo cách thủ công.",
      options: {
        A: "System Restore.",
        B: "Bằng cách sử dụng tab Bản sao bóng (Shadow Copies).",
        C: "System Configuration.",
        D: "Startup Repair.",
      },
      correct: "B",
    },
    {
      question: "Câu 5 (Troubleshoot 5): SCSI driver update failed boot.",
      options: {
        A: "Restore backup.",
        B: "Cấu hình Tốt được biết đến sau cùng.",
        C: "Safe Mode.",
        D: "Recovery console.",
      },
      correct: "B",
    },
    {
      question: "Câu 6 (Repair 6): Tệp hệ thống bị hỏng do virus.",
      options: {
        A: "Restore backup.",
        B: "Image.",
        C: "Sử dụng công cụ Sửa chữa Khởi động (Startup Repair).",
        D: "Safe Mode.",
      },
      correct: "C",
    },
    {
      question:
        "Câu 7 (Safe Mode 7): Phát biểu SAI về Chế độ An toàn (Safe Mode)?",
      options: {
        A: "Không mạng.",
        B: "Chế độ An toàn tải tất cả các trình điều khiển cho phần cứng.",
        C: "Boot logging bật.",
        D: "800x600.",
      },
      correct: "B",
    },
    {
      question:
        "Câu 8 (Backup 8): Sao lưu tệp người dùng riêng lẻ trước khi cài ứng dụng.",
      options: {
        A: "Restore point.",
        B: "ASR.",
        C: "Trong tiện ích Sao lưu Windows Server, nhấp vào liên kết Sao lưu một lần.",
        D: "Backup computer.",
      },
      correct: "C",
    },
    {
      question:
        "Câu 9 (AD 9): Hủy kích hoạt UGMC (Universal Group Membership Caching) ở cấp độ nào?",
      options: { A: "Server", B: "Trang (Site)", C: "Domain", D: "Forest" },
      correct: "B",
    },
    {
      question:
        "Câu 10 (Replication 10): Điều KHÔNG cần tạo thủ công cho sao chép (3 miền, 3 trang)?",
      options: {
        A: "Sites",
        B: "Site links",
        C: "Đối tượng kết nối (Connection objects)",
        D: "Subnets",
      },
      correct: "C",
    },
    {
      question:
        "Câu 11 (Replication 11): Dịch vụ duy trì cấu trúc liên kết sao chép?",
      options: {
        A: "FRS",
        B: "Trình kiểm tra Tính nhất quán Tri thức (Knowledge Consistency Checker)",
        C: "WINS",
        D: "DNS",
      },
      correct: "B",
    },
    {
      question:
        "Câu 12 (Replication 12): Đối tượng đại diện cho mối quan hệ bắc cầu giữa các trang.",
      options: {
        A: "Additional sites.",
        B: "Additional site links.",
        C: "Bridgehead servers.",
        D: "Cầu nối liên kết trang (Site link bridges).",
      },
      correct: "D",
    },
    {
      question:
        "Câu 13 (Log 13): Vị trí tệp nhật ký ghi nhật ký khởi động (Boot Logging)?",
      options: {
        A: "netlog.txt",
        B: "netlog.txt System32",
        C: "\\Windows\\ntbtlog.txt",
        D: "netboot.log",
      },
      correct: "C",
    },
    {
      question:
        "Câu 14 (Backup 14): Sao lưu tệp dữ liệu C:\\Data vào phương tiện bên ngoài.",
      options: {
        A: "Previous versions.",
        B: "System Restore.",
        C: "NTBackup.",
        D: "Sử dụng Sao lưu Windows Server để sao lưu và khôi phục tệp.",
      },
      correct: "D",
    },
    {
      question:
        "Câu 15 (GC 15): Cấu hình bộ điều khiển miền làm danh mục toàn cục (GC) ở đâu?",
      options: {
        A: "Forest",
        B: "Miền",
        C: "Trang",
        D: "Máy chủ, cài đặt NTDS",
      },
      correct: "D",
    },
    {
      question:
        "Câu 16 (Replication 16): Giao thức truyền sao chép qua Internet, không đáng tin cậy.",
      options: { A: "IP", B: "SMTP", C: "RPC", D: "DHCP" },
      correct: "B",
    },
    {
      question:
        "Câu 17 (Replication 17): Giảm độ trễ sao chép giữa tất cả các DC trong các trang khác nhau.",
      options: {
        A: "Giảm khoảng thời gian Sao chép cho đối tượng DEFAULTIPSITELINK.",
        B: "Giảm khoảng thời gian trang.",
        C: "Lịch trình trang.",
        D: "Lịch trình DC.",
      },
      correct: "A",
    },
    {
      question:
        "Câu 18 (Replication 18): Tìm thông báo lỗi cụ thể liên quan đến sao chép.",
      options: {
        A: "Sites and Services.",
        B: "Computer Management.",
        C: "System Log.",
        D: "Bằng cách vào Trình xem Sự kiện - Nhật ký Dịch vụ Thư mục (Directory Service).",
      },
      correct: "D",
    },
    {
      question:
        "Câu 19 (Replication 19): Cấu hình DC nhận phần lớn lưu lượng sao chép từ trang kia.",
      options: {
        A: "Trang bổ sung.",
        B: "Nhiều liên kết trang.",
        C: "Cầu nối liên kết trang.",
        D: "Cấu hình một máy chủ tại mỗi trang để hoạt động như một máy chủ đầu cầu ưu tiên (bridgehead server).",
      },
      correct: "D",
    },
    {
      question:
        "Câu 20 (Replication 20): Giảm băng thông tiêu thụ trên liên kết chậm, kiểm soát chính xác thời gian.",
      options: { A: "1,2", B: "1,3", C: "1,4", D: "1,5" },
      correct: "C",
    },
    {
      question:
        "Câu 1 (IPv6 1): Prefix /53, cần thêm 1.000 mạng con. Dùng mặt nạ nào?",
      options: { A: "/60", B: "/61", C: "/62", D: "/63" },
      correct: "D",
    },
    {
      question:
        "Câu 2 (IPv6 2): Địa chỉ IPv6 để giao tiếp với tất cả các phân đoạn mạng nội bộ.",
      options: {
        A: "fd00::/8",
        B: "fe80::/32",
        C: "ff80::/64",
        D: "Cấu hình địa chỉ IPv6 là fe80::2b0:e0ff:dee9:4143/64.",
      },
      correct: "D",
    },
    {
      question:
        "Câu 3 (IPv6 3): Loại địa chỉ IPv6 cho môi trường thử nghiệm 4 mạng con.",
      options: {
        A: "Global",
        B: "Link-local",
        C: "Địa chỉ cục bộ duy nhất (Unique local addresses)",
        D: "Site-local",
      },
      correct: "C",
    },
    {
      question:
        "Câu 4 (IPv4 4): Mặt nạ mạng cho 50 mạng con, 600 máy chủ (Class B 137.25.0.0).",
      options: {
        A: "255.255.252.0",
        B: "255.255.254.0",
        C: "255.255.248.0",
        D: "255.255.240.0",
      },
      correct: "A",
    },
    {
      question:
        "Câu 5 (IPv4 5): Mặt nạ mạng Class B cho 25+ trang, 1000 thiết bị/mạng con.",
      options: {
        A: "255.255.252.0",
        B: "255.255.248.0",
        C: "255.255.255.0",
        D: "255.255.255.128",
      },
      correct: "A",
    },
    {
      question:
        "Câu 6 (IPv4 6): Chia mạng con 201.102.34.0 để phân đoạn máy đồ họa nặng.",
      options: {
        A: "255.255.255.192",
        B: "255.255.255.224",
        C: "255.255.255.252",
        D: "255.255.255.240",
      },
      correct: "A",
    },
    {
      question: "Câu 7 (IPv4 7): Mặt nạ mạng CIDR /27?",
      options: {
        A: "255.255.255.254",
        B: "255.255.255.248",
        C: "255.255.255.224",
        D: "255.255.255.240",
      },
      correct: "C",
    },
    {
      question: "Câu 8 (DHCP 8): Giảm kích thước cơ sở dữ liệu DHCP.",
      options: {
        A: "Từ thư mục chứa cơ sở dữ liệu DHCP, chạy jetpack.exe dhcp.mdb temp.mdb.",
        B: "shrinkpack",
        C: "jetshrink",
        D: "shrinkjet",
      },
      correct: "A",
    },
    {
      question: "Câu 9 (Print 9): Xuất bản một máy in lên Active Directory.",
      options: {
        A: "Tab Sharing (Chia sẻ)",
        B: "Tab Advanced",
        C: "Tab Device Settings",
        D: "Printing Preferences",
      },
      correct: "A",
    },
    {
      question:
        "Câu 10 (File 10): Làm việc trên tài liệu khi ở xa văn phòng (Laptop Win 7/8).",
      options: {
        A: "Online access.",
        B: "Truy cập tệp ngoại tuyến (Offline file access)",
        C: "Share permissions.",
        D: "NTFS permissions.",
      },
      correct: "B",
    },
    {
      question:
        "Câu 11 (EFS 11): Bảo vệ thư mục để chỉ chủ sở hữu mới mở được (Win 7 NTFS).",
      options: { A: "Sử dụng EFS.", B: "CDMA.", C: "FAT32.", D: "Convert." },
      correct: "A",
    },
    {
      question:
        "Câu 12 (Quotas 12): Giới hạn dung lượng mọi người có được trên ổ cứng.",
      options: {
        A: "Disk spacing.",
        B: "Hạn ngạch đĩa (Disk quotas)",
        C: "Hardening.",
        D: "Limitations.",
      },
      correct: "B",
    },
    {
      question: "Câu 13 (EFS 13): Lệnh dòng lệnh để sửa đổi các tệp EFS.",
      options: { A: "Convert", B: "Cipher", C: "Gopher", D: "Encrypt" },
      correct: "B",
    },
    {
      question:
        "Câu 14 (DFS 14): Tệp di chuyển giữa các máy chủ, người dùng khó tìm kiếm.",
      options: {
        A: "EFS",
        B: "Hệ thống Tệp Phân tán (Distributed File System - DFS)",
        C: "SFS",
        D: "PFS",
      },
      correct: "B",
    },
    {
      question: "Câu 15 (Storage 15): Cổng TCP mặc định cho iSCSI?",
      options: { A: "3260", B: "1433", C: "21", D: "3389" },
      correct: "A",
    },
    {
      question:
        "Câu 16 (Audit 16): Giám sát người dùng OU Kỹ thuật kết nối máy chủ tệp.",
      options: {
        A: "Kiểm toán truy cập đối tượng (Audit object access)",
        B: "System events.",
        C: "Logon events.",
        D: "Process tracking.",
      },
      correct: "A",
    },
    {
      question:
        "Câu 17 (Storage 17): Lệnh đăng ký iSCSI initiator vào máy chủ iSNS.",
      options: {
        A: "refresh",
        B: "list",
        C: "remove",
        D: "iscsicli addisnsserver server_name",
      },
      correct: "D",
    },
    {
      question: "Câu 18 (IPv6 18): Địa chỉ FE80::... (Link-local, EUI-64).",
      options: { A: "1,2", B: "3,4", C: "4,5", D: "2,4" },
      correct: "D",
    },
    {
      question:
        "Câu 19 (File 19): Chia sẻ không hiển thị với người dùng (NET USE hoạt động).",
      options: {
        A: "NetBIOS.",
        B: "Bạn cần xuất bản các chia sẻ trong thư mục.",
        C: "Replication.",
        D: "Network error.",
      },
      correct: "B",
    },
    {
      question:
        "Câu 20 (Audit 20): Ghi lại truy cập/sửa tệp, đăng nhập máy dùng chung.",
      options: { A: "1,2,3,4", B: "5,6,7,8", C: "1,2,7,8", D: "2,5,7,8" },
      correct: "D",
    },
    {
      question:
        "Câu 21 (Storage 21): Định vị tài nguyên iSCSI bằng kho lưu trữ tập trung.",
      options: {
        A: "Target Provider.",
        B: "Storage Management.",
        C: "Target Server.",
        D: "Tính năng dịch vụ Máy chủ iSNS (iSNS Server service).",
      },
      correct: "D",
    },
    {
      question: "Câu 22 (BranchCache 22): Tải trước dữ liệu FS01 sang FS02.",
      options: {
        A: "Export-BCCachePackage",
        B: "Publish-BCFileContent",
        C: "Set-BCCache",
        D: "Add-BCDataCacheExtension",
      },
      correct: "A",
    },
    {
      question: "Câu 23 (File 23): Xóa thuộc tính phân loại đang được sử dụng.",
      options: {
        A: "Xóa giá trị.",
        B: "Xóa quy tắc phân loại được gán thuộc tính phân loại đó.",
        C: "Vô hiệu hóa quy tắc.",
        D: "Có thành Không.",
      },
      correct: "B",
    },
  ],
};
