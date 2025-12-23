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
      correct: "D",
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
        "Câu 7: Những lợi ích của việc sử dụng Windows Server 2012 R2 Server Core là gì?\n1. Giảm quản lý \n2. Bảo trì tối thiểu\n3. Dấu chân nhỏ hơn (ít chiếm dung lượng)\n4. Bảo mật chặt chẽ hơn ",
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
      question: `Câu 13: Một quản trị viên hệ thống đang cố gắng xác định hệ thống tệp nào sẽ sử dụng cho một máy chủ sẽ trở thành máy chủ tệp và bộ điều khiển miền Windows Server 2012 R2. Công ty có các yêu cầu 
        - Hệ thống tệp phải cho phép bảo mật cấp tệp từ trong Windows 2012 R2 Server.
        - Hệ thống tệp phải sử dụng không gian hiệu quả trên các phân vùng lớn.
        - Sysvol của bộ điều khiển miền phải được lưu trữ trên phân vùng.
        Hệ thống tệp nào sau đây đáp ứng các yêu cầu này?
`,
      options: { A: "FAT", B: "FAT32", C: "HPFS", D: "NTFS" },
      correct: "D",
    },
    {
      question: `Câu 14: Vì lý do bảo mật, bạn đã quyết định rằng bạn phải chuyển đổi phân vùng hệ thống trên ổ đĩa di động của mình từ hệ thống tệp FAT32 sang NTFS. Bạn phải thực hiện các bước nào sau đây để chuyển đổi hệ thống tệp?
          
          1.Chạy lệnh CONVERT /FS:NTFS từ dấu nhắc lệnh.
          2.Chạy lại Thiết lập Windows Server 2008 R2 và chọn chuyển đổi phân vùng sang NTFS trong quá trình cài đặt lại.
          3.Khởi động Thiết lập Windows Server 2008 R2 từ CD-ROM cài đặt và chọn Xây dựng lại hệ thống tệp (Rebuild File System).
          4.Khởi động lại máy tính
`,
      options: { A: "1,2", B: "1,3", C: "1,4", D: "2,3" },
      correct: "C",
    },
    {
      question: `Câu 15: Windows Server 2012 R2 yêu cầu sử dụng các giao thức hoặc dịch vụ nào sau đây để hỗ trợ Active Directory? 
        
        1.DHCP
        2.TCP/IP
        3.NetBEUI
        4.IPX/SPX
        5.DNS 
`,
      options: { A: "1,2", B: "2,3", C: "4,5", D: "2,5" },
      correct: "D",
    },
    {
      question: `Câu 16: Bạn đang thăng cấp một máy tính Windows Server 2012 R2 thành một bộ điều khiển miền Active Directory cho mục đích thử nghiệm. Bộ điều khiển miền mới sẽ được thêm vào một miền hiện có. Trong khi bạn đang sử dụng Trình hướng dẫn cài đặt Active Directory, bạn nhận được một thông báo lỗi ngăn máy chủ được thăng cấp. Nguyên nhân của sự cố có thể là gì? 
      
      1.Hệ thống không chứa phân vùng NTFS trên đó có thể tạo thư mục Sysvol.
      2.Bạn không có máy chủ DNS Windows Server 2012 R2 trên mạng.
      3.Cấu hình TCP/IP trên máy chủ mới không chính xác.
      4.Miền đã đạt đến số lượng bộ điều khiển miền tối đa.
`,
      options: { A: "1,2", B: "2,3", C: "3,4", D: "1,3" },
      correct: "D",
    },
    {
      question: `Câu 17: Mạng của bạn chứa một miền Active Directory duy nhất. Miền chứa năm bộ điều khiển miền Windows Server 2008 R2. Bạn dự định cài đặt một bộ điều khiển miền Windows Server 2012 R2 mới. Bạn sẽ cần thực hiện hai hành động nào? (Mỗi câu trả lời đúng trình bày một phần của giải pháp. Chọn hai.)
        
        1.Chạy adprep.exe /rodcprep tại dòng lệnh.
        2.Chạy adprep.exe /forestprep tại dòng lệnh.
        3.Chạy adprep.exe /domainprep tại dòng lệnh.
        4.Từ Active Directory Domains and Trusts, nâng cấp chức năng của miền.
        5.Từ Active Directory Users and Computers, tạo trước tài khoản máy tính RODC.
`,
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
      question: `
        Câu 23: Một quản trị viên hệ thống tạo một đối tượng Máy in cục bộ, nhưng nó không hiển thị trong Active Directory khi người dùng thực hiện tìm kiếm tất cả các máy in. Những lý do có thể là gì? 
        
        1.Máy in chưa được chia sẻ.
        2.Máy in đang ngoại tuyến.
        3.Máy khách không có quyền xem máy in.
        4.Máy in bị trục trặc. 
`,
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
      question: `Câu 25: Công ty của bạn đã quyết định triển khai một máy chủ Windows 2012 R2. Giám đốc CNTT của công ty trước bạn luôn sử dụng FAT32 làm phân vùng hệ thống. Công ty của bạn muốn biết liệu có nên chuyển sang NTFS không. Một số lợi thế của NTFS là gì? (Chọn tất cả các câu trả lời đúng.)
            
      1.Bảo mật (Security)
            2.Hạn ngạch (Quotas)
            3.Nén (Compression)
            4.Mã hóa (Encryption)
`,
      options: { A: "1", B: "1,2", C: "1,2,3", D: "1,2,3,4" },
      correct: "D",
    },
    {
      question: `Will, giám đốc CNTT của công ty bạn, đã được yêu cầu cấp cho Moe quyền đọc và thay đổi tài liệu trong thư mục Stellacon Documents. Bảng sau đây cho thấy các quyền hiện tại trên thư mục được chia sẻ:
          Nhóm/Người       dùng	NTFS	      Chia sẻ
          Sales	          Read	            Change
          Marketing	      Modify	          Change
          R&D            	Deny	            Full Control
          Finance	        Read	            Read
          Tylor	          Read	            Change
          Moe là thành viên của các nhóm Sales và Finance. Khi Moe truy cập thư mục Stellacon Documents, anh ấy có thể đọc tất cả các tệp, nhưng hệ thống không cho phép anh ấy thay đổi hoặc xóa tệp. Bạn cần làm gì để cấp cho Moe số quyền tối thiểu để thực hiện công việc của mình?
`,
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
        "Câu 28: Bạn là giám đốc CNTT và cần cấp cho nhóm Admin quyền đọc, thay đổi và gán quyền trên thư mục Stellacon Documents.\n\n" +
        "Quyền hiện tại:\n" +
        "Nhóm/Người dùng | NTFS | Share\n" +
        "Sales           | Read | Change\n" +
        "Marketing       | Modify | Change\n" +
        "R&D             | Deny | Full Control\n" +
        "Finance         | Read | Read\n" +
        "Tylor           | Read | Change\n\n" +
        "Cần thực hiện những hành động nào? (Chọn tất cả đáp án đúng)\n" +
        "1. Sales: Full Control (Share)\n" +
        "2. Full Control (NTFS)\n" +
        "3. Admin: Full Control (Share)\n" +
        "4. Finance: Modify (NTFS)\n" +
        "5. Admin: Full Control (NTFS)",
      options: {
        A: "1 và 2",
        B: "2 và 3",
        C: "3 và 4",
        D: "3 và 5",
      },
      correct: "D",
    },
    {
      question: `Câu 29: Bạn đã được yêu cầu cấu hình một máy Windows Server 2012 R2 Datacenter Server Core. Bạn có thể sử dụng các ứng dụng cấu hình từ xa nào để cấu hình máy chủ này từ máy của mình? 
  1.Quản lý từ xa của Windows (Windows Remote Management)
  2.Dấu nhắc lệnh (Command prompt)
  3.Windows PowerShell
  4.Quản trị viên từ xa của Microsoft (Microsoft Remote Admin - MRA) 
`,
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
        "Câu 10: : Trong khi thiết lập WSUS, bạn cần cấu hình máy chủ mà từ đó bạn sẽ nhận các bản cập nhật Microsoft của mình. Bạn sẽ thiết lập điều này trong tùy chọn nào?",
      options: {
        A: "Products And Classifications",
        B: "Update Files",
        C: "Update Source And Proxy Server",
        D: "Synchronization Schedule",
      },
      correct: "C",
    },
    {
      question: `Câu 41: Bạn là quản trị viên của một tổ chức có một miền Active Directory duy nhất. Một trong những giám đốc cấp cao của bạn cố gắng đăng nhập vào máy và nhận được lỗi "Tài khoản người dùng này đã hết hạn. Hãy yêu cầu quản trị viên của bạn kích hoạt lại tài khoản." Bạn cần đảm bảo rằng điều này không xảy ra nữa với người dùng này. Bạn sẽ làm gì?`,
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
        "Câu 43: Maria là một người dùng thuộc nhóm toàn cục phân phối (distribution global group) Bán hàng (Sales). Cô ấy không thể truy cập vào máy in laser được chia sẻ trên mạng. Nhóm toàn cục Bán hàng có toàn quyền truy cập vào máy in laser. Làm thế nào để bạn khắc phục sự cố này?",
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
        "Câu 44 (AD 14): Bạn là quản trị viên miền cho một miền lớn. Gần đây, bạn được yêu cầu thực hiện các thay đổi đối với một số quyền liên quan đến các OU trong miền. Để hạn chế bảo mật cho OU Texas hơn nữa, bạn đã xóa một số quyền ở cấp đó. Sau đó, một quản trị viên hệ thống cấp dưới đề cập rằng cô ấy không còn có thể thực hiện các thay đổi đối với các đối tượng trong OU Austin (nằm trong OU Texas). Giả sử không có thay đổi nào khác được thực hiện đối với quyền Active Directory, đặc điểm nào sau đây của OU có thể đã gây ra sự thay đổi về quyền?",
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
        "Câu 45 (AD 15): Bạn là quản trị viên hệ thống chính cho một miền Active Directory lớn. Gần đây, bạn đã thuê một quản trị viên hệ thống khác để bạn có thể giao bớt một số trách nhiệm của mình. Quản trị viên hệ thống này sẽ chịu trách nhiệm xử lý các cuộc gọi hỗ trợ (help desk) và quản lý tài khoản người dùng cơ bản. Bạn muốn cho phép nhân viên mới có quyền đặt lại mật khẩu cho tất cả người dùng trong một OU cụ thể. Tuy nhiên, vì lý do bảo mật, điều quan trọng là người dùng đó không thể thực hiện các thay đổi về quyền đối với các đối tượng trong các OU khác trong miền. Cách nào sau đây là tốt nhất để làm điều này?.",
      options: {
        A: "Tài khoản quản trị đặc biệt.",
        B: "Di chuyển tài khoản vào OU.",
        C: "Di chuyển vào OU cha.",
        D: "Sử dụng Delegation of Control Wizard.",
      },
      correct: "D",
    },
    {
      question: `Câu 46 (Hyper-V 16): Hyper-V chạy trên các phiên bản x64 nào của Windows Server 2012 R2?
  1.Windows Server 2012 R2 Web Edition
  2.Windows Server 2012 R2 Standard Edition
  3.Windows Server 2012 R2 Itanium Edition
  4.Windows Server 2012 R2 Datacenter Edition 
`,
      options: { A: "1,2", B: "1,3", C: "1,4", D: "2,4" },
      correct: "D",
    },
    {
      question:
        "Câu 47 (Hyper-V 17): Lệnh cài đặt Hyper-V trên Windows Server 2008 Server Core?",
      options: {
        A: "start /w ocsetup Hyper-V",
        B: "start /w ocsetup microsoft-hyper-v",
        C: "start /w ocsetup Microsoft-Hyper-V",
        D: "start /w ocsetup hyper-v",
      },
      correct: "C",
    },
    {
      question: `Câu 48 (Hyper-V 18): Bạn có thể cài đặt Hyper-V Manager MMC trên những hệ điều hành nào?
    1.Windows Server 2008 R2
    2.Windows Server 2003
    3.Windows XP SP3
    4.Windows 7, Windows 8
`,
      options: { A: "1,2", B: "1,3", C: "1,4", D: "2,3" },
      correct: "C",
    },
    {
      question:
        "Câu 49 (MBSA 19): Bạn là quản trị viên mạng cho một công ty trong danh sách Fortune 500. Bạn chịu trách nhiệm cho tất cả các máy tính khách tại cơ sở trung tâm. Bạn muốn đảm bảo rằng tất cả các máy tính khách đều được bảo mật. Bạn quyết định sử dụng MBSA để quét các máy tính khách của mình để tìm các vi phạm bảo mật có thể có. Bạn muốn sử dụng phiên bản dòng lệnh của MBSA để quét các máy tính của mình dựa trên địa chỉ IP. Bạn nên sử dụng lệnh nào sau đây?",
      options: {
        A: "mdsacli.exe /hf -i xxxx.xxxx.xxxx.xxxx",
        B: "mdsacli /ip xxxx.xxxx.xxxx.xxxx",
        C: "mbsa.exe /hf -ip xxxx.xxxx.xxxx.xxxx",
        D: "mbsa.exe /ip xxxx.xxxx.xxxx.xxxx",
      },
      correct: "A",
    },
    {
      question:
        "Câu 50 (WSUS 20): Bạn là quản trị viên mạng cho công ty của mình. Mạng bao gồm một miền Active Directory duy nhất. Tất cả các máy chủ chạy Windows Server 2012 R2. Windows Server Update Services (WSUS) được cài đặt trên hai máy chủ, SERVERA và SERVERB. SERVERA nhận các bản cập nhật phần mềm từ các máy chủ Microsoft Windows Update. Bạn đã đồng bộ hóa thủ công SERVERB với các máy chủ Windows Update, và bây giờ bạn cần hoàn tất cấu hình WSUS trên SERVERB. Điều nào sau đây không phải là một bước bạn có thể thực hiện để hoàn tất cấu hình WSUS trên SERVERB?",
      options: {
        A: "Phê duyệt các bản cập nhật hiện tại..",
        B: "Đặt SERVERB nhận các bản cập nhật từ SERVERA và tự động đồng bộ hóa với các bản cập nhật đã được phê duyệt trên SERVERA.",
        C: "Đặt SERVERB tự động lấy các bản cập nhật từ bất kỳ nguồn nào mà SERVERA được đặt để lấy.",
        D: "Đặt SERVERB tự động nhận các bản cập nhật hàng ngày vào một thời điểm nhất định.",
      },
      correct: "C",
    },
    {
      question:
        "Câu 21: Bạn là quản trị viên của một tổ chức chỉ có một miền Active Directory. Một người dùng đã nghỉ việc và quay lại sau 16 tuần. Khi người dùng đăng nhập vào máy tính cũ của họ, hệ thống báo lỗi xác thực thất bại mặc dù tài khoản người dùng vẫn đang được kích hoạt.\n\n" +
        "Bạn cần làm gì để đảm bảo người dùng có thể đăng nhập vào miền bằng máy tính đó?",
      options: {
        A: "Đặt lại (reset) tài khoản máy tính trong Active Directory, sau đó gỡ máy tính khỏi miền và gia nhập lại miền",
        B: "Chạy lệnh ADadd để gia nhập lại tài khoản máy tính",
        C: "Chạy MMC và thêm snap-in Domain Computers trên máy người dùng",
        D: "Tạo lại tài khoản người dùng và liên kết lại với tài khoản máy tính",
      },
      correct: "A",
    },
    {
      question: `Câu 52 (AD 22): Bạn là một nhà tư vấn được thuê để đánh giá miền Active Directory của một tổ chức. Miền này chứa hơn 200.000 đối tượng và hàng trăm OU. Bạn bắt đầu kiểm tra các đối tượng trong miền, nhưng bạn thấy rằng việc tải nội dung của các OU cụ thể mất nhiều thời gian. Hơn nữa, danh sách các đối tượng có thể rất lớn. Bạn muốn thực hiện những điều sau:
  ■ Sử dụng các công cụ quản trị Active Directory có sẵn và tránh sử dụng các công cụ hoặc tiện ích của bên thứ ba.
  ■ Giới hạn danh sách các đối tượng trong một OU chỉ còn loại đối tượng mà bạn đang kiểm tra (ví dụ: chỉ các đối tượng Máy tính).
  ■ Ngăn chặn bất kỳ thay đổi nào đối với miền Active Directory hoặc bất kỳ đối tượng nào trong đó.
Hành động nào sau đây đáp ứng các yêu cầu này? 
.`,
      options: {
        A: "Sử dụng tùy chọn Lọc (Filter) trong công cụ Active Directory Users and Computers để hạn chế việc hiển thị các đối tượng.",
        B: "Sử dụng Trình hướng dẫn Ủy quyền Kiểm soát (Delegation of Control Wizard) để cấp cho chính bạn quyền chỉ đối với một loại đối tượng nhất định..",
        C: "Triển khai một quy ước đặt tên mới cho các đối tượng trong một OU và sau đó sắp xếp kết quả bằng quy ước đặt tên mới này..",
        D: "Sử dụng công cụ Active Directory Domains and Trusts để chỉ xem thông tin từ các bộ điều khiển miền được chọn.",
      },
      correct: "A",
    },
    {
      question:
        "Câu 53 (AD 23): Bạn quản trị một tổ chức nhỏ có bốn máy chủ. Máy chủ tập tin Paniva chạy Windows Server 2012 R2. Một quản trị viên cấp dưới cần thực hiện sao lưu toàn bộ máy chủ bằng Windows Server Backup.\n\n" +
        "Bạn cần cấu hình gì để cho phép quản trị viên cấp dưới thực hiện sao lưu?",
      options: {
        A: "Cấu hình các nhóm cục bộ bằng Computer Management",
        B: "Tạo một tác vụ bằng Authorization Manager",
        C: "Gán User Rights Assignment bằng Local Group Policy Editor",
        D: "Gán Role Assignment bằng Authorization Manager",
      },
      correct: "A",
    },
    {
      question:
        "Câu 24: Một Domain Controller Windows Server 2012 R2 bị hỏng một ổ đĩa và mất cơ sở dữ liệu Active Directory. Bạn cần xác định các phân vùng còn truy cập được và khôi phục càng nhiều cấu hình hệ thống càng tốt.\n\n" +
        "Giải pháp nào đáp ứng yêu cầu?",
      options: {
        A: "Event Viewer",
        B: "Performance Monitor",
        C: "Ổ đĩa từ máy chủ khác không phải Domain Controller",
        D: "Bản sao lưu System State hợp lệ",
      },
      correct: "D",
    },
    {
      question:
        "Câu 25: Bạn cần xác định máy tính gây nghẽn mạng, ghi lại và phân tích các gói mạng đến/đi từ các máy cụ thể, đồng thời lọc theo loại gói tin.\n\n" +
        "Công cụ nào đáp ứng tất cả các yêu cầu?",
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
        "Câu 26: Bạn yêu cầu một quản trị viên cấp dưới sử dụng Delegation of Control Wizard để thực hiện các thay đổi bảo mật cơ bản cho OU trong Active Directory.\n\n" +
        "Những thao tác nào được cung cấp sẵn dưới dạng tác vụ phổ biến trong trình hướng dẫn?\n\n" +
        "1. Đặt lại mật khẩu người dùng\n" +
        "2. Quản lý liên kết Group Policy\n" +
        "3. Sửa đổi thành viên nhóm\n" +
        "4. Tạo, xóa và quản lý nhóm",
      options: {
        A: "1",
        B: "1 và 2",
        C: "1, 2 và 3",
        D: "1, 2, 3 và 4",
      },
      correct: "D",
    },
    {
      question:
        "Câu 27: Bạn là quản trị viên mạng cho một công ty trong danh sách Fortune 500. Bạn chịu trách nhiệm cho tất cả các máy tính khách tại cơ sở trung tâm. Bạn muốn đảm bảo rằng tất cả các máy tính khách đều có phần mềm mới nhất được cài đặt cho hệ điều hành của chúng, bao gồm phần mềm trong các danh mục Cập nhật Quan trọng và Gói Dịch vụ, Dòng Windows Server 2012 R2, và Cập nhật Trình điều khiển. Bạn muốn tự động hóa quy trình càng nhiều càng tốt, và bạn muốn các máy tính khách tải xuống các bản cập nhật từ một máy chủ trung tâm mà bạn đang quản lý. Bạn quyết định sử dụng Windows Server Update Services (WSUS). Phần mềm máy chủ WSUS đã được cài đặt trên một máy chủ có tên là WSUSServer. Bạn muốn kiểm tra máy chủ WSUS trước khi thiết lập các chính sách nhóm trong miền. Bạn cài đặt Windows 8. Cần phải thực hiện mục đăng ký nào sau đây để máy khách chỉ định rằng nó nên sử dụng WSUSServer cho Windows Update? ",
      options: {
        A: `. Sử dụng HKEY_LOCAL_MACHINE\Software\Policies\Microsoft\Windows\WindowsUpdate\AU\UseWUServer và chỉ định dữ liệu 0.
Sử dụng HKEY_LOCAL_MACHINE\Software\Policies\Microsoft\Windows\WindowsUpdate\AU\WUServer và chỉ định http ://WSUSServer.
`,
        B: `Sử dụng HKEY_LOCAL_MACHINE\Software\Policies\Microsoft\Windows\WindowsUpdate\AU\UseWUServer và chỉ định 1 cho dữ liệu.
Sử dụng HKEY_LOCAL_MACHINE\Software\Policies\Microsoft\Windows\WindowsUpdate\WUServer và chỉ định http: //WSUSServer.
`,
        C: `. Sử dụng HKEY_LOCAL_MACHINE\Software\Policies\Microsoft\Windows\WindowsUpdate\AU\WUServer và chỉ định WSUSServer.
Sử dụng HKEY_LOCAL_MACHINE\Software\Policies\Microsoft\Windows\WindowsUpdate\WUServer và chỉ định WSUSServer.
`,
        D: `Sử dụng HKEY_LOCAL_MACHINE\Software\Policies\Microsoft\Windows\WindowsUpdate\WUServer và chỉ định WSUSServer.
Sử dụng HKEY_LOCAL_MACHINE\Software\Policies\Microsoft\Windows\WindowsUpdate\AU\UseWUServer và chỉ định dữ liệu 0.
`,
      },
      correct: "B",
    },
    {
      question:
        `Câu 28: Bạn là quản trị viên mạng cho công ty của mình. Mạng bao gồm một miền Active Directory duy nhất. Tất cả các máy chủ chạy Windows Server 2012 R2. Tất cả các máy tính khách chạy Windows 7. Công ty có 16 nhân viên bán hàng di động, tất cả đều là thành viên của nhóm cục bộ Power Users trên máy tính của họ. Từ 6 giờ tối đến 7 giờ sáng, máy tính xách tay của các nhân viên bán hàng thường bị tắt và ngắt kết nối khỏi mạng công ty. Máy tính của các nhân viên bán hàng di động phải nhận các bản cập nhật phần mềm hàng ngày với sự tương tác tối thiểu của người dùng. Trong khi xác minh các bản cập nhật gần đây trên một trong những máy tính xách tay, bạn nhận thấy rằng các bản cập nhật từ máy chủ Windows Update đã không được áp dụng. Trên tab Automatic Updates của hộp thoại System Properties của máy tính di động, bạn nên làm gì để đảm bảo rằng các bản cập nhật phần mềm được áp dụng cho máy tính? ` +
        "1. Đặt lịch cập nhật mỗi ngày lúc 0h\n" +
        "2. Tự động tải và cài đặt theo lịch\n" +
        "3. Thông báo trước khi tải và cài đặt\n" +
        "4. Giữ máy tính luôn được cập nhật\n" +
        "5. Tự động tải và thông báo khi sẵn sàng\n" +
        "6. Đặt lịch cập nhật mỗi ngày lúc 12h",
      options: {
        A: "1, 2, 3",
        B: "4, 5, 6",
        C: "2, 3, 4",
        D: "2, 4, 6",
      },
      correct: "D",
    },
    {
      question:
        "Bạn làm việc cho một tổ chức có một miền Active Directory Windows Server 2012 R2 duy nhất. Miền này có các OU cho Bán hàng, Tiếp thị, Quản trị, R&D và Tài chính. Bạn chỉ cần người dùng trong OU Tài chính được cài đặt tự động Windows Office 2013 vào máy tính của họ. Bạn tạo một GPO có tên OfficeApp. Bước tiếp theo để tất cả người dùng Tài chính có Office 2013 là gì?",
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
        "Câu 2 (GPO 2): Bạn được thuê làm nhà tư vấn cho Công ty ABC. Chủ sở hữu của công ty phàn nàn rằng cô ấy tiếp tục có hình nền máy tính mà cô ấy không chọn. Khi bạn nói chuyện với nhóm CNTT, bạn phát hiện ra rằng một nhân viên cũ đã tạo 20 GPO và họ không thể tìm ra GPO nào đang thay đổi hình nền máy tính của chủ sở hữu. Làm thế nào bạn có thể giải quyết vấn đề này?",
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
        "Câu 3 (GPO 3): Bạn là quản trị viên mạng cho một tổ chức lớn có nhiều trang và nhiều OU. Bạn có một trang tên là SalesSite dành cho tòa nhà bán hàng bên kia đường. Trong miền, có một OU cho tất cả nhân viên bán hàng được gọi là Sales. Bạn thiết lập một GPO cho SalesSite và bạn cần chắc chắn rằng nó áp dụng cho OU Sales. Các GPO của OU Sales không thể ghi đè GPO của SalesSite. Bạn làm gì?",
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
        "Câu 4 (GPO 4): Bạn là quản trị viên cho một tổ chức có nhiều địa điểm. Bạn đang chạy Windows Server 2012 R2 và bạn chỉ có một miền với nhiều OU được thiết lập cho mỗi địa điểm. Một trong những địa điểm của bạn, Boston, được kết nối với địa điểm chính bằng đường dây ISDN 256Kbps. Bạn định cấu hình một GPO để gán một ứng dụng bán hàng cho tất cả các máy tính trong toàn bộ miền. Bạn phải chắc chắn rằng người dùng Boston nhận được GPO đúng cách. Bạn nên làm gì?",
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
        "Câu 7 (GPO 7): Một quản trị viên hệ thống muốn đảm bảo rằng chỉ các GPO được đặt ở cấp OU mới ảnh hưởng đến cài đặt Chính sách Nhóm cho các đối tượng trong OU. Họ có thể sử dụng tùy chọn nào để làm điều này (giả sử rằng tất cả các cài đặt GPO khác là mặc định)?",
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
        "Câu 8 (Backup 8): Bạn là quản trị viên của một công ty lớn, và bạn cần đảm bảo rằng bạn có thể khôi phục cấu hình và dữ liệu Windows Server 2012 R2 Active Directory của mình nếu đĩa cứng của máy tính bị lỗi. Bạn nên làm gì?",
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
        "Câu 10 (AD 10): : Bạn là quản trị viên hệ thống cho một tổ chức lớn có nhiều bộ điều khiển miền Active Directory. Hiện tại, môi trường hỗ trợ nhiều bộ điều khiển miền khác nhau, một số trong đó đang chạy Windows 2008 và Windows Server 2012 R2. Khi bạn đang chạy các bộ điều khiển miền trong loại môi trường này, bạn không thể sử dụng loại nhóm nào sau đây? ",
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
      question: `Câu 16 (GPO 16): Ann là một quản trị viên hệ thống cho một môi trường Active Directory cỡ vừa. Cô ấy đã xác định rằng một số ứng dụng mới sẽ được triển khai trong toàn tổ chức sử dụng các cài đặt dựa trên registry. Cô ấy muốn làm như sau:
Kiểm soát các cài đặt registry này bằng Chính sách Nhóm
Tạo một bộ tùy chọn tiêu chuẩn cho các ứng dụng này và cho phép các quản trị viên hệ thống khác sửa đổi chúng bằng các công cụ Active Directory tiêu chuẩn
Cô ấy có thể sử dụng các tùy chọn nào sau đây để đáp ứng các yêu cầu này? 
  1.Triển khai chức năng kế thừa của GPO.
  2.Triển khai ủy quyền các đối tượng cụ thể trong Active Directory.
  3.Triển khai chức năng Không ghi đè của GPO.
  4.Tạo các mẫu quản trị.
	5.Cung cấp các mẫu quản trị cho các quản trị viên hệ thống chịu trách nhiệm tạo Chính sách Nhóm cho các ứng dụng. 
`,
      options: { A: "1,2", B: "3,4", C: "4,5", D: "1,3" },
      correct: "C",
    },
    {
      question: `Câu 17 (AD 17): Bạn đang xóa một bộ điều khiển miền khỏi mạng của mình. Bộ điều khiển miền này giữ các vai trò chủ hoạt động trên toàn rừng. Bạn cần chuyển những vai trò nào sang một máy khác trước khi bạn xóa bộ điều khiển miền? 
  1.PDC Emulator Master
  2.Schema Master
  3.RID Master
  4.Domain Naming Master
	5.Infrastructure Master 
`,
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
      question: `Câu 20 (Backup 20): Bạn là quản trị viên của một tổ chức lớn. Trong khi thiết lập bộ điều khiển miền Windows Server 2012 R2 của mình, bạn đang tạo một chiến lược khôi phục dữ liệu phải đáp ứng các yêu cầu sau:
  Sao lưu tất cả các tệp và thư mục dữ liệu trong C:\Data.
  Khôi phục các tệp và thư mục riêng lẻ trong C:\Data.
  Đảm bảo rằng dữ liệu được sao lưu vào và khôi phục từ phương tiện bên ngoài.
Bạn nên làm gì? 
`,
      options: {
        A: "Previous Versions",
        B: "System Restore",
        C: "NTBackup",
        D: "Sử dụng Sao lưu Windows Server (Windows Server Backup).",
      },
      correct: "D",
    },
    {
      question: `Câu 21 (Backup 21): Robert là một quản trị viên hệ thống chịu trách nhiệm thực hiện sao lưu trên một số máy chủ. Gần đây, anh ấy đã được yêu cầu tiếp quản hoạt động của một số máy chủ mới, bao gồm cả các hoạt động sao lưu. Anh ấy có các yêu cầu sau:
  Bản sao lưu phải hoàn thành càng nhanh càng tốt.
  Bản sao lưu phải sử dụng dung lượng lưu trữ tối thiểu tuyệt đối.
  Anh ấy phải thực hiện các hoạt động sao lưu ít nhất hàng ngày với một bản sao lưu đầy đủ ít nhất hàng tuần.
Robert quyết định sử dụng tiện ích Sao lưu Windows Server 2012 R2 để thực hiện các bản sao lưu. Anh ấy muốn chọn một bộ các loại sao lưu sẽ đáp ứng tất cả các yêu cầu này. Anh ấy quyết định sao lưu tất cả các tệp trên mỗi máy chủ này hàng tuần. Sau đó, anh ấy quyết định chỉ lưu trữ các tệp đã thay đổi kể từ hoạt động sao lưu cuối cùng (bất kể loại nào) trong các ngày trong tuần. Anh ấy nên sử dụng các loại hoạt động sao lưu nào sau đây để thực hiện giải pháp này? 
  1.Normal (Thông thường)
  2.Daily (Hàng ngày)
  3.Copy (Sao chép)
  4.Differential (Khác biệt)
  5.Incremental (Gia tăng)
`,
      options: { A: "1,2", B: "1,3", C: "1,4", D: "1,5" },
      correct: "D",
    },
    {
      question: `Câu 22 (GPO 22): : Một quản trị viên hệ thống đang có kế hoạch triển khai các đối tượng Chính sách Nhóm trong môi trường Active Directory Windows Server 2012 R2 mới. Để đáp ứng nhu cầu của tổ chức, anh ấy quyết định triển khai một hệ thống phân cấp các cài đặt Chính sách Nhóm. Anh ấy có thể gán các cài đặt Chính sách Nhóm ở các cấp độ nào sau đây?
  1.Sites (Trang)
  2.Domains (Miền)
  3.Organizational units (Đơn vị tổ chức)
  4.Local system (Hệ thống cục bộ)
`,
      options: { A: "1", B: "1,2", C: "1,2,3", D: "1,2,3,4" },
      correct: "D",
    },
    {
      question: `Câu 23 (Security 23): : Bạn là quản trị viên mạng cho tổ chức của mình. Một chính sách công ty mới đã được ban hành, theo đó nếu người dùng nhập sai mật khẩu ba lần trong vòng 5 phút, họ sẽ bị khóa trong 30 phút. Bạn cần đặt ba hành động nào để tuân thủ chính sách này? 
  1.Đặt Thời gian khóa tài khoản là 5 phút.
  2.Đặt Thời gian khóa tài khoản là 30 phút.
  3.Đặt cài đặt Ngưỡng khóa tài khoản là 3 lần đăng nhập không hợp lệ.
  4.Đặt cài đặt Ngưỡng khóa tài khoản là 30 phút.
  5.Đặt cài đặt Đặt lại bộ đếm khóa tài khoản là 5 phút.
  6.Đặt cài đặt Đặt lại bộ đếm khóa tài khoản là 3 lần. 
`,
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
        "Câu 4 (Storage 4): Bạn là một quản trị viên CNTT quản lý một môi trường chạy nhiều máy chủ Windows Server 2012 R2 từ nhiều địa điểm trang web trên khắp Hoa Kỳ. Các máy Windows Server 2012 R2 của bạn sử dụng bộ nhớ iSCSI. Các quản trị viên khác báo cáo rằng rất khó để định vị các tài nguyên iSCSI có sẵn trên mạng. Bạn cần đảm bảo các quản trị viên khác có thể dễ dàng truy cập tài nguyên iSCSI bằng cách sử dụng một kho lưu trữ tập trung. Bạn nên triển khai tính năng nào?",
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
        "Câu 5 (BranchCache 5): : Công ty của bạn có trụ sở chính tại Colorado Springs và có một địa điểm trang web từ xa ở Tampa. Văn phòng Colorado Spring có một máy chủ tệp tên là FS01. FS01 đã cài đặt dịch vụ vai trò BranchCache cho Tệp Mạng. Văn phòng Tampa của bạn có một máy chủ tệp tên là FS02. FS02 đã được cấu hình làm máy chủ bộ đệm ẩn được lưu trữ BranchCache. Bạn cần tải trước dữ liệu từ các chia sẻ tệp trên FS01 vào bộ đệm ẩn trên FS02. Bạn đã tạo các hàm băm cho các chia sẻ tệp trên FS01. Bạn nên chạy cmdlet nào tiếp theo? ",
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
        "Câu 6 (File 6): : Bạn có một máy chủ tệp Windows Server 2012 R2 tên là FS01. FS01 đã cài đặt dịch vụ vai trò Trình quản lý Tài nguyên Máy chủ Tệp. Bạn cố gắng xóa một thuộc tính phân loại và bạn nhận được thông báo lỗi “Thuộc tính phân loại đang được sử dụng và không thể xóa được.” Bạn cần xóa thuộc tính phân loại Chứa Thông tin Cá nhân. Bạn nên làm gì? ",
      options: {
        A: "Xóa giá trị.",
        B: "Xóa quy tắc phân loại được gán thuộc tính phân loại đó.",
        C: "Vô hiệu hóa quy tắc.",
        D: "Đổi Có thành Không.",
      },
      correct: "B",
    },
    {
      question: `Câu 7 (Security 7): Alexis là một quản trị viên hệ thống cho một môi trường Active Directory chứa bốn miền. Gần đây, một số người quản lý đã báo cáo những nghi ngờ về hoạt động của người dùng và đã yêu cầu cô ấy tăng cường bảo mật trong môi trường. Cụ thể, các yêu cầu như sau:
  Kiểm toán các thay đổi đối với các đối tượng Người dùng có trong một OU cụ thể.
  Cho phép một tài khoản người dùng đặc biệt có tên là Audit xem và sửa đổi tất cả thông tin liên quan đến bảo mật về các đối tượng trong OU đó.
Alexis nên thực hiện các bước nào sau đây để đáp ứng các yêu cầu này? 
  1.Chuyển đổi tất cả các ổ đĩa chứa thông tin Active Directory sang NTFS.
  2.Bật kiểm toán bằng công cụ Người dùng và Máy tính Active Directory.
  3.Tạo một miền Active Directory mới và tạo các quyền hạn chế cho những người dùng bị nghi ngờ trong miền này.
  4.Cấu hình lại cài đặt tin cậy bằng công cụ Miền và Quan hệ tin cậy Active Directory.
  5.Chỉ định các tùy chọn kiểm toán cho OU bằng công cụ Người dùng và Máy tính Active Directory.
  6.Sử dụng Trình hướng dẫn Ủy quyền Kiểm soát để cấp các quyền thích hợp để xem và sửa đổi các đối tượng trong OU cho tài khoản người dùng Audit.
`,
      options: { A: "1,2,3", B: "4,5,6", C: "2,3,4", D: "2,5,6" },
      correct: "D",
    },
    {
      question: `Câu 8 (Audit 8): Crystal là một quản trị viên hệ thống cho một môi trường Active Directory đang chạy ở chế độ Gốc (Native mode). Gần đây, một số người quản lý đã báo cáo những nghi ngờ về hoạt động của người dùng và đã yêu cầu cô ấy tăng cường bảo mật trong môi trường. Cụ thể, các yêu cầu như sau:
  Việc truy cập một số tệp nhạy cảm phải được ghi lại.
  Việc sửa đổi một số tệp nhạy cảm phải được ghi lại.
  Các quản trị viên hệ thống phải có khả năng cung cấp thông tin về những người dùng đã truy cập các tệp nhạy cảm và thời điểm họ truy cập.
  Tất cả các lần thử đăng nhập cho các máy dùng chung cụ thể phải được ghi lại.
Crystal nên thực hiện các bước nào sau đây để đáp ứng các yêu cầu này?
  1.Bật kiểm toán bằng công cụ Quản lý Máy tính.
  2.Bật kiểm toán bằng công cụ Người dùng và Máy tính Active Directory.
  3.Bật kiểm toán bằng công cụ Miền và Quan hệ tin cậy Active Directory.
  4.Bật kiểm toán bằng công cụ Trình xem Sự kiện.
  5.Xem nhật ký kiểm toán bằng công cụ Trình xem Sự kiện
  6.Xem thông tin kiểm toán bằng công cụ Quản lý Máy tính.
  7.Bật cài đặt kiểm toán thất bại và thành công cho các tệp cụ thể được lưu trữ trên các ổ đĩa NTFS.
  8.Bật cài đặt kiểm toán thất bại và thành công cho các sự kiện đăng nhập trên các tài khoản máy tính cụ thể 
`,
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
      correct: "A",
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
      correct: "A",
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
      question: `Câu 10 (CA 10): Công ty ABC Industries muốn các sửa đổi cấu hình của dịch vụ vai trò Certification Authority được ghi lại. Bạn sẽ triển khai điều này như thế nào? 
  1.Bạn nên xem xét bật kiểm toán các sự kiện hệ thống.
  2.Bạn nên xem xét bật ghi nhật ký.
  3.Bạn nên xem xét bật kiểm toán truy cập đối tượng.
  4.Bạn nên xem xét bật kiểm toán sử dụng đặc quyền.
  5.Bạn nên xem xét bật kiểm toán theo dõi tiến trình. 
`,
      options: { A: "1,3", B: "2,3", C: "4,3", D: "5,3" },
      correct: "B",
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
        "Câu 12 (AD FS 12): Bạn cài đặt và cấu hình bốn máy chủ Windows Server 2012 R2 làm một cụm máy chủ AD FS. Cơ sở dữ liệu cấu hình AD FS được lưu trữ trong cơ sở dữ liệu Microsoft SQL Server 2012. Bạn cần đảm bảo rằng AD FS sẽ tiếp tục hoạt động trong trường hợp một máy chủ AD FS bị lỗi. Bạn cũng cần đảm bảo rằng tất cả bốn máy chủ trong cụm AD FS sẽ tích cực thực hiện các chức năng của AD FS. Bạn nên bao gồm những gì trong giải pháp của mình?",
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
        "Câu 13 (AD FS 13): Mạng của bạn chứa một miền Active Directory có tên contoso.com. Bạn dự định triển khai một cụm Active Directory Federation Services (AD FS) Windows 2012 R2 sẽ chứa tám máy chủ liên kết. Bạn cần xác định công nghệ nào phải được triển khai trên mạng trước khi bạn cài đặt các máy chủ liên kết. Bạn nên xác định công nghệ nào? ",
      options: {
        A: "NLB",
        B: "FIM 2010",
        C: "Internal Database",
        D: "Microsoft SQL Server 2012 R2",
      },
      correct: "D",
    },
    {
      question:
        "Câu 14 (AD FS 14): Bạn lưu trữ các máy chủ AD FS trong một OU có tên là Federation Servers. Bạn muốn tự động đăng ký các chứng chỉ được sử dụng cho AD FS. Bạn nên thêm chứng chỉ nào vào GPO?.",
      options: {
        A: "Forest CA",
        B: "Third-party cert",
        C: "SSL cert",
        D: "Chứng chỉ Ký mã thông báo (Token Signing certificate)",
      },
      correct: "A",
    },
    {
      question:
        "Câu 15 (AD RMS 15):: Bạn có kế hoạch triển khai Active Directory Rights Management Services (AD RMS) trên toàn doanh nghiệp. Bạn cần lập kế hoạch cài đặt cụm AD RMS cho rừng. Người dùng trong tất cả các miền sẽ truy cập các tài liệu được bảo vệ bằng AD RMS. Bạn cần giảm thiểu số lượng cụm AD RMS. Điều nào sau đây sẽ giúp bạn xác định bạn cần bao nhiêu cụm gốc AD RMS?",
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
        "Câu 16 (DHCP 16): Bạn là quản trị viên mạng cho một công ty máy tính cỡ vừa. Bạn có một rừng Active Directory duy nhất, và bạn có yêu cầu triển khai DHCP cho tổ chức. Bạn cần đảm bảo rằng cấu hình triển khai DHCP của bạn vừa có khả năng chịu lỗi vừa dự phòng. Trong số các tùy chọn được cung cấp, cấu hình DHCP nào đáng tin cậy nhất mà bạn có thể triển khai?.",
      options: {
        A: "Split scope",
        B: "Multicast",
        C: "DHCP failover",
        D: "Super scope",
      },
      correct: "C",
    },
    {
      question:
        "Câu 17 (DNS 17): : Bạn là quản trị viên hệ thống cho một công ty máy tính lớn. Bạn có một rừng Active Directory đa miền và bạn có yêu cầu triển khai các tùy chọn bảo mật DNS nâng cao cho tổ chức. Ba tùy chọn bảo mật nào bạn có thể cấu hình để làm cho DNS an toàn hơn trên mạng của mình? (Chọn phương án Sai.)",
      options: {
        A: "DNSSEC",
        B: "Đăng ký DNS (DNS registration)",
        C: "Cache locking",
        D: "Socket pooling",
      },
      correct: "B",
    },
    {
      question:
        "Câu 18 (DNS 18): Bạn là quản trị viên mạng cho một công ty phát triển phần mềm. Cơ sở hạ tầng DNS của bạn bao gồm nhiều máy chủ DNS phân tán về mặt địa lý. Bạn cần đảm bảo rằng khi máy khách thực hiện các truy vấn DNS, các truy vấn đó sẽ luôn được gửi đến máy chủ DNS gần nhất để thực hiện dịch vụ tra cứu. Điều gì phải được bật để điều này diễn ra trên mạng của bạn?",
      options: {
        A: "Logging",
        B: "Delegated admin",
        C: "Recursion",
        D: "Sắp xếp theo netmask DNS (DNS netmask ordering)",
      },
      correct: "D",
    },
    {
      question:
        "Câu 19 (DNS 19): Bạn là giám đốc CNTT cho một công ty giải pháp lưu trữ doanh nghiệp. Bạn vừa thuê một thành viên mới vào đội ngũ mạng của mình với trách nhiệm chính là quản lý DNS cho tổ chức của bạn. Quản trị viên này sẽ không chịu trách nhiệm quản lý bất kỳ dịch vụ active directory nào khác của công ty. Nhóm bảo mật nào sẽ phù hợp nhất với trách nhiệm của quản trị viên này?.",
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
        "Câu 20 (DHCP 20): Bạn là quản trị viên mạng cho một công ty đồ chơi. Cơ sở hạ tầng DHCP của bạn bao gồm việc sử dụng các bản cập nhật động DNS. Bạn cần đảm bảo rằng các bản ghi A của máy chủ DNS không bị ghi đè bởi các thiết bị DNS mới có cùng tên máy chủ trong quá trình cập nhật động DNS. Tùy chọn cấu hình DHCP nào sẽ đáp ứng yêu cầu này?",
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
        "Câu 21 (IPAM 21): : Bạn là trưởng nhóm cơ sở hạ tầng cho một công ty phát triển phần cứng công nghệ cao. Bạn cần ủy quyền một số trách nhiệm quản trị IPAM của nhóm cho các thành viên trong nhóm. Bạn quyết định rằng Noelle sẽ quản lý không gian địa chỉ IPAM, nhưng cô ấy sẽ không quản lý việc theo dõi và kiểm toán địa chỉ IP. Nhóm bảo mật IPAM nào sẽ phù hợp nhất với trách nhiệm mới của Noelle?.",
      options: {
        A: "Administrators",
        B: "Users",
        C: "IPAM ASM Administrators",
        D: "MSM Administrators",
      },
      correct: "C",
    },
    {
      question:
        "Câu 22 (IPAM 22): Bạn là quản trị viên mạng cho một công ty truyền thông lớn. Gần đây bạn đã quyết định triển khai IPAM trong tổ chức của mình với việc phát hành Windows Server 2012 R2. Bạn muốn thiết lập cơ sở hạ tầng IPAM của mình để một máy chủ chính có thể quản lý toàn bộ doanh nghiệp của bạn. Phương pháp triển khai IPAM nào sẽ đáp ứng yêu cầu này?",
      options: {
        A: "Isolated",
        B: "Tập trung (Centralized)",
        C: "Hybrid",
        D: "Distributed",
      },
      correct: "B",
    },
    {
      question:
        "Câu 23 (IPAM 23): Bạn là quản trị viên mạng chính cho một công ty lưu trữ web. Gần đây bạn đã quyết định triển khai IPAM trong tổ chức của mình. Bạn đã cài đặt và cung cấp tính năng IPAM trên máy chủ Windows Server 2012 R2 chuyên dụng của mình. Bước hợp lý tiếp theo trong quá trình triển khai IPAM của bạn là gì?",
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
        "Câu 24 (IPAM 24): Bạn là quản trị viên hệ thống của Tập đoàn Stellacon. Do sự tăng trưởng bất thường của các thiết bị TCP/IP trên mạng công ty của bạn trong năm qua, bạn cần mở rộng quy mô khả năng cơ sở dữ liệu IPAM của mình. Bạn hiện đang sử dụng Cơ sở dữ liệu Nội bộ Windows (WID) cho cơ sở hạ tầng IPAM của mình và bạn muốn di chuyển cơ sở dữ liệu IPAM của mình sang Microsoft SQL Server. Bạn sẽ sử dụng cmdlet PowerShell nào để xác minh cài đặt cấu hình cơ sở dữ liệu IPAM hiện tại?",
      options: {
        A: "Get-IpamDatabase",
        B: "Show-IpamDatabaseConfig",
        C: "Show-IpamStatistics",
        D: "Get-IpamMigrationSettings",
      },
      correct: "B",
    },
    {
      question: `Câu 25 (Cluster 25): Ứng dụng nào sau đây sẽ phù hợp hơn trên một cụm chuyển đổi dự phòng thay vì một cụm cân bằng tải mạng?
  1.SQL Server
  2.Trang web
  3.Máy chủ Hộp thư Exchange
  4.Dịch vụ VPN
.`,
      options: { A: "1,2", B: "1,3", C: "1,4", D: "2,4" },
      correct: "B",
    },
    {
      question: `Câu 26 (Cluster 26): Ứng dụng nào sau đây sẽ phù hợp hơn trên một cụm Cân bằng tải mạng thay vì một cụm chuyển đổi dự phòng?
  1.SQL Server
  2.Trang web
  3.Máy chủ cơ sở dữ liệu
  4.Dịch vụ Terminal
.`,
      options: { A: "1,2", B: "1,3", C: "1,4", D: "2,4" },
      correct: "D",
    },
    {
      question: `Câu 27 (CA 27): Công ty Channel Fishing muốn cấu hình một máy chủ CA trong DMZ để cấp chứng chỉ cho người dùng từ xa. Bạn sẽ thực hiện điều này như thế nào? 
  1.Bạn nên xem xét việc đưa vai trò Máy chủ Web Chính sách Đăng ký Chứng chỉ (Certificate Enrollment Policy Web Server) vào giải pháp.
  2.Bạn nên xem xét việc đưa trình phản hồi trực tuyến (online responder) vào giải pháp.
  3.Bạn nên xem xét việc đưa Dịch vụ Đăng ký Thiết bị Mạng (Network Device Enrollment Service) vào giải pháp.
  4.Bạn nên xem xét việc đưa dịch vụ web vào giải pháp.
  5.Bạn nên xem xét việc đưa Dịch vụ Web Đăng ký Chứng chỉ (Certificate Enrollment Web Service) vào giải pháp.
  6.Bạn nên xem xét việc đưa dịch vụ Đăng ký Web (Web Enrollment) vào giải pháp. 
`,
      options: { A: "1,2", B: "3,4", C: "5,6", D: "1,5" },
      correct: "D",
    },
    {
      question: `Câu 28 (AD FS 28): Bạn là quản trị viên hệ thống tại JavaCup, nơi lưu trữ một ứng dụng web nhận biết RMS mà người dùng của rừng JavaCup và rừng Boston Tea Company cần truy cập. Bạn triển khai một máy chủ AD FS duy nhất trong rừng JavaCup. Phát biểu nào sau đây là đúng về việc triển khai AD FS của bạn? 
  1.Bạn sẽ cấu hình một máy chủ bên tin cậy (relying-party server) trên máy chủ AD FS của JavaCup.
  2.Máy chủ AD FS trong rừng Boston Tea Company hoạt động như nhà cung cấp xác nhận quyền sở hữu (claims provider).
  3.Máy chủ AD FS trong rừng Boston Tea Company hoạt động như máy chủ bên tin cậy.
  4.Bạn sẽ cấu hình một quan hệ tin cậy nhà cung cấp xác nhận quyền sở hữu (claims provider trust) trên máy chủ AD FS của JavaCup. 
`,
      options: { A: "1,2", B: "1,3", C: "1,4", D: "2,3" },
      correct: "C",
    },
    {
      question:
        "Câu 1 (DNS Failover 1): : Bạn là quản trị viên mạng cho một công ty lớn có một trang chính và một văn phòng chi nhánh. Công ty của bạn có một rừng Active Directory duy nhất, ABC.com. Bạn có một bộ điều khiển miền duy nhất (ServerA) tại trang chính đã cài đặt vai trò DNS. ServerA được cấu hình như một vùng DNS chính. Bạn đã quyết định đặt một bộ điều khiển miền (ServerB) tại trang từ xa và triển khai vai trò DNS trên máy chủ đó. Bạn muốn cấu hình DNS để nếu liên kết WAN bị lỗi, người dùng ở cả hai trang vẫn có thể cập nhật bản ghi và giải quyết bất kỳ truy vấn DNS nào. Bạn nên cấu hình các máy chủ DNS như thế nào?",
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
        "Câu 2 (DNS 2): Bạn là quản trị viên mạng cho một công ty máy tính cỡ vừa. Bạn có một rừng Active Directory duy nhất, và các máy chủ DNS của bạn được cấu hình như các vùng Tích hợp Active Directory. Khi bạn xem các bản ghi DNS trong Active Directory, bạn nhận thấy có nhiều bản ghi cho các máy tính không tồn tại trên miền của bạn. Bạn muốn đảm bảo rằng chỉ các máy tính trong miền mới đăng ký với các máy chủ DNS của bạn. Bạn nên làm gì để giải quyết vấn đề này?.",
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
        "Câu 3 (DNS 3): Công ty của bạn bao gồm một rừng Active Directory duy nhất. Bạn có một bộ điều khiển miền Windows Server 2012 R2 cũng đã cài đặt vai trò DNS. Bạn cũng có một máy chủ DNS dựa trên Unix ở cùng một địa điểm. Bạn cần cấu hình máy chủ DNS Windows của mình để cho phép chuyển vùng đến máy chủ DNS dựa trên Unix. Bạn nên làm gì?.",
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
        "Câu 4 (DNS 4): Bạn là quản trị viên mạng cho Tập đoàn Stellacon. Stellacon có hai cây trong rừng Active Directory của mình, stellacon.com và abc.com. Chính sách của công ty không cho phép chuyển vùng DNS giữa hai cây. Bạn cần đảm bảo rằng khi bất kỳ ai trong abc.com cố gắng truy cập miền stellacon.com, tất cả các tên đều được giải quyết từ máy chủ DNS stellacon.com. Bạn nên làm gì?",
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
        "Câu 5 (DNS 5): Bạn là quản trị viên mạng cho tổ chức của mình. Một chính sách công ty mới quy định rằng tất cả các truy vấn DNS đến cần phải được ghi lại. Bạn có thể làm gì để xác minh rằng bộ phận CNTT tuân thủ chính sách mới này?",
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
        "Câu 6 (DNS 6): Bạn là quản trị viên mạng cho một công ty nhỏ có hai máy chủ DNS: DNS1 và DNS2. Cả hai máy chủ DNS đều nằm trên các bộ điều khiển miền. DNS1 được thiết lập như một vùng chính tiêu chuẩn và DNS2 được thiết lập như một vùng phụ. Một chính sách bảo mật mới đã được viết ra quy định rằng tất cả các lần chuyển vùng DNS phải được mã hóa. Làm thế nào bạn có thể thực hiện chính sách bảo mật mới?",
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
        "Câu 7 (DNS 7): Bạn chịu trách nhiệm về DNS trong tổ chức của mình. Bạn xem cơ sở dữ liệu DNS và thấy một số lượng lớn các bản ghi cũ trên máy chủ. Các bản ghi này không còn hợp lệ. Bạn nên làm gì?",
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
        "Câu 8 (DNS 8): Nhóm CNTT của bạn đã được nhóm tuân thủ thông báo rằng họ cần bản sao của các vùng Tích hợp Active Directory DNS vì lý do bảo mật. Bạn cần cung cấp cho bộ phận Tuân thủ một bản sao của vùng DNS. Bạn nên thực hiện mục tiêu này như thế nào?.",
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
        "Câu 9 (DNS 9):Bạn là quản trị viên mạng cho một mạng Windows Server 2012 R2. Bạn có nhiều địa điểm từ xa được kết nối với văn phòng chính của bạn bằng các liên kết vệ tinh chậm. Bạn muốn cài đặt DNS vào các văn phòng này để máy khách có thể định vị các máy chủ DNS có thẩm quyền ở địa điểm chính. Loại máy chủ DNS nào nên được cài đặt ở các địa điểm từ xa?",
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
        "Câu 10 (DHCP 10): Bạn có một máy chủ DHCP cục bộ cho các máy khách quay số của mình, nhưng bạn cũng muốn sử dụng tác nhân chuyển tiếp DHCP để chuyển tiếp các yêu cầu đến một máy chủ DHCP từ xa nếu máy chủ cục bộ không trả lời một yêu cầu. Để làm điều này, bạn phải làm gì sau đây?.",
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
      question:
        "Câu 12 (VPN 12): Công ty tư vấn tài chính nhỏ của bạn có một máy chủ Windows 2012 R2 độc lập cung cấp một vị trí trung tâm để các nhà tư vấn làm việc tại nhà của bạn tải lên và tải xuống các tệp bảng tính bằng Windows 8. Một vài nhà tư vấn vẫn sử dụng các máy trạm Windows XP Professional. Bạn muốn thiết lập kết nối VPN giữa các nhà tư vấn và máy chủ RRAS. Máy chủ RRAS được kết nối với một mạng ngang hàng nhỏ gồm năm máy trạm Windows XP Professional sử dụng mạng để lưu trữ tệp, bao gồm cả các tệp mà các nhà tư vấn đang tải lên và tải xuống. Bạn nên sử dụng giao thức xác thực nào cho VPN?",
      options: { A: "CHAP", B: "MS-CHAPv2", C: "EAP-TLS", D: "PAP" },
      correct: "B",
    },
    {
      question:
        "Câu 13 (VPN 13): : Bạn đã triển khai VPN để kết nối các địa điểm khác nhau của tổ chức mình. Các địa điểm này bao gồm các văn phòng ở New York, Sacramento, Memphis và Omaha, với một mạng LAN đáng kể ở mỗi địa điểm. Máy chủ RRAS được thiết lập sao cho người dùng không biết về sự phức tạp của các kết nối. Bạn đang bắt đầu gặp sự cố với các kết nối giữa các văn phòng và do đó, số lượng cuộc gọi hỗ trợ đang tăng lên đáng kể. Bạn có thể sử dụng các cấu hình nào để khắc phục sự cố giao tiếp?",
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
        "Câu 14 (RRAS 14): Bạn đang sử dụng một máy chủ RRAS để quản lý truy cập từ xa vào mạng Windows Server 2012 R2 nhỏ của mình phục vụ một địa điểm duy nhất. RRAS cung cấp quyền truy cập cho một số người dùng từ xa và cho những người có máy trên mạng cục bộ nhưng đôi khi muốn truy cập mạng từ nhà hoặc từ khách sạn khi đang đi công tác. Bất kể loại người dùng nào, mọi người đều được xác thực thông qua Active Directory. Bạn đã không dành nhiều thời gian để xem xét việc sử dụng kết nối từ xa này kể từ khi bạn cấu hình hệ thống, nhưng bây giờ có một mối lo ngại về những người dùng trái phép cũng như các sự cố không liên tục mà người dùng từ xa đang gặp phải khi kết nối với mạng. Bạn đã được yêu cầu chuẩn bị một báo cáo cho ban quản lý mô tả mức độ của những vấn đề này trong công ty. Bạn nhớ lại rằng khi bạn thiết lập hệ thống, bạn đã cấu hình ghi nhật ký để theo dõi tất cả các lần thử kết nối bằng cách sử dụng kế toán Windows cục bộ. Bạn sẽ tìm thấy thông tin ghi nhật ký cần thiết để chuẩn bị báo cáo của mình ở đâu?",
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
        "Câu 15 (NAP 15): Bạn là quản trị viên mạng của một miền Active Directory có tên là Stellacon.com. Bạn có một máy chủ có tên là Earth chạy Windows Server 2012 R2. Earth đã cài đặt vai trò Máy chủ DHCP và dịch vụ vai trò Máy chủ Chính sách Mạng (NPS). Bạn bật Bảo vệ Truy cập Mạng (NAP) trên tất cả các phạm vi DHCP trên Earth. Bạn cần tạo một chính sách DHCP sẽ áp dụng cho tất cả các máy khách DHCP không tuân thủ NAP. Bạn nên chỉ định tiêu chí nào khi tạo chính sách DHCP?",
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
        "Câu 16 (NAP 16): Mạng của bạn chứa một miền Active Directory có tên là contoso.com. Bảo vệ Truy cập Mạng (NAP) được triển khai cho miền. Bạn cần tạo các tệp nhật ký theo dõi sự kiện NAP trên một máy tính khách. Bạn nên chạy lệnh gì?",
      options: {
        A: "Register-ObjectEvent",
        B: "Register-EngineEvent",
        C: "tracert",
        D: "logman",
      },
      correct: "D",
    },
    {
      question:
        "Câu 17 (RADIUS 17): Mạng của bạn chứa bốn máy chủ Chính sách Mạng (NPS) có tên là ServerA, ServerB, ServerC và ServerD. Server1 được cấu hình làm proxy RADIUS chuyển tiếp các yêu cầu kết nối đến một nhóm máy chủ RADIUS từ xa có tên là Group1. Bạn cần đảm bảo rằng ServerB và ServerC nhận được các yêu cầu kết nối. ServerD chỉ nên nhận các yêu cầu kết nối nếu cả ServerB và ServerC đều không khả dụng. Bạn nên cấu hình Group1 như thế nào?",
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
        "Câu 18 (RADIUS 18): Mạng của bạn chứa một miền Active Directory có tên là Stellacon.com. Miền này chứa một máy chủ RADIUS có tên là Server1 chạy Windows Server 2012 R2. Bạn thêm một máy chủ VPN có tên là Server2 vào mạng. Trên Server1, bạn tạo một số chính sách mạng. Bạn cần cấu hình Server1 để chấp nhận các yêu cầu xác thực từ Server2. Bạn nên sử dụng công cụ nào trên Server1?",
      options: {
        A: "Set-RemoteAccessRadius",
        B: "CMAK",
        C: "NPS",
        D: "Routing and Remote Access",
      },
      correct: "C",
    },
    {
      question:
        "Câu 19 (VPN 19): Người dùng từ xa có các máy tính khách chạy Windows XP, Windows 7 hoặc Windows 8. Bạn cần đảm bảo rằng chỉ các máy tính khách chạy Windows 7 hoặc Windows 8 mới có thể thiết lập kết nối VPN đến Server1. Bạn nên cấu hình gì trên Server1?",
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
        "Câu 20 (Security 20): Bạn là quản trị viên mạng cho một tổ chức lớn chứa một miền Active Directory có tên là Stellacon.com. Miền này chứa một máy chủ có tên là Server1 chạy Windows Server 2012 R2. Server1 đã cài đặt vai trò máy chủ Dịch vụ Chính sách và Truy cập Mạng. Bạn dự định triển khai xác thực 802.1X để bảo mật mạng không dây. Bạn cần xác định phương pháp xác thực Máy chủ Chính sách Mạng (NPS) nào hỗ trợ xác thực lẫn nhau dựa trên chứng chỉ cho việc triển khai 802.1X. Bạn nên xác định phương pháp xác thực nào?",
      options: {
        A: "PEAP-MS-CHAP v2",
        B: "MS-CHAP v2",
        C: "EAP-TLS",
        D: "MS-CHAP",
      },
      correct: "C",
    },
    {
      question: `Câu 21 (DNS 21):Bạn là quản trị viên mạng của Công ty ABC. Mạng của bạn bao gồm hai máy chủ DNS có tên là DNS1 và DNS2. Những người dùng được cấu hình để sử dụng DNS2 phàn nàn vì họ không thể kết nối với các trang web trên Internet. Bảng sau đây cho thấy cấu hình của cả hai máy chủ:
      DNS1	            DNS2
      _msdcs.abc.com	  .(root)
      abc.com	          _msdcs.abc.com
                         abc.com
Những người dùng được kết nối với DNS2 cần có thể truy cập Internet. Cần phải làm gì? 
`,
      options: {
        A: "AD Integrated.",
        B: "Xóa vùng .(root) khỏi DNS2 và cấu hình chuyển tiếp có điều kiện.",
        C: "Xóa cache.dns.",
        D: "Update root hints.",
      },
      correct: "B",
    },
    {
      question: `Câu 22 (VPN 22): : Gần đây, bạn đã di chuyển mạng Windows 2003 của công ty mình sang Windows Server 2012 R2. Việc di chuyển này bao gồm 300 máy trạm Windows 7 và Windows 8 và 8 máy chủ Windows Server 2012 R2. Công ty của bạn vừa mua lại một công ty khác có văn phòng ở cuối phố. Nó có một mạng Windows NT cần được di chuyển sang Windows Server 2012 R2, và bạn đã bắt đầu chuyển các máy chủ sang hệ điều hành và các dịch vụ liên quan mới. Vì bạn có một giới hạn chặt chẽ về chi phí cho việc bổ sung mạng, bạn hiện không thể đủ khả năng thuê các đường dây thuê bao giữa các tòa nhà. Cho đến khi bạn có thể nhận được hỗ trợ cho chúng, bạn sẽ tạo một VPN được mã hóa và xác thực giữa hai cơ sở qua các kết nối Internet đã tồn tại. Bạn cần triển khai những gì để đạt được mục tiêu này?
      1.L2TP
      2.PPTP
      3.IPsec
      4.RADIUS
      5.MS-CHAPv2
 `,
      options: { A: "1,2", B: "1,3", C: "1,4", D: "1,5" },
      correct: "B",
    },
    {
      question:
        "Câu 23 (RRAS 23): Lĩnh vực trách nhiệm của bạn tại Công ty Cho thuê Xe địa hình là xây dựng, triển khai và bảo trì hệ thống truy cập từ xa cho mạng Windows Server 2012 R2. Hệ thống bao gồm bốn máy chủ RRAS phục vụ 200 người dùng trên toàn quốc. Người dùng thường di chuyển từ địa điểm này đến địa điểm khác và họ truy cập các máy chủ khác nhau tùy thuộc vào nơi họ gọi đến. Bạn đã tập hợp một trạm quản lý để giám sát tất cả các máy chủ RRAS để bạn có thể theo dõi khía cạnh quan trọng này của mạng của mình. Bạn sử dụng công cụ nào để thực hiện điều này?",
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
        "Câu 24 (NAP 24): Mạng của bạn chứa một miền Active Directory có tên là Panek.com. Miền này chứa một máy chủ có tên là Server1 chạy Windows Server 2012 R2. Server1 đã cài đặt dịch vụ vai trò Máy chủ Chính sách Mạng (NPS). Bạn dự định cấu hình Server1 làm máy chủ chính sách tình trạng Bảo vệ Truy cập Mạng (NAP) để thực thi VPN bằng Trình hướng dẫn Cấu hình NAP. Bạn cần đảm bảo rằng bạn có thể cấu hình phương pháp thực thi VPN trên Server1 thành công. Bạn nên cài đặt gì trên Server1 trước khi chạy Trình hướng dẫn Cấu hình NAP?",
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
        "Câu 25 (RADIUS 25): Bạn là quản trị viên mạng và bạn đã được yêu cầu thiết lập một hệ thống kế toán để mỗi phòng ban chịu trách nhiệm về chi phí sử dụng các dịch vụ mạng của họ. Mạng của bạn chứa một máy chủ Chính sách Mạng (NPS) có tên là ServerA. Mạng chứa một máy chủ có tên là Database1 đã cài đặt Microsoft SQL server. Tất cả các máy chủ đều chạy Windows Server 2012 R2. Bạn cấu hình NPS trên ServerA để ghi nhật ký dữ liệu kế toán vào cơ sở dữ liệu trên Database1. Bạn cần đảm bảo rằng dữ liệu kế toán được ghi lại nếu Database1 bị lỗi. Giải pháp phải giảm thiểu chi phí. Bạn nên làm gì?",
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
        "Câu 26 (VPN 26): 450 nhân viên bán hàng của công ty bạn cuối cùng cũng sẽ nhận được máy tính xách tay để họ có thể liên lạc với văn phòng công ty bất cứ khi nào họ cần thông tin được lưu trữ trên mạng công ty. Mạng công ty được nâng cấp hoàn toàn lên Windows Server 2012 R2, bao gồm cả cấu hình mặc định của máy chủ RRAS cho kết nối từ xa qua VPN. Bạn đã cài đặt Windows 8 với cấu hình mặc định trên tất cả các máy tính xách tay và đã thêm các nhân viên bán hàng vào một nhóm đặc biệt trong Active Directory. Sau khi bạn kiểm tra các máy tính xách tay, mọi thứ dường như hoạt động tốt. Bạn gửi chúng đi và, khi chúng đến tay các nhân viên bán hàng, bạn theo dõi các kết nối ban đầu của họ. Trong vài ngày tới, bạn bắt đầu nhận được các cuộc gọi hỗ trợ từ những người phàn nàn rằng họ không thể kết nối với mạng. Nguyên nhân có khả năng nhất của vấn đề là gì?.",
      options: {
        A: "Win 8 không hỗ trợ.",
        B: "RRAS không hỗ trợ.",
        C: "Cấu hình RRAS mặc định không hỗ trợ đủ kết nối VPN.",
        D: "L2TP.",
      },
      correct: "C",
    },
    {
      question: `Câu 27 (NAP 27): Bạn là quản trị viên mạng cho một miền Active Directory lớn có tên là Panek.com. Miền này chứa một máy chủ có tên là Saturn chạy Windows Server 2012 R2. Saturn đã cài đặt vai trò Máy chủ DHCP. Mạng chứa 400 máy tính khách chạy Windows 7 và Windows 8. Tất cả các máy tính khách đều được tham gia vào miền và được cấu hình là máy khách DHCP. Bạn cài đặt một máy chủ mới có tên là Jupiter chạy Windows Server 2012 R2. Trên Jupiter, bạn cài đặt dịch vụ vai trò Máy chủ Chính sách Mạng (NPS) và bạn cấu hình Bảo vệ Truy cập Mạng (NAP) để sử dụng phương pháp thực thi DHCP. Bạn cần đảm bảo rằng Saturn chỉ cung cấp một cổng mặc định hợp lệ cho các máy tính vượt qua xác thực tình trạng hệ thống. Bạn nên thực hiện hai hành động nào? 
  1.Từ bảng điều khiển DHCP, cấu hình tùy chọn 016 Swap Server.
  2.Từ bảng điều khiển DHCP, bật NAP trên tất cả các phạm vi.
  3.Từ bảng điều khiển Cấu hình Máy khách NAP, bật máy khách Thực thi Cách ly DHCP.
  4.Từ bảng điều khiển DHCP, tạo một chính sách mới.
  5.Từ Trình quản lý Máy chủ, cài đặt dịch vụ vai trò Máy chủ Chính sách Mạng. 
`,
      options: { A: "1,2", B: "2,3", C: "2,4", D: "2,5" },
      correct: "B",
    },
    {
      question: `Câu 28 (Security 28): Bạn là quản trị viên của một tổ chức lớn chứa một miền Active Directory có tên là Stellacon.com. Miền này chứa một máy chủ có tên là ServerA chạy Windows Server 2012 R2. ServerA đã cài đặt vai trò máy chủ Dịch vụ Chính sách và Truy cập Mạng. Chính sách bảo mật của công ty bạn yêu cầu rằng xác thực dựa trên chứng chỉ phải được sử dụng bởi một số dịch vụ mạng. Bạn cần xác định phương pháp xác thực Máy chủ Chính sách Mạng (NPS) nào tuân thủ chính sách bảo mật. Bạn nên xác định hai phương pháp xác thực nào? (Chọn hai.)
    1.MS-CHAP
    2.PEAP-MS-CHAP v2
    3.CHAP
    4.EAP-TLS
    5.MS-CHAP v2
`,
      options: { A: "1,2", B: "2,3", C: "2,4", D: "2,5" },
      correct: "C",
    },
    {
      question: `Câu 29 (RRAS 29): : Công ty của bạn có văn phòng ở năm địa điểm trên toàn quốc. Hầu hết hoạt động của người dùng là cục bộ trong mạng của chính họ. Thỉnh thoảng, một số người dùng ở một địa điểm cần gửi thông tin bí mật đến một trong bốn địa điểm khác hoặc để lấy thông tin từ một trong số đó. Việc liên lạc giữa các địa điểm từ xa là không thường xuyên và tương đối không thường xuyên, vì vậy bạn đã cấu hình RRAS để sử dụng các đường dây quay số theo yêu cầu để thiết lập các kết nối. Yêu cầu duy nhất của ban quản lý là bất kỳ thông tin liên lạc nào giữa các địa điểm văn phòng phải được bảo mật một cách thích hợp. Bạn nên thực hiện các bước nào sau đây để đảm bảo tuân thủ yêu cầu này? (Chọn tất cả các câu trả lời đúng.)
  1.Cấu hình CHAP trên tất cả các máy chủ RRAS.
  2.Cấu hình PAP trên tất cả các máy chủ RRAS.
  3.Cấu hình MPPE trên tất cả các máy chủ RRAS.
  4.Cấu hình L2TP trên tất cả các máy chủ RRAS.
  5.Cấu hình MS-CHAPv2 trên tất cả các máy chủ RRAS 
`,
      options: { A: "3,1", B: "3,2", C: "3,4", D: "3,5" },
      correct: "D",
    },
    {
      question: `Câu 30 (RRAS 30): Bạn là quản trị viên mạng cho một công ty có hai văn phòng; một ở Bờ Đông và một ở Bờ Tây. Thông tin bán hàng cần được gửi từ văn phòng Bờ Đông đến văn phòng Bờ Tây một cách thường xuyên, và một số thông tin về lương và báo cáo kế toán cần được gửi trở lại Bờ Đông. Chủ sở hữu của công ty bạn đã đọc những câu chuyện trên báo về các vấn đề bảo mật trên Internet và từ chối cho phép bất kỳ thông tin nào của công ty đi qua Internet, bất kể bạn nói bao nhiêu về việc bảo mật các đường truyền đó. Việc liên lạc giữa các trang web diễn ra khoảng một lần một tuần. Bạn sẽ thực hiện các bước nào để đảm bảo xác thực an toàn và truyền tải an toàn mà không tốn quá nhiều tiền? 
    1.Cấu hình PAP làm phương thức xác thực giữa các máy chủ.
    2.Cài đặt RRAS trên một máy chủ ở mỗi địa điểm và giữ cho đường dây luôn mở bằng kết nối ISDN sẽ luôn có sẵn để liên lạc.
    3.Cài đặt RRAS trên một máy chủ ở mỗi địa điểm và cấu hình quay số theo yêu cầu để mở kết nối mỗi khi có đường truyền.
    4.Cấu hình CHAP làm phương thức xác thực giữa các máy chủ.
    5.Cấu hình MS-CHAPv2 làm phương thức xác thực giữa các máy chủ.
    6.Cấu hình IPsec làm phương thức mã hóa giữa các máy chủ.
    7.Cấu hình MPPE làm phương thức mã hóa giữa các máy chủ.
    8.Cấu hình L2TP làm phương thức mã hóa giữa các máy chủ.
`,
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
      correct: "A",
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
      question: `Câu 16 (Replication 16): .Bạn đã cấu hình môi trường Active Directory của mình với nhiều trang và đã đặt các tài nguyên thích hợp vào mỗi trang. Bây giờ bạn đang cố gắng chọn một giao thức để truyền thông tin sao chép giữa hai trang. Kết nối giữa hai trang có các đặc điểm sau:
  Liên kết thường không khả dụng trong một số thời điểm nhất định trong ngày do nhà cung cấp mạng không đáng tin cậy.
  Việc truyền sao chép phải được thử cho dù liên kết có khả dụng hay không. Nếu liên kết không khả dụng trong quá trình sao chép theo lịch trình, thông tin sẽ tự động được nhận sau khi liên kết khả dụng trở lại.
  Lưu lượng sao chép phải có khả năng đi qua một kết nối Internet tiêu chuẩn.
  Giao thức nào sau đây đáp ứng các yêu cầu này? 
`,
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
      question: `Câu 19 (Replication 19): Daniel chịu trách nhiệm quản lý lưu lượng sao chép Active Directory cho một tổ chức cỡ vừa đã triển khai một miền Active Directory duy nhất. Hiện tại, môi trường được cấu hình với hai trang và các cài đặt mặc định để sao chép. Mỗi trang bao gồm 15 bộ điều khiển miền. Gần đây, các quản trị viên mạng đã phàn nàn rằng lưu lượng Active Directory đang sử dụng một lượng lớn băng thông mạng có sẵn giữa hai trang. Daniel đã được yêu cầu đáp ứng các yêu cầu sau:
    Giảm lượng lưu lượng mạng giữa các bộ điều khiển miền trong hai trang.
    Giảm thiểu lượng thay đổi đối với cấu trúc liên kết trang hiện tại.
    Không yêu cầu thay đổi đối với cơ sở hạ tầng mạng vật lý hiện có.
    Daniel quyết định rằng sẽ hiệu quả nhất khi cấu hình các bộ điều khiển miền cụ thể trong mỗi trang sẽ nhận phần lớn lưu lượng sao chép từ trang kia. Giải pháp nào sau đây đáp ứng các yêu cầu? 
`,
      options: {
        A: "Trang bổ sung.",
        B: "Nhiều liên kết trang.",
        C: "Cầu nối liên kết trang.",
        D: "Cấu hình một máy chủ tại mỗi trang để hoạt động như một máy chủ đầu cầu ưu tiên (bridgehead server).",
      },
      correct: "D",
    },
    {
      question: `Câu 20 (Replication 20): Christina chịu trách nhiệm quản lý lưu lượng sao chép Active Directory cho một tổ chức cỡ vừa. Hiện tại, môi trường được cấu hình với một trang duy nhất và các cài đặt mặc định để sao chép. Trang này chứa hơn 50 bộ điều khiển miền, và các quản trị viên hệ thống thường xuyên thực hiện các thay đổi đối với cơ sở dữ liệu Active Directory. Gần đây, các quản trị viên mạng đã phàn nàn rằng lưu lượng Active Directory đang tiêu thụ một lượng lớn băng thông mạng giữa các phần của mạng được kết nối bằng các liên kết chậm. Thông thường, lượng lưu lượng sao chép là hợp lý, nhưng gần đây người dùng đã phàn nàn về hiệu suất mạng chậm trong một số giờ nhất định trong ngày.
Christina đã được yêu cầu giảm bớt vấn đề trong khi đáp ứng các yêu cầu sau:
Có thể kiểm soát chính xác thời điểm sao chép xảy ra.
Có thể dựa trên sao chép Active Directory trên cơ sở hạ tầng mạng vật lý.
Thực hiện các thay đổi mà không cần tạo hoặc xóa bất kỳ bộ điều khiển miền nào.
Hai trong số các bước nào sau đây Christina có thể thực hiện để đáp ứng các yêu cầu này?
    1.Tạo và xác định các đối tượng Kết nối chỉ định các giờ trong đó sao chép sẽ xảy ra.
    2.Tạo nhiều liên kết trang.
    3.Tạo một cầu nối liên kết trang.
    4.Tạo các trang Active Directory mới phản ánh cấu trúc liên kết mạng vật lý.
    5.Cấu hình một máy chủ tại mỗi trang mới để hoạt động như một máy chủ đầu cầu.
`,
      options: { A: "1,2", B: "1,3", C: "1,4", D: "1,5" },
      correct: "C",
    },
    {
      question:
        "Câu 1 (IPv6 1): Bạn là quản trị viên mạng của Công ty ABC. Bạn có một tiền tố IPv6 là 2001:DB8:BBCC:0000::/53, và bạn cần thiết lập mạng của mình để lược đồ địa chỉ IPv6 có thể xử lý thêm 1.000 mạng con. Bạn sẽ sử dụng mặt nạ mạng nào?",
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
      question: `Câu 18 (IPv6 18): : Bạn yêu cầu một trong những kỹ thuật viên của mình lấy địa chỉ IPv6 của một máy Windows Server 2012 R2 mới, và cô ấy đưa cho bạn một ghi chú có FE80::0203:FFFF:FE11:2CD trên đó. Bạn có thể biết được gì từ địa chỉ này? 
  1.Đây là một địa chỉ IPv6 duy nhất toàn cục.
  2.Đây là một địa chỉ IPv6 liên kết cục bộ.
  3.Đây là một địa chỉ IPv6 đa hướng.
  4.Ở định dạng EUI-64, bạn có thể thấy địa chỉ MAC của nút.
  5.Ở định dạng EUI-64, bạn có thể thấy địa chỉ IPv4 của nút.
`,
      options: { A: "1,2", B: "3,4", C: "4,5", D: "2,4" },
      correct: "D",
    },
    {
      question:
        "Câu 19 (File 19): : Công ty mà bạn làm việc có một nhóm quản trị đa cấp được phân chia theo phòng ban và địa điểm. Có bốn địa điểm chính, và bạn thuộc nhóm Đông Bắc. Bạn đã được chỉ định vào nhóm quản trị chịu trách nhiệm tạo và duy trì các chia sẻ mạng cho tệp và máy in trong khu vực của bạn. Nơi làm việc cuối cùng của bạn là một mạng Windows Server 2008 lớn, nơi bạn có nhiều trách nhiệm hơn. Bạn rất hào hứng với cơ hội tìm hiểu thêm về Windows Server 2012 R2. Đối với nhiệm vụ đầu tiên, bạn đã được cung cấp một danh sách các tệp và máy in chia sẻ cần được tạo cho người dùng trong khu vực của bạn. Bạn hỏi cách tạo chúng trong Windows Server 2012 R2, và bạn được cho biết rằng quy trình tạo chia sẻ giống như với Windows Server 2008. Bạn tạo các chia sẻ và sử dụng NET USE để kiểm tra chúng. Mọi thứ có vẻ hoạt động tốt, vì vậy bạn gửi một tin nhắn rằng các chia sẻ đã có sẵn. Ngày hôm sau, bạn bắt đầu nhận được các cuộc gọi từ người dùng nói rằng họ không thể thấy bất kỳ tài nguyên nào bạn đã tạo. Lý do có khả năng nhất cho các cuộc gọi từ người dùng là gì?",
      options: {
        A: "NetBIOS.",
        B: "Bạn cần xuất bản các chia sẻ trong thư mục.",
        C: "Replication.",
        D: "Network error.",
      },
      correct: "B",
    },
    {
      question: `Câu 20 (Audit 20): Isabel là một quản trị viên hệ thống cho một môi trường Active Directory đang chạy ở chế độ Gốc (Native mode). Gần đây, một số người quản lý đã báo cáo những nghi ngờ về hoạt động của người dùng và đã yêu cầu cô ấy tăng cường bảo mật trong môi trường. Cụ thể, các yêu cầu như sau:
    Việc truy cập một số tệp nhạy cảm phải được ghi lại.
    Việc sửa đổi một số tệp nhạy cảm phải được ghi lại.
    Các quản trị viên hệ thống phải có khả năng cung cấp thông tin về những người dùng đã truy cập các tệp nhạy cảm và thời điểm họ truy cập.
    Tất cả các lần thử đăng nhập cho các máy dùng chung cụ thể phải được ghi lại.
Isabel nên thực hiện các bước nào sau đây để đáp ứng các yêu cầu này? 
    1.Bật kiểm toán bằng công cụ Quản lý Máy tính (Computer Management).
    2.Bật kiểm toán bằng công cụ Người dùng và Máy tính Active Directory (Active Directory Users and Computers).
    3.Bật kiểm toán bằng công cụ Miền và Quan hệ tin cậy Active Directory (Active Directory Domains and Trusts).
    4.Bật kiểm toán bằng công cụ Trình xem Sự kiện (Event Viewer).
    5.Xem nhật ký kiểm toán bằng công cụ Trình xem Sự kiện (Event Viewer).
    6.Xem thông tin kiểm toán bằng công cụ Quản lý Máy tính (Computer Management).
    7.Bật cài đặt kiểm toán thất bại và thành công cho các tệp cụ thể được lưu trữ trên các ổ đĩa NTFS.
    8.Bật cài đặt kiểm toán thất bại và thành công cho các sự kiện đăng nhập trên các tài khoản máy tính cụ thể.
`,
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
      question:
        "Câu 22 (BranchCache 22): Công ty của bạn có trụ sở chính tại Colorado Springs và có một địa điểm trang web từ xa ở Tampa. Văn phòng Colorado Spring có một máy chủ tệp tên là FS01. FS01 đã cài đặt dịch vụ vai trò BranchCache cho Tệp Mạng. Văn phòng Tampa của bạn có một máy chủ tệp tên là FS02. FS02 đã được cấu hình làm máy chủ bộ đệm ẩn được lưu trữ BranchCache. Bạn cần tải trước dữ liệu từ các chia sẻ tệp trên FS01 vào bộ đệm ẩn trên FS02. Bạn đã tạo các hàm băm cho các chia sẻ tệp trên FS01. Bạn nên chạy cmdlet nào tiếp theo?",
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
