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
      options: {
        A: "1,2,3",
        B: "1",
        C: "1,2",
        D: "1,2,3,4",
      },
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
        "Câu 13: Một quản trị viên hệ thống đang cố gắng xác định hệ thống tệp nào sẽ sử dụng cho một máy chủ sẽ trở thành máy chủ tệp và bộ điều khiển miền Windows Server 2012 R2. Công ty có các yêu cầu sau:\nHệ thống tệp phải cho phép bảo mật cấp tệp từ trong Windows 2012 R2 Server.\nHệ thống tệp phải sử dụng không gian hiệu quả trên các phân vùng lớn.\nSysvol của bộ điều khiển miền phải được lưu trữ trên phân vùng.\nHệ thống tệp nào sau đây đáp ứng các yêu cầu này?",
      options: {
        A: "FAT",
        B: "FAT32",
        C: "HPFS",
        D: "NTFS",
      },
      correct: "D",
    },
    {
      question:
        "Câu 14: Vì lý do bảo mật, bạn đã quyết định rằng bạn phải chuyển đổi phân vùng hệ thống trên ổ đĩa di động của mình từ hệ thống tệp FAT32 sang NTFS. Bạn phải thực hiện các bước nào sau đây để chuyển đổi hệ thống tệp?",
      options: {
        A: "1,2",
        B: "1,3",
        C: "1,4",
        D: "2,3",
      },
      correct: "C",
    },
    {
      question:
        "Câu 15: Windows Server 2012 R2 yêu cầu sử dụng các giao thức hoặc dịch vụ nào sau đây để hỗ trợ Active Directory?",
      options: {
        A: "1,2",
        B: "2,3",
        C: "4,5",
        D: "2,5",
      },
      correct: "D",
    },
    {
      question:
        "Câu 16: Bạn đang thăng cấp một máy tính Windows Server 2012 R2 thành một bộ điều khiển miền Active Directory cho mục đích thử nghiệm. Bộ điều khiển miền mới sẽ được thêm vào một miền hiện có. Trong khi bạn đang sử dụng Trình hướng dẫn cài đặt Active Directory, bạn nhận được một thông báo lỗi ngăn máy chủ được thăng cấp. Nguyên nhân của sự cố có thể là gì?",
      options: {
        A: "1,2",
        B: "2,3",
        C: "3,4",
        D: "1,3",
      },
      correct: "D",
    },
    {
      question:
        "Câu 17: Mạng của bạn chứa một miền Active Directory duy nhất. Miền chứa năm bộ điều khiển miền Windows Server 2008 R2. Bạn dự định cài đặt một bộ điều khiển miền Windows Server 2012 R2 mới. Bạn sẽ cần thực hiện hai hành động nào? (Mỗi câu trả lời đúng trình bày một phần của giải pháp. Chọn hai.)",
      options: {
        A: "1,2",
        B: "2,3",
        C: "3,4",
        D: "4,5",
      },
      correct: "B",
    },
    {
      question:
        "Câu 18: Bạn là quản trị viên mạng cho một công ty lớn sản xuất các vật dụng nhỏ. Ban quản lý yêu cầu bạn triển khai một hệ thống Windows Server 2012 R2 mới. Bạn cần triển khai quản lý danh tính liên kết. Điều nào sau đây sẽ giúp bạn làm điều này?",
      options: {
        A: "Active Directory Federation Services (Dịch vụ Liên kết Active Directory)",
        B: "Active Directory DNS Services (Dịch vụ DNS Active Directory)",
        C: "Active Directory IIS Services (Dịch vụ IIS Active Directory)",
        D: "Active Directory IAS Services (Dịch vụ IAS Active Directory)",
      },
      correct: "A",
    },
    {
      question:
        "Câu 19: Bạn là quản trị viên hệ thống chịu trách nhiệm về cơ sở hạ tầng của công ty. Bạn nghĩ rằng bạn có vấn đề với việc phân giải tên và bạn cần xác minh rằng bạn đang sử dụng tên máy chủ chính xác. Bạn muốn kiểm tra DNS trên hệ thống cục bộ và cần xem liệu tên máy chủ server-1 có phân giải thành địa chỉ IP 10.1.1.1 hay không. Hành động nào sau đây cung cấp giải pháp cho vấn đề?",
      options: {
        A: "Thêm một máy chủ DNS vào mạng con cục bộ của bạn.",
        B: "Thêm ánh xạ cho tên máy chủ server-1 vào địa chỉ IP 10.1.1.1 trong tệp HOSTS của hệ thống cục bộ.",
        C: "Thêm một bản ghi A vào máy chủ WINS cục bộ của bạn.",
        D: "Thêm một bản ghi MX vào máy chủ DNS cục bộ của bạn.",
      },
      correct: "B",
    },
    {
      question:
        "Câu 20: Bạn có một rừng Active Directory trong tổ chức của mình chứa một miền tên là Stellacon.com. Bạn có hai bộ điều khiển miền được cấu hình với vai trò DNS được cài đặt. Có hai vùng Tích hợp Active Directory có tên là Stellacon.com và Stellatest.com. Một trong những thành viên CNTT của bạn (không phải là quản trị viên) cần có thể sửa đổi máy chủ DNS Stellacon.com, nhưng bạn cần ngăn người dùng này sửa đổi bản ghi SOA của Stellatest.com. Bạn thực hiện điều này như thế nào?",
      options: {
        A: "Sửa đổi quyền của vùng Stellacon.com từ snap-in Trình quản lý DNS.",
        B: "Sửa đổi quyền của vùng Stellatest.com từ snap-in Trình quản lý DNS.",
        C: "Chạy Trình hướng dẫn ủy quyền kiểm soát (Delegation Of Control Wizard) trong Active Directory.",
        D: "Chạy Trình hướng dẫn ủy quyền kiểm soát (Delegation Of Control Wizard) trong snap-in DNS.",
      },
      correct: "A",
    },
    {
      question:
        "Câu 21: Công ty nơi bạn làm việc có một nhóm hành chính đa cấp được phân chia theo các phòng ban và địa điểm. Có bốn địa điểm chính, và bạn thuộc nhóm Đông Bắc. Bạn đã được chỉ định vào nhóm hành chính chịu trách nhiệm tạo và duy trì các chia sẻ mạng cho các tệp và máy in trong khu vực của bạn. Nơi làm việc cuối cùng của bạn có một mạng Windows Server 2003 lớn, nơi bạn có nhiều trách nhiệm hơn. Bạn rất hào hứng với cơ hội tìm hiểu thêm về Windows Server 2012 R2. Đối với nhiệm vụ đầu tiên của mình, bạn đã được cung cấp một danh sách các chia sẻ tệp và máy in cần được tạo cho người dùng trong khu vực của bạn. Bạn hỏi cách tạo chúng trong Windows Server 2012 R2, và bạn được cho biết rằng quy trình tạo một chia sẻ giống như với Windows Server 2003. Bạn tạo các chia sẻ và sử dụng NET USE để kiểm tra chúng. Mọi thứ dường như hoạt động tốt, vì vậy bạn gửi một thông báo rằng các chia sẻ đã có sẵn. Ngày hôm sau, bạn bắt đầu nhận được các cuộc gọi từ người dùng nói rằng họ không thể thấy bất kỳ tài nguyên nào bạn đã tạo. Lý do có khả năng nhất cho các cuộc gọi từ người dùng là gì?",
      options: {
        A: "Bạn quên bật NetBIOS cho các chia sẻ.",
        B: "Bạn cần buộc sao chép để các chia sẻ xuất hiện trong thư mục.",
        C: "Bạn cần xuất bản các chia sẻ trong thư mục.",
        D: "Các chia sẻ sẽ xuất hiện trong khoảng thời gian sao chép bình thường.",
      },
      correct: "C",
    },
    {
      question:
        "Câu 22: Bạn muốn xuất bản một máy in lên Active Directory. Bạn sẽ nhấp vào đâu để hoàn thành tác vụ này?",
      options: {
        A: "Tab Sharing (Chia sẻ)",
        B: "Tab Advanced (Nâng cao)",
        C: "Tab Device Settings (Cài đặt thiết bị)",
        D: "Nút Printing Preferences (Tùy chọn in)",
      },
      correct: "A",
    },
    {
      question:
        "Câu 23: Một quản trị viên hệ thống tạo một đối tượng Máy in cục bộ, nhưng nó không hiển thị trong Active Directory khi người dùng thực hiện tìm kiếm tất cả các máy in. Những lý do có thể là gì?",
      options: {
        A: "1,2",
        B: "1,3",
        C: "1,4",
        D: "2,3",
      },
      correct: "B",
    },
    {
      question:
        "Câu 24: Bạn là quản trị viên mạng cho một nhà phân phối hạt cà phê cỡ vừa. Mạng của công ty bạn có bốn máy chủ Windows 2012 R2, và tất cả các máy khách đang chạy Windows 8 hoặc Windows 7. Hầu hết người dùng cuối của bạn sử dụng máy tính xách tay để làm việc, và nhiều người trong số họ làm việc xa văn phòng. Bạn nên cấu hình gì để giúp họ làm việc trên các tài liệu khi ở xa văn phòng?",
      options: {
        A: "Truy cập tệp trực tuyến (Online file access)",
        B: "Truy cập tệp ngoại tuyến (Offline file access)",
        C: "Quyền chia sẻ (Share permissions)",
        D: "Quyền NTFS",
      },
      correct: "B",
    },
    {
      question:
        "Câu 25: Công ty của bạn đã quyết định triển khai một máy chủ Windows 2012 R2. Giám đốc CNTT của công ty trước bạn luôn sử dụng FAT32 làm phân vùng hệ thống. Công ty của bạn muốn biết liệu có nên chuyển sang NTFS không. Một số lợi thế của NTFS là gì? (Chọn tất cả các câu trả lời đúng.)",
      options: {
        A: "1",
        B: "1,2",
        C: "1,2,3",
        D: "1,2,3,4",
      },
      correct: "D",
    },
    {
      question:
        "Câu 26: Will, giám đốc CNTT của công ty bạn, đã được yêu cầu cấp cho Moe quyền đọc và thay đổi tài liệu trong thư mục Stellacon Documents. Bảng sau đây cho thấy các quyền hiện tại trên thư mục được chia sẻ:\nNhóm/Người dùng\nNTFS\nChia sẻ\n\nSales\nRead\nChange\n\nMarketing\nModify\nChange\n\nR&D\nDeny\nFull Control\n\nFinance\nRead\nRead\n\nTylor\nRead\nChange\n\n\nMoe là thành viên của các nhóm Sales và Finance. Khi Moe truy cập thư mục Stellacon Documents, anh ấy có thể đọc tất cả các tệp, nhưng hệ thống không cho phép anh ấy thay đổi hoặc xóa tệp. Bạn cần làm gì để cấp cho Moe số quyền tối thiểu để thực hiện công việc của mình?",
      options: {
        A: "Cấp cho Sales quyền Full Control cho các quyền chia sẻ.",
        B: "Cấp cho Moe quyền Full Control cho bảo mật NTFS.",
        C: "Cấp cho Finance quyền Modify cho bảo mật NTFS.",
        D: "Cấp cho Moe quyền Modify cho bảo mật NTFS.",
      },
      correct: "D",
    },
    {
      question:
        "Câu 27: Bạn là quản trị viên mạng của mình, bao gồm hai hệ thống Windows Server 2012 R2. Một trong các máy chủ là bộ điều khiển miền và máy chủ còn lại là máy chủ tệp để lưu trữ dữ liệu. Ổ cứng của máy chủ tệp đang bắt đầu đầy. Bạn không có khả năng cài đặt một ổ cứng khác, vì vậy bạn quyết định giới hạn dung lượng mà mọi người có trên ổ cứng. Bạn cần triển khai gì để giải quyết vấn đề của mình?",
      options: {
        A: "Phân bổ đĩa (Disk spacing)",
        B: "Hạn ngạch đĩa (Disk quotas)",
        C: "Làm cứng đĩa (Disk hardening)",
        D: "Giới hạn đĩa (Disk limitations)",
      },
      correct: "B",
    },
    {
      question:
        "Câu 28: Bạn là giám đốc CNTT của công ty. Bạn đã được yêu cầu cấp cho nhóm Admin quyền đọc, thay đổi và gán quyền cho các tài liệu trong thư mục Stellacon Documents. Bảng sau đây cho thấy các quyền hiện tại trên thư mục được chia sẻ Stellacon Documents:\nNhóm/Người dùng\nNTFS\nChia sẻ\n\nSales\nRead\nChange\n\nMarketing\nModify\nChange\n\nR&D\nDeny\nFull Control\n\nFinance\nRead\nRead\n\nTylor\nRead\nChange\n\n\nBạn cần làm gì để cấp cho nhóm Admin các quyền để thực hiện công việc của họ? (Chọn tất cả các câu trả lời đúng.)",
      options: {
        A: "1,2",
        B: "2,3",
        C: "3,4",
        D: "3,5",
      },
      correct: "D",
    },
    {
      question:
        "Câu 29: Bạn đã được yêu cầu cấu hình một máy Windows Server 2012 R2 Datacenter Server Core. Bạn có thể sử dụng các ứng dụng cấu hình từ xa nào để cấu hình máy chủ này từ máy của mình?",
      options: {
        A: "1,2",
        B: "2,3",
        C: "1,4",
        D: "1,3",
      },
      correct: "D",
    },
    {
      question:
        "Câu 30: Bạn đã được một công ty nhỏ thuê để triển khai các hệ thống Windows Server 2012 R2 mới. Công ty muốn bạn thiết lập một máy chủ cho các vị trí thư mục chính của người dùng. Bạn sẽ thiết lập loại máy chủ nào?",
      options: {
        A: "Máy chủ PDC (PDC server)",
        B: "Máy chủ web (Web server)",
        C: "Máy chủ Exchange (Exchange server)",
        D: "Máy chủ tệp (File server)",
      },
      correct: "D",
    },
    {
      question:
        "Câu 1: Bạn muốn xây dựng một môi trường thử nghiệm dựa trên các máy ảo trên một máy Windows Server 2012 R2 duy nhất, nhưng bạn cũng muốn đảm bảo rằng các máy ảo chỉ giao tiếp với nhau. Bạn cần cấu hình loại mạng ảo nào?",
      options: {
        A: "Mạng bên ngoài (External)",
        B: "Chỉ mạng nội bộ (Internal only)",
        C: "Mạng máy ảo riêng tư (Private virtual machine network)",
        D: "Mạng máy ảo công cộng (Public virtual machine network)",
      },
      correct: "C",
    },
    {
      question:
        "Câu 7: Bạn không thể khởi động máy tính Windows Server 2012 R2 của mình, vì vậy bạn quyết định khởi động máy tính vào Chế độ An toàn. Phát biểu nào sau đây về Chế độ An toàn là sai?",
      options: {
        A: "Khi máy tính được khởi động vào Chế độ An toàn, không có quyền truy cập mạng.",
        B: "Chế độ An toàn tải tất cả các trình điều khiển cho phần cứng được cài đặt trên máy tính.",
        C: "Khi bạn chạy Chế độ An toàn, ghi nhật ký khởi động được bật tự động.",
        D: "Khi bạn chạy Chế độ An toàn, độ phân giải màn hình được đặt thành 800×600.",
      },
      correct: "B",
    },
    {
      question:
        "Câu 8: Bạn cần sao lưu dữ liệu hiện có trên một máy tính trước khi bạn cài đặt một ứng dụng mới. Bạn cũng cần đảm bảo rằng bạn có thể khôi phục các tệp người dùng riêng lẻ bị thay thế hoặc bị xóa trong quá trình cài đặt. Bạn nên làm gì?",
      options: {
        A: "Tạo một điểm Khôi phục Hệ thống.",
        B: "Thực hiện sao lưu và khôi phục hệ thống tự động (ASR).",
        C: "Trong tiện ích Sao lưu Windows Server, nhấp vào liên kết Sao lưu một lần.",
        D: "Trong cửa sổ Trung tâm Sao lưu và Khôi phục, nhấp vào nút Sao lưu Máy tính.",
      },
      correct: "C",
    },
    {
      question:
        "Câu 9: Bạn cần hủy kích hoạt tùy chọn UGMC (Universal Group Membership Caching) trên một số bộ điều khiển miền của mình. Bạn sẽ hủy kích hoạt UGMC ở cấp độ nào trong Active Directory?",
      options: {
        A: "Máy chủ (Server)",
        B: "Trang (Site)",
        C: "Miền (Domain)",
        D: "Rừng (Forest)",
      },
      correct: "B",
    },
    {
      question:
        "Câu 10: Điều nào sau đây không cần phải được tạo thủ công khi bạn đang thiết lập một kịch bản sao chép liên quan đến ba miền và ba trang?",
      options: {
        A: "Trang (Sites)",
        B: "Liên kết trang (Site links)",
        C: "Đối tượng kết nối (Connection objects)",
        D: "Mạng con (Subnets)",
      },
      correct: "C",
    },
    {
      question:
        "Câu 11: Dịch vụ nào sau đây của Active Directory chịu trách nhiệm duy trì cấu trúc liên kết sao chép?",
      options: {
        A: "Dịch vụ Sao chép Tệp (File Replication Service)",
        B: "Trình kiểm tra Tính nhất quán Tri thức (Knowledge Consistency Checker)",
        C: "Dịch vụ Tên Internet của Windows (Windows Internet Name Service)",
        D: "Hệ thống Tên Miền (Domain Name System)",
      },
      correct: "B",
    },
    {
      question:
        "Câu 12: Một quản trị viên hệ thống cho một môi trường Active Directory bao gồm ba trang muốn cấu hình các liên kết trang có tính bắc cầu (transitive). Đối tượng Active Directory nào sau đây chịu trách nhiệm đại diện cho một mối quan hệ bắc cầu giữa các trang?",
      options: {
        A: "Các trang bổ sung",
        B: "Các liên kết trang bổ sung",
        C: "Máy chủ đầu cầu (Bridgehead servers)",
        D: "Cầu nối liên kết trang (Site link bridges)",
      },
      correct: "D",
    },
    {
      question:
        "Câu 13: Bạn bật tùy chọn Ghi nhật ký khởi động (Boot Logging) trên menu Tùy chọn Khởi động Nâng cao. Bạn có thể tìm thấy tệp nhật ký được tạo ở đâu?",
      options: {
        A: "Windows\netlog.txt",
        B: "WindowsSystem32\netlog.txt",
        C: "Windows\ntbtlog.txt",
        D: "WindowsSystem32\netboot.log",
      },
      correct: "C",
    },
    {
      question:
        "Câu 14: Chiến lược khôi phục dữ liệu của bạn phải đáp ứng các yêu cầu sau:\nSao lưu tất cả tất cả các tệp và thư mục dữ liệu trong C:Data.\nKhôi phục các tệp và thư mục riêng lẻ trong C:Data.\nĐảm bảo rằng dữ liệu được sao lưu vào và khôi phục từ phương tiện bên ngoài.\nBạn nên làm gì?",
      options: {
        A: "Sử dụng tính năng Phiên bản trước để khôi phục các tệp và thư mục.",
        B: "Sử dụng tính năng Khôi phục Hệ thống để thực hiện các hoạt động sao lưu và khôi phục.",
        C: "Sử dụng tiện ích NTBackup để sao lưu và khôi phục các tệp và thư mục riêng lẻ.",
        D: "Sử dụng Sao lưu Windows Server để sao lưu và khôi phục tệp.",
      },
      correct: "D",
    },
    {
      question:
        "Câu 15: Bạn cần bật ba bộ điều khiển miền của mình làm máy chủ danh mục toàn cục (global catalog servers). Bạn sẽ cấu hình các bộ điều khiển miền làm danh mục toàn cục ở đâu?",
      options: {
        A: "Rừng, cài đặt NTDS",
        B: "Miền, cài đặt NTDS",
        C: "Trang, cài đặt NTDS",
        D: "Máy chủ, cài đặt NTDS",
      },
      correct: "D",
    },
    {
      question:
        "Câu 16: Bạn đã cấu hình môi trường Active Directory của mình với nhiều trang và đã đặt các tài nguyên thích hợp vào mỗi trang. Bây giờ bạn đang cố gắng chọn một giao thức để truyền thông tin sao chép giữa hai trang. Kết nối giữa hai trang có các đặc điểm sau:\nLiên kết thường không khả dụng trong một số thời điểm nhất định trong ngày do nhà cung cấp mạng không đáng tin cậy.\nViệc truyền sao chép phải được thử cho dù liên kết có khả dụng hay không. Nếu liên kết không khả dụng trong quá trình sao chép theo lịch trình, thông tin sẽ tự động được nhận sau khi liên kết khả dụng trở lại.\nLưu lượng sao chép phải có khả năng đi qua một kết nối Internet tiêu chuẩn.\nGiao thức nào sau đây đáp ứng các yêu cầu này?",
      options: {
        A: "IP",
        B: "SMTP",
        C: "RPC",
        D: "DHCP",
      },
      correct: "B",
    },
    {
      question:
        "Câu 17: Bạn làm việc cho một tổ chức có một rừng miền duy nhất. Công ty của bạn có một địa điểm chính và hai địa điểm chi nhánh. Tất cả các địa điểm được cấu hình là các trang Active Directory, và tất cả các trang được kết nối với đối tượng DEFAULTIPSITELINK. Các kết nối của bạn đang chạy chậm hơn so với chính sách công ty cho phép. Bạn muốn giảm độ trễ sao chép giữa tất cả các bộ điều khiển miền trong các trang khác nhau. Bạn nên làm gì?",
      options: {
        A: "Giảm khoảng thời gian Sao chép cho đối tượng DEFAULTIPSITELINK.",
        B: "Giảm khoảng thời gian Sao chép cho trang.",
        C: "Giảm lịch trình Sao chép cho trang.",
        D: "Giảm lịch trình Sao chép cho tất cả các bộ điều khiển miền.",
      },
      correct: "A",
    },
    {
      question:
        "Câu 18: Một quản trị viên hệ thống nghi ngờ rằng có một lỗi trong cấu hình sao chép. Làm thế nào quản trị viên hệ thống có thể tìm kiếm các thông báo lỗi cụ thể liên quan đến sao chép?",
      options: {
        A: "Bằng cách sử dụng công cụ quản trị Trang và Dịch vụ Active Directory.",
        B: "Bằng cách sử dụng công cụ Quản lý Máy tính.",
        C: "Bằng cách vào Trình xem Sự kiện - Nhật ký Hệ thống.",
        D: "Bằng cách vào Trình xem Sự kiện - Nhật ký Dịch vụ Thư mục.",
      },
      correct: "D",
    },
    {
      question:
        "Câu 19: Daniel chịu trách nhiệm quản lý lưu lượng sao chép Active Directory cho một tổ chức cỡ vừa đã triển khai một miền Active Directory duy nhất. Hiện tại, môi trường được cấu hình với hai trang và các cài đặt mặc định để sao chép. Mỗi trang bao gồm 15 bộ điều khiển miền. Gần đây, các quản trị viên mạng đã phàn nàn rằng lưu lượng Active Directory đang sử dụng một lượng lớn băng thông mạng có sẵn giữa hai trang. Bạn muốn giảm lượng lưu lượng mạng giữa các bộ điều khiển miền trong hai trang.\nGiảm thiểu lượng thay đổi đối với cấu trúc liên kết trang hiện tại.\nKhông yêu cầu thay đổi đối với cơ sở hạ tầng mạng vật lý hiện có.\nDaniel quyết định rằng sẽ hiệu quả nhất khi cấu hình các bộ điều khiển miền cụ thể trong mỗi trang sẽ nhận phần lớn lưu lượng sao chép từ trang kia. Giải pháp nào sau đây đáp ứng các yêu cầu?",
      options: {
        A: "Tạo các trang bổ sung chỉ được thiết kế cho lưu lượng sao chép và di chuyển các bộ điều khiển miền hiện có đến các trang này.",
        B: "Tạo nhiều liên kết trang giữa hai trang.",
        C: "Tạo một cầu nối liên kết trang giữa hai trang.",
        D: "Cấu hình một máy chủ tại mỗi trang để hoạt động như một máy chủ đầu cầu ưu tiên.",
      },
      correct: "D",
    },
    {
      question:
        "Câu 20: Christina chịu trách nhiệm quản lý lưu lượng sao chép Active Directory cho một tổ chức cỡ vừa. Hiện tại, môi trường được cấu hình với một trang duy nhất và các cài đặt mặc định để sao chép. Trang này chứa hơn 50 bộ điều khiển miền, và các quản trị viên hệ thống thường xuyên thực hiện các thay đổi đối với cơ sở dữ liệu Active Directory. Gần đây, các quản trị viên mạng đã phàn nàn rằng lưu lượng Active Directory đang tiêu thụ một lượng lớn băng thông mạng giữa các phần của mạng được kết nối bằng các liên kết chậm. Thông thường, lượng lưu lượng sao chép là hợp lý, nhưng gần đây người dùng đã phàn nàn về hiệu suất mạng chậm trong một số giờ nhất định trong ngày.\nChristina đã được yêu cầu giảm bớt vấn đề trong khi đáp ứng các yêu cầu sau:\nCó thể kiểm soát chính xác thời điểm sao chép xảy ra.\nCó thể dựa trên sao chép Active Directory trên cơ sở hạ tầng mạng vật lý.\nThực hiện các thay đổi mà không cần tạo hoặc xóa bất kỳ bộ điều khiển miền nào.\nHai trong số các bước nào sau đây Christina có thể thực hiện để đáp ứng các yêu cầu này?",
      options: {
        A: "1,2",
        B: "1,3",
        C: "1,4",
        D: "1,5",
      },
      correct: "C",
    },
    {
      question:
        "Câu 1: Bạn là quản trị viên mạng của Công ty ABC. Bạn có một tiền tố IPv6 là 2001:DB8:BBCC:0000::/53, và bạn cần thiết lập mạng của mình để lược đồ địa chỉ IPv6 có thể xử lý thêm 1.000 mạng con. Bạn sẽ sử dụng mặt nạ mạng nào?",
      options: {
        A: "/60",
        B: "/61",
        C: "/62",
        D: "/63",
      },
      correct: "D",
    },
    {
      question:
        "Câu 2: Bạn là quản trị viên mạng cho Tập đoàn Stellacon. Stellacon có một máy Windows Server 2012 R2 cần có khả năng giao tiếp với tất cả các máy tính trên mạng nội bộ. Stellacon đã quyết định thêm 15 phân đoạn mới vào mạng IPv6 của mình. Bạn sẽ cấu hình địa chỉ IPv6 như thế nào để máy chủ có thể giao tiếp với tất cả các phân đoạn?",
      options: {
        A: "Cấu hình địa chỉ IPv6 là fd00::2b0:e0ff:dee9:4143/8.",
        B: "Cấu hình địa chỉ IPv6 là fe80::2b0:e0ff:dee9:4143/32.",
        C: "Cấu hình địa chỉ IPv6 là ff80::2b0:e0ff:dee9:4143/64.",
        D: "Cấu hình địa chỉ IPv6 là fe80::2b0:e0ff:dee9:4143/64.",
      },
      correct: "D",
    },
    {
      question:
        "Câu 3: Bạn là quản trị viên mạng cho một tổ chức cỡ vừa đã cài đặt Windows Server 2012 R2 vào mạng. Bạn đang nghĩ đến việc chuyển tất cả các máy sang Windows 8 và IPv6. Bạn quyết định thiết lập một môi trường thử nghiệm với bốn mạng con. Bạn cần thiết lập loại địa chỉ IPv6 nào?",
      options: {
        A: "Địa chỉ toàn cục (Global addresses)",
        B: "Địa chỉ liên kết cục bộ (Link-local addresses)",
        C: "Địa chỉ cục bộ duy nhất (Unique local addresses)",
        D: "Địa chỉ trang web cục bộ (Site-local addresses)",
      },
      correct: "C",
    },
    {
      question:
        "Câu 4: Bạn có một mạng định tuyến IP lớn sử dụng địa chỉ 137.25.0.0; nó bao gồm 20 mạng con, với tối đa 300 máy chủ trên mỗi mạng con. Công ty của bạn tiếp tục thực hiện các vụ sáp nhập và mua lại, và quản lý của bạn đã yêu cầu bạn chuẩn bị cho việc tăng lên 50 mạng con, trong đó một số chứa hơn 600 máy chủ. Sử dụng địa chỉ mạng hiện có, mặt nạ mạng con nào sau đây sẽ hoạt động cho yêu cầu do quản lý của bạn đặt ra?",
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
        "Câu 5: Công ty của bạn đang phát triển mạnh mẽ thông qua việc mua lại các công ty khác. Là quản trị viên mạng, bạn cần theo kịp những thay đổi vì chúng ảnh hưởng đến các máy trạm và bạn cần hỗ trợ chúng. Khi bạn bắt đầu, có 15 địa điểm được kết nối qua bộ định tuyến, và bây giờ là 25. Khi các công ty mới được mua lại, chúng được di chuyển sang Windows Server 2012 R2 và được đưa vào cùng một miền như một trang khác. Ban quản lý nói rằng họ sẽ mua lại ít nhất 10 công ty nữa trong hai năm tới. Các kỹ sư cũng đã nói với bạn rằng họ đang thiết kế lại địa chỉ Lớp B của công ty thành một lược đồ địa chỉ IP sẽ hỗ trợ các yêu cầu này và sẽ không bao giờ có nhiều hơn 1.000 thiết bị mạng trên bất kỳ mạng con nào. Mặt nạ mạng con phù hợp để hỗ trợ mạng này khi các thay đổi được hoàn thành là gì?",
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
        "Câu 6: Bạn làm việc cho một công ty in nhỏ có 75 máy trạm. Hầu hết chúng chạy các ứng dụng văn phòng tiêu chuẩn như xử lý văn bản, bảng tính và các chương trình kế toán. Mười lăm máy trạm liên tục xử lý các tệp đồ họa khổng lồ và sau đó gửi các công việc in đến các máy in laser cỡ công nghiệp. Hiệu suất của mạng luôn là một vấn đề, nhưng bạn chưa bao giờ giải quyết nó. Bây giờ bạn đã di chuyển mạng của mình sang Windows 8 và Windows Server 2012 R2 và đã quyết định tận dụng khả năng định tuyến được tích hợp trong Windows Server 2012 R2. Bạn chọn máy chủ thích hợp và đặt hai NIC vào máy, nhưng bạn nhận ra rằng bạn chỉ có một địa chỉ mạng, 201.102.34.0, mà bạn đã nhận được nhiều năm trước. Bạn nên chia mạng con địa chỉ này như thế nào để phân đoạn những kẻ ngốn băng thông khỏi phần còn lại của mạng trong khi vẫn cho mọi người quyền truy cập vào toàn bộ mạng?",
      options: {
        A: "255.255.255.192",
        B: "255.255.255.224",
        C: "255.255.255.252",
        D: "255.255.255.240",
      },
      correct: "A",
    },
    {
      question:
        "Câu 7: Mặt nạ mạng con nào sau đây được biểu thị bằng CIDR là /27?",
      options: {
        A: "255.255.255.254",
        B: "255.255.255.248",
        C: "255.255.255.224",
        D: "255.255.255.240",
      },
      correct: "C",
    },
    {
      question:
        "Câu 8: Bạn là quản trị viên cho một mạng Windows Server 2012 R2 sử dụng DHCP. Bạn nhận thấy rằng cơ sở dữ liệu DHCP của bạn đang trở nên quá lớn và bạn muốn giảm kích thước của cơ sở dữ liệu. Bạn nên làm gì?",
      options: {
        A: "Từ thư mục chứa cơ sở dữ liệu DHCP, chạy jetpack.exe dhcp.mdb temp.mdb.",
        B: "Từ thư mục chứa cơ sở dữ liệu DHCP, chạy shrinkpack.exe dhcp.mdb temp.mdb.",
        C: "Từ thư mục chứa cơ sở dữ liệu DHCP, chạy jetshrink.exe dhcp.mdb temp.mdb.",
        D: "Từ thư mục chứa cơ sở dữ liệu DHCP, chạy shrinkjet.exe dhcp.mdb temp.mdb.",
      },
      correct: "A",
    },
    {
      question:
        "Câu 9: Bạn muốn xuất bản một máy in lên Active Directory. Bạn sẽ nhấp vào đâu để hoàn thành nhiệm vụ này?",
      options: {
        A: "Tab Sharing (Chia sẻ)",
        B: "Tab Advanced (Nâng cao)",
        C: "Tab Device Settings (Cài đặt thiết bị)",
        D: "Nút Printing Preferences (Tùy chọn In)",
      },
      correct: "A",
    },
    {
      question:
        "Câu 10: Bạn là quản trị viên mạng cho một nhà phân phối hạt cà phê cỡ trung. Mạng của công ty bạn có bốn máy chủ Windows 2012, và tất cả các máy khách đều đang chạy Windows 8 hoặc Windows 7. Hầu hết người dùng cuối của bạn sử dụng máy tính xách tay để làm việc, và nhiều người trong số họ làm việc xa văn phòng. Bạn nên cấu hình gì để giúp họ làm việc trên các tài liệu khi ở xa văn phòng?",
      options: {
        A: "Truy cập tệp trực tuyến (Online file access)",
        B: "Truy cập tệp ngoại tuyến (Offline file access)",
        C: "Quyền chia sẻ (Share permissions)",
        D: "Quyền NTFS",
      },
      correct: "B",
    },
    {
      question:
        "Câu 11: Bạn là quản trị viên cho một tổ chức lớn sử dụng Windows Server 2012 R2. Người quản lý của bạn đã yêu cầu bạn giúp bảo vệ các thư mục của ông ấy trên máy Windows 7 NTFS của ông ấy. Người quản lý của bạn muốn đảm bảo rằng ông ấy là người duy nhất có thể mở các tệp của mình. Làm thế nào để bạn bảo vệ các tệp của bạn?",
      options: {
        A: "Sử dụng EFS.",
        B: "Sử dụng CDMA.",
        C: "Sử dụng Bảo mật FAT32.",
        D: "Sử dụng lệnh Convert:FAT32/Encrypt.",
      },
      correct: "A",
    },
    {
      question:
        "Câu 12: Bạn là quản trị viên mạng của mình, bao gồm hai hệ thống Windows Server 2012 R2. Một trong các máy chủ là bộ điều khiển miền, và máy chủ còn lại là máy chủ tệp để lưu trữ dữ liệu. Ổ cứng của máy chủ tệp đang bắt đầu đầy. Bạn không có khả năng cài đặt một ổ cứng khác, vì vậy bạn quyết định giới hạn dung lượng mà mọi người có được trên ổ cứng. Bạn cần triển khai gì để giải quyết vấn đề của mình?",
      options: {
        A: "Khoảng cách đĩa (Disk spacing)",
        B: "Hạn ngạch đĩa (Disk quotas)",
        C: "Làm cứng đĩa (Disk hardening)",
        D: "Giới hạn đĩa (Disk limitations)",
      },
      correct: "B",
    },
    {
      question:
        "Câu 13: Bạn là quản trị viên cho một công ty truyền thông lớn. Công ty của bạn sử dụng Windows Server 2012 R2, và các tệp của người dùng của bạn được mã hóa bằng EFS. Bạn sẽ sử dụng lệnh dòng lệnh nào để thay đổi hoặc sửa đổi các tệp EFS?",
      options: {
        A: "Convert",
        B: "Cipher",
        C: "Gopher",
        D: "Encrypt",
      },
      correct: "B",
    },
    {
      question:
        "Câu 14: Bạn là quản trị viên cho một tổ chức lớn. Bạn có nhiều hệ thống Windows Server 2012 R2, tất cả đều chứa các tệp cần được chia sẻ cho tất cả người dùng. Các tệp và thư mục liên tục di chuyển giữa các máy chủ, và người dùng gặp khó khăn trong việc tìm kiếm các tệp họ cần. Bạn có thể triển khai gì để giúp người dùng của mình?",
      options: {
        A: "Hệ thống Tệp Mã hóa (Encrypting File System - EFS)",
        B: "Hệ thống Tệp Phân tán (Distributed File System - DFS)",
        C: "Hệ thống Tệp Chia sẻ (Shared File System - SFS)",
        D: "Hệ thống Tệp được Xuất bản (Published File System - PFS)",
      },
      correct: "B",
    },
    {
      question: "Câu 15: Cổng TCP mặc định cho iSCSI là gì?",
      options: {
        A: "3260",
        B: "1433",
        C: "21",
        D: "3389",
      },
      correct: "A",
    },
    {
      question:
        "Câu 16: Bạn tạo một GPO và liên kết nó với OU Kỹ thuật (Engineering OU). Bạn muốn giám sát những người dùng trong OU Kỹ thuật kết nối với máy chủ tệp. Bạn bật loại kiểm toán nào?",
      options: {
        A: "Kiểm toán truy cập đối tượng (Audit object access)",
        B: "Kiểm toán sự kiện hệ thống (Audit system events)",
        C: "Kiểm toán sự kiện đăng nhập (Audit logon events)",
        D: "Kiểm toán theo dõi tiến trình (Audit process tracking)",
      },
      correct: "A",
    },
    {
      question:
        "Câu 17: Lệnh nào sẽ được sử dụng để đăng ký thủ công một trình khởi tạo iSCSI (iSCSI initiator) vào một máy chủ iSNS?",
      options: {
        A: "iscsicli refreshisnsserver server_name",
        B: "iscsicli listisnsservers server_name",
        C: "iscsicli removeisnsserver server_name",
        D: "iscsicli addisnsserver server_name",
      },
      correct: "D",
    },
    {
      question:
        "Câu 18: Bạn yêu cầu một trong những kỹ thuật viên của mình lấy địa chỉ IPv6 của một máy Windows Server 2012 R2 mới, và cô ấy đưa cho bạn một ghi chú có FE80::0203:FFFF:FE11:2CD trên đó. Bạn có thể biết được gì từ địa chỉ này?",
      options: {
        A: "1,2",
        B: "3,4",
        C: "4,5",
        D: "2,4",
      },
      correct: "D",
    },
    {
      question:
        "Câu 19: Công ty mà bạn làm việc có một nhóm quản trị đa cấp được phân chia theo phòng ban và địa điểm. Có bốn địa điểm chính, và bạn thuộc nhóm Đông Bắc. Bạn đã được chỉ định vào nhóm quản trị chịu trách nhiệm tạo và duy trì các chia sẻ mạng cho tệp và máy in trong khu vực của bạn. Nơi làm việc cuối cùng của bạn là một mạng Windows Server 2008 lớn, nơi bạn có nhiều trách nhiệm hơn. Bạn rất hào hứng với cơ hội tìm hiểu thêm về Windows Server 2012 R2. Đối với nhiệm vụ đầu tiên, bạn đã được cung cấp một danh sách các tệp và máy in chia sẻ cần được tạo cho người dùng trong khu vực của bạn. Bạn hỏi cách tạo chúng trong Windows Server 2012 R2, và bạn được cho biết rằng quy trình tạo chia sẻ giống như với Windows Server 2008. Bạn tạo các chia sẻ và sử dụng NET USE để kiểm tra chúng. Mọi thứ có vẻ hoạt động tốt, vì vậy bạn gửi một tin nhắn rằng các chia sẻ đã có sẵn. Ngày hôm sau, bạn bắt đầu nhận được các cuộc gọi từ người dùng nói rằng họ không thể thấy bất kỳ tài nguyên nào bạn đã tạo. Lý do có khả năng nhất cho các cuộc gọi từ người dùng là gì?",
      options: {
        A: "Bạn đã quên bật NetBIOS cho các chia sẻ.",
        B: "Bạn cần xuất bản các chia sẻ trong thư mục.",
        C: "Các chia sẻ sẽ xuất hiện trong khoảng thời gian sao chép bình thường.",
        D: "Lỗi do hệ thống mạng kết nối",
      },
      correct: "B",
    },
    {
      question:
        "Câu 20: Isabel là một quản trị viên hệ thống cho một môi trường Active Directory đang chạy ở chế độ Gốc (Native mode). Gần đây, một số người quản lý đã báo cáo những nghi ngờ về hoạt động của người dùng và đã yêu cầu cô ấy tăng cường bảo mật trong môi trường. Cụ thể, các yêu cầu như sau:\nViệc truy cập một số tệp nhạy cảm phải được ghi lại.\nViệc sửa đổi một số tệp nhạy cảm phải được ghi lại.\nCác quản trị viên hệ thống phải có khả năng cung cấp thông tin về những người dùng đã truy cập các tệp nhạy cảm và thời điểm họ truy cập.\nTất cả các lần thử đăng nhập cho các máy dùng chung cụ thể phải được ghi lại.\nIsabel nên thực hiện các bước nào sau đây để đáp ứng các yêu cầu này?",
      options: {
        A: "1,2,3,4",
        B: "5,6,7,8",
        C: "1,2,7,8",
        D: "2,5,7,8",
      },
      correct: "D",
    },
    {
      question:
        "Câu 21: Bạn là một quản trị viên CNTT quản lý một môi trường chạy nhiều máy chủ Windows Server 2012 R2 từ nhiều địa điểm trang web trên khắp Hoa Kỳ. Các máy Windows Server 2012 R2 của bạn sử dụng bộ nhớ iSCSI. Các quản trị viên khác báo cáo rằng rất khó để định vị các tài nguyên iSCSI có sẵn trên mạng. Bạn cần đảm bảo các quản trị viên khác có thể dễ dàng truy cập tài nguyên iSCSI bằng cách sử dụng một kho lưu trữ tập trung. Bạn nên triển khai tính năng nào?",
      options: {
        A: "Tính năng Nhà cung cấp Lưu trữ Đích iSCSI (iSCSI Target Storage Provider).",
        B: "Tính năng Quản lý Lưu trữ Dựa trên Tiêu chuẩn của Windows (Windows Standards-Based Storage Management).",
        C: "Tính năng vai trò Máy chủ Đích iSCSI (iSCSI Target Server).",
        D: "Tính năng dịch vụ Máy chủ iSNS (iSNS Server service).",
      },
      correct: "D",
    },
    {
      question:
        "Câu 22: Công ty của bạn có trụ sở chính tại Colorado Springs và có một địa điểm trang web từ xa ở Tampa. Văn phòng Colorado Spring có một máy chủ tệp tên là FS01. FS01 đã cài đặt dịch vụ vai trò BranchCache cho Tệp Mạng. Văn phòng Tampa của bạn có một máy chủ tệp tên là FS02. FS02 đã được cấu hình làm máy chủ bộ đệm ẩn được lưu trữ BranchCache. Bạn cần tải trước dữ liệu từ các chia sẻ tệp trên FS01 vào bộ đệm ẩn trên FS02. Bạn đã tạo các hàm băm cho các chia sẻ tệp trên FS01. Bạn nên chạy cmdlet nào tiếp theo?",
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
        "Câu 23: Bạn có một máy chủ tệp Windows Server 2012 R2 tên là FS01. FS01 đã cài đặt dịch vụ vai trò Trình quản lý Tài nguyên Máy chủ Tệp. Bạn cố gắng xóa một thuộc tính phân loại, và bạn nhận được thông báo lỗi “Thuộc tính phân loại đang được sử dụng và không thể xóa được.” Bạn cần xóa thuộc tính phân loại Chứa Thông tin Cá nhân. Bạn nên làm gì?",
      options: {
        A: "Xóa giá trị thuộc tính phân loại Chứa Thông tin Cá nhân cho tất cả các tệp.",
        B: "Xóa quy tắc phân loại được gán thuộc tính phân loại Chứa Thông tin Cá nhân.",
        C: "Vô hiệu hóa quy tắc phân loại được gán thuộc tính phân loại Chứa Thông tin Cá nhân.",
        D: "Đặt các tệp có giá trị thuộc tính phân loại Chứa Thông tin Cá nhân là Có thành Không.",
      },
      correct: "B",
    },
  ],
};
