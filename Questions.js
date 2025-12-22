const quizData = {
  all: [
    {
      question:
        "Câu 1: Bạn cần cài đặt một phiên bản Windows Server 2012 R2 chỉ dành cho việc xác thực đăng nhập, yêu cầu tùy chọn an toàn nhất và chi phí không thành vấn đề. Bạn nên cài đặt cái gì? [cite: 1, 3, 4, 5]",
      options: {
        A: "Windows Server 2012 R2 Datacenter với GUI [cite: 6]",
        B: "Windows Server 2012 R2 Datacenter Server Core [cite: 7]",
        C: "Windows Server 2012 R2 Standard với GUI [cite: 8]",
        D: "Windows Server 2012 R2 Web Server Core [cite: 9]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 2: Một máy Server Core đang chạy cần được chuyển thành phiên bản có GUI. Bạn nên làm gì? [cite: 10, 11]",
      options: {
        A: "Cài đặt lại Server Core. [cite: 13]",
        B: "Cài đặt máy mới. [cite: 14]",
        C: "Chuyển đổi Server Core hiện tại sang phiên bản với GUI. [cite: 15]",
        D: "Khởi động kép (Dual boot). [cite: 16]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 3: Microsoft đề xuất phiên bản nào cho máy chủ web nâng cấp từ bản 2008? [cite: 17, 18]",
      options: {
        A: "Datacenter [cite: 19]",
        B: "Standard [cite: 20]",
        C: "Essentials [cite: 21]",
        D: "Foundation [cite: 22]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 4: Tổ chức muốn ảo hóa toàn bộ phòng máy gồm 25 máy chủ. Bạn nên dùng phiên bản nào? [cite: 27, 28]",
      options: {
        A: "Datacenter [cite: 30]",
        B: "Standard [cite: 31]",
        C: "Essentials [cite: 32]",
        D: "Foundation [cite: 33]",
      },
      correct: "A",
    },
    {
      question:
        "Câu 5: Công ty có 13 người dùng, không có kế hoạch mở rộng. Phiên bản nào phù hợp nhất? [cite: 37, 38]",
      options: {
        A: "Datacenter [cite: 40]",
        B: "Standard [cite: 41]",
        C: "Essentials [cite: 42]",
        D: "Foundation [cite: 43]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 6: Công ty có 20 người dùng, không mở rộng. Phiên bản đề xuất là gì? [cite: 44, 45, 46]",
      options: {
        A: "Datacenter [cite: 47]",
        B: "Standard [cite: 48]",
        C: "Essentials [cite: 49]",
        D: "Foundation [cite: 50]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 7: Lợi ích của Windows Server Core là gì? (1.Giảm quản lý, 2.Bảo trì tối thiểu, 3.Dấu chân nhỏ, 4.Bảo mật cao) [cite: 55, 56, 57, 58, 59]",
      options: {
        A: "1,2,3 [cite: 60]",
        B: "1 [cite: 60]",
        C: "1,2 [cite: 60]",
        D: "1,2,3,4 [cite: 60]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 8: Tính năng nào giúp tiết kiệm dung lượng ổ cứng trên Windows Server 2012 R2? [cite: 61, 62]",
      options: {
        A: "HDSaver.exe [cite: 63]",
        B: "Features On Demand [cite: 64]",
        C: "ADDS [cite: 65]",
        D: "WinRM [cite: 66]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 9: Để xóa Windows Explorer và Internet Explorer (thành phần Shell) khỏi máy chủ, lệnh nào là chính xác? [cite: 71, 72]",
      options: {
        A: "msiexec.exe /uninstall iexplore.exe [cite: 74]",
        B: "msiexec.exe /uninstall explorer.exe [cite: 75]",
        C: "Uninstall-WindowsFeature Server-Gui-Mgmt-Infra -Remove [cite: 76]",
        D: "Uninstall-WindowsFeature Server-Gui-Shell -Remove [cite: 77]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 10: Loại bộ điều khiển miền (DC) nào nên dùng cho khu vực thiếu an ninh vật lý? [cite: 82]",
      options: {
        A: "DC chính [cite: 83]",
        B: "DC dự phòng [cite: 84]",
        C: "DC chỉ đọc (RODC) [cite: 85]",
        D: "DC bị khóa [cite: 86]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 11: Cấp độ chức năng (Functional level) tối thiểu để triển khai RODC là gì? [cite: 87, 88, 89, 90]",
      options: {
        A: "Windows 2000 Mixed [cite: 91]",
        B: "Windows 2008 R2 [cite: 92]",
        C: "Windows 2003 [cite: 93]",
        D: "Windows 2008 [cite: 94]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 12: Một máy tính làm DC có thể tham gia bao nhiêu miền cùng lúc? [cite: 99]",
      options: {
        A: "Không [cite: 100]",
        B: "Một [cite: 101]",
        C: "Hai [cite: 102]",
        D: "Bất kỳ [cite: 103]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 13: Hệ thống tệp nào hỗ trợ bảo mật cấp tệp, dùng không gian hiệu quả và lưu trữ Sysvol? [cite: 104, 105, 106, 107, 108]",
      options: {
        A: "FAT [cite: 110]",
        B: "FAT32 [cite: 111]",
        C: "HPFS [cite: 112]",
        D: "NTFS [cite: 113]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 14: Chuyển đổi từ FAT32 sang NTFS cho phân vùng hệ thống cần thực hiện bước nào? (1.Chạy lệnh CONVERT, 4.Khởi động lại máy) [cite: 117, 118, 119, 122]",
      options: {
        A: "1,2 [cite: 123]",
        B: "1,3 [cite: 123]",
        C: "1,4 [cite: 123]",
        D: "2,3 [cite: 123]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 15: Windows Server 2012 R2 bắt buộc giao thức/dịch vụ nào để hỗ trợ Active Directory? (2.TCP/IP, 5.DNS) [cite: 128, 130, 133]",
      options: {
        A: "1,2 [cite: 134]",
        B: "2,3 [cite: 134]",
        C: "4,5 [cite: 134]",
        D: "2,5 [cite: 134]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 16: Lỗi thăng cấp DC có thể do đâu? (1.Không có phân vùng NTFS cho Sysvol, 3.Cấu hình TCP/IP sai) [cite: 140, 142, 144, 146]",
      options: {
        A: "1,2 [cite: 148]",
        B: "2,3 [cite: 148]",
        C: "3,4 [cite: 148]",
        D: "1,3 [cite: 148]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 17: Cần cài DC Windows 2012 R2 mới vào miền Windows 2008 R2 hiện có, bạn thực hiện hành động nào? (2.adprep /forestprep, 3.adprep /domainprep) [cite: 149, 150, 151, 152, 154, 155]",
      options: {
        A: "1,2 [cite: 158]",
        B: "2,3 [cite: 158]",
        C: "3,4 [cite: 158]",
        D: "4,5 [cite: 158]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 18: Dịch vụ nào hỗ trợ quản lý danh tính liên kết (Federated Identity)? [cite: 168, 170]",
      options: {
        A: "Active Directory Federation Services [cite: 171]",
        B: "Active Directory DNS Services [cite: 172]",
        C: "Active Directory IIS Services [cite: 173]",
        D: "Active Directory IAS Services [cite: 174]",
      },
      correct: "A",
    },
    {
      question:
        "Câu 19: Giải pháp kiểm tra DNS cục bộ cho một tên máy chủ cụ thể thành IP là gì? [cite: 175, 176, 177]",
      options: {
        A: "Thêm máy chủ DNS mới. [cite: 179]",
        B: "Thêm ánh xạ vào tệp HOSTS. [cite: 180]",
        C: "Thêm bản ghi A vào WINS. [cite: 181]",
        D: "Thêm bản ghi MX vào DNS. [cite: 182]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 20: Phân quyền cho người dùng sửa đổi vùng Stellacon.com nhưng không được sửa bản ghi SOA của Stellatest.com trong AD-Integrated DNS? [cite: 183, 184, 185, 186]",
      options: {
        A: "Sửa đổi quyền của vùng Stellacon.com từ Trình quản lý DNS. [cite: 188]",
        B: "Sửa đổi quyền của vùng Stellatest.com. [cite: 189]",
        C: "Chạy Delegation Of Control Wizard trong AD. [cite: 190]",
        D: "Chạy Delegation Of Control Wizard trong DNS. [cite: 191]",
      },
      correct: "A",
    },
    {
      question:
        "Câu 21: Lý do người dùng không thấy tài nguyên chia sẻ dù kết nối NET USE thành công? [cite: 195, 201, 203]",
      options: {
        A: "Quên bật NetBIOS. [cite: 205]",
        B: "Cần buộc sao chép. [cite: 206]",
        C: "Cần xuất bản (Publish) chia sẻ trong Directory. [cite: 207]",
        D: "Đợi thời gian sao chép bình thường. [cite: 208]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 22: Để xuất bản máy in lên Active Directory, bạn nhấp vào tab nào? [cite: 214, 215]",
      options: {
        A: "Tab Sharing (Chia sẻ) [cite: 216]",
        B: "Tab Advanced [cite: 217]",
        C: "Tab Device Settings [cite: 218]",
        D: "Printing Preferences [cite: 219]",
      },
      correct: "A",
    },
    {
      question:
        "Câu 23: Tại sao máy in cục bộ không hiển thị trong AD? (1.Chưa chia sẻ, 3.Khách không có quyền xem) [cite: 224, 225, 227]",
      options: {
        A: "1,2 [cite: 229]",
        B: "1,3 [cite: 229]",
        C: "1,4 [cite: 229]",
        D: "2,3 [cite: 229]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 24: Tính năng giúp làm việc trên tài liệu khi xa văn phòng (ngoại tuyến)? [cite: 230, 231]",
      options: {
        A: "Online file access [cite: 233]",
        B: "Offline file access [cite: 234]",
        C: "Share permissions [cite: 235]",
        D: "Quyền NTFS [cite: 236]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 25: Lợi thế của NTFS so với FAT32 là gì? (1.Bảo mật, 2.Hạn ngạch, 3.Nén, 4.Mã hóa) [cite: 239, 241, 243, 244, 245, 246]",
      options: {
        A: "1 [cite: 247]",
        B: "1,2 [cite: 247]",
        C: "1,2,3 [cite: 247]",
        D: "1,2,3,4 [cite: 247]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 26: Moe thuộc nhóm Sales (Read, Change) và Finance (Read, Read). Moe không thể thay đổi tệp. Cần làm gì để cấp quyền tối thiểu (Modify)? [cite: 249, 251, 252, 253, 254]",
      options: {
        A: "Sales: Full Control [cite: 255]",
        B: "Moe: Full Control (NTFS) [cite: 256]",
        C: "Finance: Modify (NTFS) [cite: 257]",
        D: "Moe: Modify (NTFS) [cite: 258]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 27: Triển khai gì để giới hạn dung lượng lưu trữ của người dùng trên ổ cứng? [cite: 259, 261, 262, 263]",
      options: {
        A: "Phân bổ đĩa [cite: 264]",
        B: "Hạn ngạch đĩa (Disk quotas) [cite: 265]",
        C: "Làm cứng đĩa [cite: 266]",
        D: "Giới hạn đĩa [cite: 267]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 28: Để nhóm Admin có quyền đọc, thay đổi và gán quyền (Full Control), bạn chọn gì? (3.Admin Full Control Share, 5.Admin Full Control NTFS) [cite: 268, 269, 273, 276, 278]",
      options: {
        A: "1,2 [cite: 279]",
        B: "2,3 [cite: 279]",
        C: "3,4 [cite: 279]",
        D: "3,5 [cite: 279]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 29: Ứng dụng quản trị từ xa nào dùng được cho Server Core? (1.WinRM, 3.PowerShell) [cite: 280, 281, 282, 284]",
      options: {
        A: "1,2 [cite: 286]",
        B: "2,3 [cite: 286]",
        C: "1,4 [cite: 286]",
        D: "1,3 [cite: 286]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 30: Máy chủ lưu trữ thư mục chính (Home directory) của người dùng là loại nào? [cite: 288, 289]",
      options: {
        A: "PDC [cite: 290]",
        B: "Web server [cite: 291]",
        C: "Exchange server [cite: 292]",
        D: "File server [cite: 293]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 31: Loại mạng ảo chỉ cho phép máy ảo trên cùng máy chủ vật lý giao tiếp với nhau? [cite: 294, 295]",
      options: {
        A: "Bên ngoài (External) [cite: 296]",
        B: "Chỉ nội bộ (Internal only) [cite: 297]",
        C: "Mạng máy ảo riêng tư (Private) [cite: 298]",
        D: "Mạng công cộng [cite: 299]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 32: Để thay đổi bộ nhớ máy ảo đang bật, bước nào là đúng? [cite: 308, 309]",
      options: {
        A: "Tắt máy ảo, sửa bộ nhớ, khởi động lại. [cite: 310]",
        B: "Sửa ngay khi đang chạy. [cite: 311]",
        C: "Tạm dừng (Pause), sửa, tiếp tục. [cite: 312]",
        D: "Lưu trạng thái (Save State), sửa, tiếp tục. [cite: 313]",
      },
      correct: "A",
    },
    {
      question:
        "Câu 33: Loại đĩa ảo giúp tiết kiệm dung lượng, chỉ chiếm chỗ khi cần thiết? [cite: 314, 315]",
      options: {
        A: "Đĩa mở rộng động (Dynamically expanding) [cite: 316]",
        B: "Đĩa kích thước cố định [cite: 317]",
        C: "Đĩa khác biệt (Differencing) [cite: 318]",
        D: "Đĩa vật lý [cite: 319]",
      },
      correct: "A",
    },
    {
      question: "Câu 34: Thêm đĩa vật lý vào máy ảo ở đâu? [cite: 320]",
      options: {
        A: "Virtual Hard Disk Wizard [cite: 321]",
        B: "Edit Virtual Hard Disk Wizard [cite: 322]",
        C: "Cài đặt của máy ảo (Settings) [cite: 323]",
        D: "New Virtual Machine Wizard [cite: 324]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 35: Đâu không phải yêu cầu CPU tối thiểu để chạy Hyper-V? [cite: 325]",
      options: {
        A: "Bộ xử lý x64 [cite: 326]",
        B: "Hỗ trợ DEP phần cứng [cite: 327]",
        C: "Ảo hóa hỗ trợ phần cứng (Intel VT/AMD-V) [cite: 328]",
        D: "CPU ít nhất lõi kép [cite: 329]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 36: Phát biểu đúng về mạng ảo bên ngoài (External virtual network)? [cite: 330]",
      options: {
        A: "Máy ảo chỉ nói chuyện với nhau và host. [cite: 331]",
        B: "Chỉ máy ảo nói chuyện với nhau. [cite: 332]",
        C: "Máy ảo nói chuyện với nhau, host và mạng vật lý bên ngoài. [cite: 333]",
        D: "Máy ảo không thể nói chuyện với nhau. [cite: 334]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 37: Dừng một ứng dụng treo trong Task Manager ở tab nào? [cite: 335, 336]",
      options: {
        A: "Performance [cite: 337]",
        B: "Users [cite: 338]",
        C: "Options [cite: 339]",
        D: "Details [cite: 340]",
      },
      correct: "D",
    },
    {
      question: "Câu 38: Cài đặt vai trò WSUS từ đâu? [cite: 341, 342]",
      options: {
        A: "Add/Remove Programs [cite: 343]",
        B: "Programs [cite: 344]",
        C: "Server Manager [cite: 345]",
        D: "Administrative Tools [cite: 346]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 39: Cài đặt Microsoft Baseline Security Analyzer (MBSA) bằng cách nào? [cite: 347]",
      options: {
        A: "Tải xuống từ web Microsoft. [cite: 348]",
        B: "Cài từ Server Manager. [cite: 349]",
        C: "Add/Remove Programs. [cite: 350]",
        D: "Programs. [cite: 351]",
      },
      correct: "A",
    },
    {
      question:
        "Câu 40: Cấu hình nguồn nhận bản cập nhật trong WSUS ở đâu? [cite: 352, 353]",
      options: {
        A: "Products And Classifications [cite: 354]",
        B: "Update Files and Languages [cite: 355]",
        C: "Update Source And Proxy Server [cite: 356]",
        D: "Synchronization Schedule [cite: 357]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 41: Khắc phục lỗi 'Tài khoản người dùng đã hết hạn' một cách vĩnh viễn? [cite: 358, 359, 360]",
      options: {
        A: "Vô hiệu khóa tài khoản. [cite: 361]",
        B: "Mật khẩu không bao giờ hết hạn. [cite: 362]",
        C: "Đặt 'Account Never Expires' trong thuộc tính người dùng. [cite: 363]",
        D: "Kéo dài tuổi thọ mật khẩu thành 0. [cite: 364]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 42: Lệnh tạo tài khoản người dùng từ dấu nhắc lệnh? [cite: 365, 366]",
      options: {
        A: "dsmodify [cite: 367]",
        B: "dscreate [cite: 368]",
        C: "dsnew [cite: 369]",
        D: "dsadd [cite: 370]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 43: Sửa lỗi nhóm phân phối (Distribution) không in được mặc dù có quyền? [cite: 376, 377, 378, 379]",
      options: {
        A: "Đổi thành nhóm bảo mật (Security group). [cite: 380]",
        B: "Thêm vào Administrators. [cite: 381]",
        C: "Thêm vào Printer Operators. [cite: 382]",
        D: "Đổi thành nhóm cục bộ. [cite: 383]",
      },
      correct: "A",
    },
    {
      question:
        "Câu 44: Quản trị viên cấp dưới không sửa được đối tượng trong OU con sau khi bạn sửa quyền OU cha. Đặc điểm nào gây ra? [cite: 384, 385, 386, 387, 388]",
      options: {
        A: "Kế thừa (Inheritance) [cite: 389]",
        B: "Chính sách Nhóm (GPO) [cite: 390]",
        C: "Ủy quyền (Delegation) [cite: 391]",
        D: "Thuộc tính đối tượng [cite: 392]",
      },
      correct: "A",
    },
    {
      question:
        "Câu 45: Cách tốt nhất để cấp quyền đổi mật khẩu cho một OU cụ thể mà không cấp quyền sửa đối tượng khác? [cite: 393, 394, 395, 396, 397, 398]",
      options: {
        A: "Cấp toàn quyền DC. [cite: 399]",
        B: "Di chuyển vào OU đó. [cite: 400]",
        C: "Di chuyển vào OU cha. [cite: 401]",
        D: "Dùng Delegation of Control Wizard trên OU đó. [cite: 402]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 46: Phiên bản Windows Server 2012 R2 nào hỗ trợ Hyper-V? (2.Standard, 4.Datacenter) [cite: 403, 405, 407]",
      options: {
        A: "1,2 [cite: 408]",
        B: "1,3 [cite: 408]",
        C: "1,4 [cite: 408]",
        D: "2,4 [cite: 408]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 47: Lệnh cài Hyper-V trên Server Core Windows 2008? [cite: 415]",
      options: {
        A: "start /w ocsetup Hyper-V [cite: 416]",
        B: "start /w ocsetup microsoft-hyper-v [cite: 417]",
        C: "start /w ocsetup Microsoft-Hyper-V [cite: 418]",
        D: "start /w ocsetup hyper-v [cite: 419]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 48: Hệ điều hành nào cài được Hyper-V Manager MMC? (1.Server 2008 R2, 4.Windows 7/8) [cite: 420, 421, 424]",
      options: {
        A: "1,2 [cite: 425]",
        B: "1,3 [cite: 425]",
        C: "1,4 [cite: 425]",
        D: "2,3 [cite: 425]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 49: Lệnh MBSA quét máy tính dựa trên địa chỉ IP? [cite: 426, 427, 428, 429]",
      options: {
        A: "mdsacli.exe /hf -i [cite: 431]",
        B: "mdsacli.exe /ip [cite: 432]",
        C: "mbsa.exe /hf -ip [cite: 433]",
        D: "mbsa.exe /ip [cite: 434]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 50: Điều nào KHÔNG phải là bước hoàn tất cấu hình WSUS trên máy chủ phụ (SERVERB)? [cite: 435, 437, 439, 440]",
      options: {
        A: "Phê duyệt cập nhật hiện tại. [cite: 441]",
        B: "Đồng bộ tự động từ SERVERA. [cite: 442]",
        C: "Lấy cập nhật từ bất kỳ nguồn nào SERVERA đặt. [cite: 443]",
        D: "Đặt lịch nhận bản cập nhật hàng ngày. [cite: 444]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 51: Người dùng nghỉ 16 tuần, quay lại không đăng nhập được mặc dù tài khoản đã kích hoạt. Bạn làm gì? [cite: 445, 446, 447, 448]",
      options: {
        A: "Reset tài khoản máy tính trong AD, gỡ và gia nhập lại miền. [cite: 450, 451]",
        B: "Lệnh ADadd. [cite: 452]",
        C: "Snap-in Domain Computers. [cite: 453]",
        D: "Tạo lại người dùng. [cite: 454]",
      },
      correct: "A",
    },
    {
      question:
        "Câu 52: Cách hạn chế hiển thị đối tượng trong OU lớn mà không thay đổi quyền? [cite: 455, 456, 457, 458, 461, 462]",
      options: {
        A: "Dùng tùy chọn Lọc (Filter) trong ADUC. [cite: 463]",
        B: "Delegation of Control. [cite: 464]",
        C: "Quy ước đặt tên. [cite: 465]",
        D: "AD Domains and Trusts. [cite: 466]",
      },
      correct: "A",
    },
    {
      question:
        "Câu 53: Cấp quyền cho quản trị viên cấp dưới thực hiện sao lưu toàn bộ máy chủ? [cite: 467, 468, 469, 470, 471]",
      options: {
        A: "Nhóm cục bộ. [cite: 472]",
        B: "Tác vụ trong Authorization Manager. [cite: 473]",
        C: "Gán quyền người dùng (User Rights) qua Group Policy. [cite: 474]",
        D: "Gán vai trò. [cite: 475]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 54: Công cụ giúp khôi phục cơ sở dữ liệu Active Directory sau lỗi ổ cứng? [cite: 476, 477, 478, 480, 481]",
      options: {
        A: "Event Viewer [cite: 482]",
        B: "Performance Monitor [cite: 483]",
        C: "Ổ cứng khác. [cite: 484]",
        D: "Bản sao lưu Trạng thái hệ thống (System State) hợp lệ. [cite: 485]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 55: Công cụ ghi lại và kiểm tra gói mạng theo thời gian thực để tìm máy làm chậm mạng? [cite: 486, 488, 489, 490, 491, 492, 493]",
      options: {
        A: "Task Manager [cite: 494]",
        B: "Performance Monitor [cite: 500]",
        C: "Event Viewer [cite: 496]",
        D: "Network Monitor [cite: 497]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 56: Tác vụ phổ biến trong Delegation of Control Wizard? (1.Reset mật khẩu, 2.Quản lý GPO link, 3.Sửa thành viên nhóm, 4.Tạo/xóa nhóm) [cite: 498, 500, 501, 502, 503, 504, 505]",
      options: {
        A: "1 [cite: 506]",
        B: "1,2 [cite: 506]",
        C: "1,2,3 [cite: 506]",
        D: "1,2,3,4 [cite: 506]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 57: Mục đăng ký (registry) để máy khách Windows 8 chỉ định dùng WSUSServer? [cite: 508, 509, 510, 513, 514]",
      options: {
        A: "UseWUServer = 0. [cite: 515]",
        B: "UseWUServer = 1 và WUServer = http://WSUSServer. [cite: 517, 518]",
        C: "Chỉ WUServer. [cite: 519]",
        D: "UseWUServer = 0. [cite: 522]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 58: Thiết lập để máy nhân viên bán hàng (thường tắt buổi tối) nhận bản cập nhật hàng ngày ít tương tác nhất? (2.Tự động tải và cài đặt theo lịch, 4.Giữ máy tính cập nhật, 6.Đặt 12 giờ trưa) [cite: 523, 525, 526, 527, 528, 529, 531, 533, 535]",
      options: {
        A: "1,2,3 [cite: 536]",
        B: "4,5,6 [cite: 536]",
        C: "2,3,4 [cite: 536]",
        D: "2,4,6 [cite: 536]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 59: Chỉ muốn OU Tài chính tự động cài Office 2013, bước tiếp theo sau khi tạo GPO? [cite: 537, 538, 539, 540]",
      options: {
        A: "Gán cho User, liên kết OU Tài chính. [cite: 541, 542]",
        B: "Gán cho User, liên kết miền. [cite: 543, 544]",
        C: "Gán cho Máy tính, liên kết miền. [cite: 545]",
        D: "Gán cho Máy tính, liên kết OU Tài chính. [cite: 546, 547]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 60: Công cụ tìm ra GPO nào đang thay đổi hình nền máy chủ sở hữu? [cite: 548, 549, 550, 551]",
      options: {
        A: "RSoP cho tất cả máy. [cite: 552]",
        B: "RSoP cho tài khoản máy chủ sở hữu. [cite: 553]",
        C: "RSoP cho tài khoản người dùng chủ sở hữu. [cite: 554]",
        D: "RSoP cho tất cả miền. [cite: 555]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 61: Đảm bảo GPO của trang (Site) áp dụng cho OU mà không bị GPO của OU ghi đè? [cite: 556, 557, 558, 559, 560]",
      options: {
        A: "Vô hiệu Chặn kế thừa. [cite: 561]",
        B: "Đặt cài đặt Thi hành (Enforce). [cite: 562]",
        C: "Ưu tiên mức 1. [cite: 563]",
        D: "Kế thừa chính sách cha. [cite: 564]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 62: Đảm bảo máy khách ở chi nhánh (liên kết chậm) nhận GPO gán phần mềm đúng cách? [cite: 565, 567, 568, 569]",
      options: {
        A: "Vô hiệu Phát hiện liên kết chậm (Slow Link Detection) trong GPO. [cite: 570]",
        B: "Liên kết OU chi nhánh. [cite: 571]",
        C: "Xuất bản ứng dụng. [cite: 572]",
        D: "GPResult/force. [cite: 573]",
      },
      correct: "A",
    },
    {
      question:
        "Câu 63: Quyền để ngăn GPO áp dụng cho một nhóm bảo mật cụ thể? [cite: 574]",
      options: {
        A: "Deny Write [cite: 575]",
        B: "Allow Write [cite: 576]",
        C: "Enable Apply Group Policy [cite: 577]",
        D: "Từ chối Áp dụng Chính sách Nhóm (Deny Apply Group Policy) [cite: 578]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 64: GPO gán ở cấp nào sẽ ghi đè cấp Miền? (Theo thứ tự LSDOU) [cite: 579, 583]",
      options: {
        A: "OU [cite: 580]",
        B: "Site [cite: 581]",
        C: "Domain [cite: 582]",
        D: "Cả OU và Site [cite: 583]",
      },
      correct: "A",
    },
    {
      question:
        "Câu 65: Tùy chọn để chỉ các GPO tại cấp OU có tác dụng, bỏ qua GPO cấp trên? [cite: 584, 585]",
      options: {
        A: "Enforced [cite: 586]",
        B: "Chặn kế thừa chính sách (Block Policy Inheritance) [cite: 587]",
        C: "Vô hiệu hóa [cite: 588]",
        D: "Deny [cite: 589]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 66: Cách tốt nhất để khôi phục cấu hình/dữ liệu AD nếu đĩa cứng hỏng? [cite: 590, 591]",
      options: {
        A: "Sao lưu PC hoàn chỉnh. [cite: 592]",
        B: "Sao lưu danh mục tệp. [cite: 593]",
        C: "Sao lưu phục hồi hệ thống tự động (ASR). [cite: 594]",
        D: "Điểm khôi phục hệ thống. [cite: 595]",
      },
      correct: "A",
    },
    {
      question:
        "Câu 67: Công cụ tạo nhiều chính sách mật khẩu (Fine-Grained Password Policies) trong miền? [cite: 596, 597]",
      options: {
        A: "MMC [cite: 598]",
        B: "Schema Editor [cite: 599]",
        C: "ADSI Edit [cite: 600]",
        D: "Secedit.exe [cite: 601]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 68: Loại nhóm KHÔNG thể sử dụng trong môi trường có cả DC 2008 và 2012 (Chế độ hỗn hợp)? [cite: 602, 603, 604]",
      options: {
        A: "Nhóm bảo mật toàn cục (Universal security groups) [cite: 605]",
        B: "Nhóm toàn cục [cite: 606]",
        C: "Nhóm cục bộ miền [cite: 607]",
        D: "Sử dụng được tất cả. [cite: 608]",
      },
      correct: "A",
    },
    {
      question:
        "Câu 69: Thư mục nào trong ADUC hiển thị người dùng từ bên ngoài rừng được cấp quyền vào miền? [cite: 609, 610]",
      options: {
        A: "Users [cite: 611]",
        B: "Computers [cite: 612]",
        C: "Domain Controllers [cite: 613]",
        D: "Foreign Security Principals [cite: 614]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 70: Lệnh tạo và quản lý các phân vùng dữ liệu ứng dụng AD? [cite: 615, 616]",
      options: {
        A: "DCPromo.exe [cite: 617]",
        B: "NTDSUtil.exe [cite: 618]",
        C: "ADUtil.exe [cite: 619]",
        D: "ADSI.exe [cite: 620]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 71: Quá trình gán quyền đặt GPO cho đối tượng trong OU? [cite: 621]",
      options: {
        A: "Promotion [cite: 622]",
        B: "Inheritance [cite: 623]",
        C: "Ủy quyền (Delegation) [cite: 624]",
        D: "Filtering [cite: 625]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 72: Khi gỡ gói phần mềm khỏi GPO, điều gì xảy ra? [cite: 626]",
      options: {
        A: "Tự động gỡ cài đặt. [cite: 627]",
        B: "Cài đặt không đổi. [cite: 628]",
        C: "Quản trị viên có thể xác định hiệu ứng. [cite: 629]",
        D: "Người dùng xác định. [cite: 630]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 73: Đâu KHÔNG phải tùy chọn nhắm mục tiêu cấp mục (Item-level targeting)? [cite: 631, 632]",
      options: {
        A: "Battery Present [cite: 633]",
        B: "Computer Name [cite: 634]",
        C: "CPU Speed [cite: 635]",
        D: "Nhắm mục tiêu có DVD [cite: 636]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 74: Để kiểm soát ứng dụng dùng registry bằng GPO cho nhiều quản trị viên dùng chung mẫu, giải pháp là gì? (4.Tạo mẫu quản trị, 5.Cung cấp mẫu cho quản trị viên khác) [cite: 641, 642, 643, 644, 645, 646, 650, 651]",
      options: {
        A: "1,2 [cite: 652]",
        B: "3,4 [cite: 652]",
        C: "4,5 [cite: 652]",
        D: "1,3 [cite: 652]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 75: Khi xóa DC giữ vai trò chủ hoạt động rừng, vai trò nào phải chuyển đi? (2.Schema Master, 4.Domain Naming Master) [cite: 653, 654, 655, 657, 659]",
      options: {
        A: "1,2 [cite: 661]",
        B: "2,3 [cite: 661]",
        C: "2,4 [cite: 661]",
        D: "2,5 [cite: 661]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 76: Lệnh ép buộc cập nhật GPO ngay lập tức? [cite: 663, 664]",
      options: {
        A: "GPForce [cite: 665]",
        B: "GPUpdate [cite: 666]",
        C: "GPResult [cite: 667]",
        D: "GPExecute [cite: 668]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 77: Cmdlet PowerShell để ép cập nhật GPO? [cite: 669, 670, 671, 672]",
      options: {
        A: "Invoke-GPUpdate [cite: 673]",
        B: "Invoke-GPForce [cite: 674]",
        C: "Invoke-GPResult [cite: 675]",
        D: "Invoke-GPExecute [cite: 676]",
      },
      correct: "A",
    },
    {
      question:
        "Câu 78: Giải pháp sao lưu/khôi phục tệp riêng lẻ vào phương tiện bên ngoài? [cite: 677, 678, 679, 680, 681, 682]",
      options: {
        A: "Phiên bản trước. [cite: 683]",
        B: "Khôi phục hệ thống. [cite: 684]",
        C: "NTBackup. [cite: 685]",
        D: "Sử dụng Sao lưu Windows Server (Windows Server Backup). [cite: 686]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 79: Chiến lược sao lưu hoàn thành nhanh và dùng ít dung lượng nhất (chỉ tệp thay đổi hàng ngày)? (1.Normal hàng tuần, 5.Incremental hàng ngày) [cite: 687, 689, 690, 691, 693, 695, 696, 698, 702]",
      options: {
        A: "1,2 [cite: 703]",
        B: "1,3 [cite: 703]",
        C: "1,4 [cite: 703]",
        D: "1,5 [cite: 703]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 80: Các cấp độ có thể gán GPO? (1.Site, 2.Domain, 3.OU, 4.Local) [cite: 705, 706, 707, 708, 709, 710, 711]",
      options: {
        A: "1 [cite: 712]",
        B: "1,2 [cite: 713]",
        C: "1,2,3 [cite: 714]",
        D: "1,2,3,4 [cite: 715]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 81: Chính sách khóa tài khoản: sai 3 lần trong 5 phút thì khóa 30 phút. Ba cài đặt nào? (2.Thời gian khóa 30p, 3.Ngưỡng 3 lần, 5.Đặt lại bộ đếm sau 5p) [cite: 717, 718, 720, 721, 723]",
      options: {
        A: "1,2,3 [cite: 725]",
        B: "4,5,6 [cite: 725]",
        C: "2,3,4 [cite: 725]",
        D: "2,3,5 [cite: 725]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 82: Loại kiểm toán để giám sát người dùng kết nối máy chủ tệp? [cite: 726, 727, 728]",
      options: {
        A: "Kiểm toán Truy cập Đối tượng (Audit Object Access) [cite: 729]",
        B: "Audit Logon Events [cite: 730]",
        C: "Audit System Events [cite: 731]",
        D: "Audit Process Tracking [cite: 732]",
      },
      correct: "A",
    },
    {
      question: "Câu 83: Cổng TCP mặc định cho iSCSI? [cite: 733]",
      options: {
        A: "3260 ",
        B: "1433 [cite: 735]",
        C: "21 [cite: 736]",
        D: "3389 [cite: 737]",
      },
      correct: "A",
    },
    {
      question:
        "Câu 84: Lệnh đăng ký trình khởi tạo iSCSI vào máy chủ iSNS? [cite: 738]",
      options: {
        A: "iscsicli refreshisnsserver [cite: 739]",
        B: "iscsicli listisnsservers [cite: 740]",
        C: "iscsicli removeisnsserver [cite: 741]",
        D: "iscsicli addisnsserver server_name [cite: 742]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 85: Tính năng giúp quản trị viên dễ dàng định vị tài nguyên iSCSI qua kho lưu trữ tập trung? [cite: 743, 745, 746, 747]",
      options: {
        A: "iSCSI Target Storage Provider [cite: 748]",
        B: "Windows Standards-Based Storage Management [cite: 749]",
        C: "iSCSI Target Server [cite: 750]",
        D: "Tính năng dịch vụ Máy chủ iSNS (iSNS Server service) [cite: 751]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 86: Cmdlet để xuất dữ liệu BranchCache (tải trước) sang văn phòng chi nhánh? [cite: 752, 755, 757, 758]",
      options: {
        A: "Export-BCCachePackage [cite: 759]",
        B: "Publish-BCFileContent [cite: 760]",
        C: "Set-BCCache [cite: 761]",
        D: "Add-BCDataCacheExtension [cite: 762]",
      },
      correct: "A",
    },
    {
      question:
        "Câu 87: Cách để xóa được thuộc tính phân loại đang bị báo lỗi 'đang sử dụng'? [cite: 763, 765, 766]",
      options: {
        A: "Xóa giá trị thuộc tính. [cite: 767]",
        B: "Xóa quy tắc phân loại được gán thuộc tính đó. [cite: 768]",
        C: "Vô hiệu hóa quy tắc. [cite: 769]",
        D: "Đổi Có thành Không. [cite: 770]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 88: Bước để kiểm toán thay đổi đối tượng OU và cấp quyền Audit xem/sửa bảo mật? (2.Bật ADUC audit, 5.Chỉ định audit cho OU, 6.Delegation of Control cho người dùng Audit) [cite: 771, 773, 774, 775, 776, 778, 781, 782]",
      options: {
        A: "1,2,3 [cite: 783]",
        B: "4,5,6 [cite: 783]",
        C: "2,3,4 [cite: 783]",
        D: "2,5,6 [cite: 783]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 89: Đáp ứng: ghi truy cập/sửa tệp, biết ai và khi nào, ghi đăng nhập máy dùng chung? (2.Bật ADUC audit, 5.Xem Event Viewer, 7.Audit cho tệp trên NTFS, 8.Audit đăng nhập tài khoản máy) [cite: 784, 787, 788, 789, 790, 791, 793, 796, 798, 799]",
      options: {
        A: "1,5,7,8 [cite: 800]",
        B: "3,5,7,8 [cite: 800]",
        C: "4,5,7,8 [cite: 800]",
        D: "2,5,7,8 [cite: 800]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 90: Phiên bản nào KHÔNG thể cấu hình Failover Cluster? [cite: 801, 802]",
      options: {
        A: "Hyper-V edition [cite: 803]",
        B: "Standard edition [cite: 804]",
        C: "Windows Server 2012 R2 Foundation edition [cite: 805]",
        D: "Datacenter edition [cite: 806]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 91: Phiên bản nào KHÔNG thể cấu hình NLB Cluster? [cite: 807, 808]",
      options: {
        A: "Windows Server 2012 R2 Essentials edition [cite: 809]",
        B: "Standard edition [cite: 810]",
        C: "Hyper-V edition [cite: 811]",
        D: "Datacenter edition [cite: 812]",
      },
      correct: "A",
    },
    {
      question:
        "Câu 92: Số nút (node) tối đa trong Failover Cluster Windows 2012? [cite: 813]",
      options: {
        A: "2 [cite: 814]",
        B: "4 [cite: 814]",
        C: "16 [cite: 814]",
        D: "64 [cite: 814]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 93: Hành động bảo trì nút NLB mà không ngắt kết nối hiện tại? [cite: 815]",
      options: {
        A: "Trục xuất [cite: 816]",
        B: "Dừng xả (Drainstop) [cite: 817]",
        C: "Tạm dừng [cite: 818]",
        D: "Dừng [cite: 819]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 94: Số nút tối đa trong NLB Cluster Windows 2012 R2? [cite: 820]",
      options: {
        A: "4 [cite: 821]",
        B: "8 [cite: 821]",
        C: "16 [cite: 821]",
        D: "32 [cite: 821]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 95: Số card mạng tối thiểu cho nút NLB dùng unicast? [cite: 822]",
      options: {
        A: "1 [cite: 823]",
        B: "2 [cite: 823]",
        C: "3 [cite: 823]",
        D: "6 [cite: 823]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 96: Mô hình Node And File Share Majority (4 nút) có thể mất bao nhiêu phiếu trước khi mất Quorum? [cite: 824]",
      options: {
        A: "1 [cite: 825]",
        B: "2 [cite: 825]",
        C: "3 [cite: 825]",
        D: "4 [cite: 825]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 97: Mô hình Node Majority (3 nút) có thể hỏng bao nhiêu nút trước khi mất Quorum? [cite: 826]",
      options: {
        A: "0 [cite: 827]",
        B: "1 [cite: 827]",
        C: "2 [cite: 827]",
        D: "3 [cite: 827]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 98: Giảm lưu lượng mạng do thăm dò CRL (Certificate Revocation List)? [cite: 828, 829]",
      options: {
        A: "Triển khai vai trò Web Enrollment. [cite: 830]",
        B: "Triển khai một trình phản hồi trực tuyến (Online Responder). [cite: 831]",
        C: "CA cấp phát trực tuyến. [cite: 832]",
        D: "Xuất bản nhiều CRL hơn. [cite: 833]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 99: Kiểm toán các sửa đổi cấu hình vai trò Certification Authority (CA)? [cite: 834, 835]",
      options: {
        A: "Bật kiểm toán truy cập đối tượng (Object Access). [cite: 838, 841]",
        B: "Bật ghi nhật ký. [cite: 837, 841]",
        C: "Kiểm toán đặc quyền. [cite: 839, 841]",
        D: "Kiểm toán tiến trình. [cite: 840, 841]",
      },
      correct: "A",
    },
    {
      question:
        "Câu 100: Tính năng Workplace Join mới hỗ trợ điều gì? [cite: 842]",
      options: {
        A: "Liên kết iPhone vào mạng nội bộ. [cite: 843]",
        B: "Máy khách Win 8 xử lý claim-based trust. [cite: 844]",
        C: "Tự động tin cậy với miền chủ. [cite: 845]",
        D: "Tất cả các tính năng đều đúng. [cite: 846]",
      },
      correct: "A",
    },
    {
      question:
        "Câu 101: Đảm bảo cụm AD FS 4 máy tiếp tục hoạt động nếu 1 máy lỗi và tất cả đều tích cực thực hiện chức năng? [cite: 847, 848, 849, 850]",
      options: {
        A: "Windows Failover Clustering [cite: 851]",
        B: "Windows Identity Foundation 3.5 [cite: 852]",
        C: "Network Load Balancing (NLB) [cite: 853]",
        D: "Web Proxy Server [cite: 854]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 102: Công nghệ phải triển khai TRƯỚC khi cài 8 máy chủ AD FS liên kết? [cite: 855, 856, 857, 858]",
      options: {
        A: "Network Load Balancing (NLB) [cite: 859]",
        B: "Microsoft Forefront Identity Manager [cite: 860]",
        C: "Windows Internal Database [cite: 861]",
        D: "SQL Server 2012 R2 [cite: 862]",
      },
      correct: "A",
    },
    {
      question:
        "Câu 103: Để tự động đăng ký chứng chỉ cho AD FS, thêm chứng chỉ nào vào GPO? [cite: 863, 864, 865]",
      options: {
        A: "CA của Forest [cite: 866]",
        B: "CA bên thứ ba [cite: 867]",
        C: "SSL gán cho AD FS [cite: 868]",
        D: "Chứng chỉ Ký mã thông báo (Token Signing certificate). [cite: 869]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 104: Tối thiểu bao nhiêu cụm gốc (Root Cluster) AD RMS cho rừ̀ng? [cite: 870, 871, 873, 874]",
      options: {
        A: "Một cho doanh nghiệp. [cite: 875]",
        B: "Ít nhất một cho mỗi rừng (Forest). [cite: 876]",
        C: "Một cho mỗi miền. [cite: 877]",
        D: "Một cho mỗi trang AD. [cite: 878]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 105: Cấu hình DHCP đáng tin cậy nhất (vừa chịu lỗi vừa dự phòng)? [cite: 879, 880, 881, 882]",
      options: {
        A: "DHCP split scope [cite: 883]",
        B: "DHCP multicast scope [cite: 884]",
        C: "DHCP Failover [cite: 885]",
        D: "DHCP super scope [cite: 886]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 106: Tùy chọn bảo mật DNS NÂNG CAO nào KHÔNG đúng? [cite: 887, 888, 889, 890]",
      options: {
        A: "DNSSEC [cite: 891]",
        B: "Đăng ký DNS (DNS registration) [cite: 892]",
        C: "DNS cache locking [cite: 893]",
        D: "DNS socket pooling [cite: 894]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 107: Tính năng DNS đảm bảo truy vấn luôn được gửi đến máy chủ DNS GẦN NHẤT? [cite: 895, 896, 897, 898]",
      options: {
        A: "DNS logging [cite: 899]",
        B: "DNS delegated administration [cite: 900]",
        C: "DNS recursion [cite: 901]",
        D: "Sắp xếp theo netmask DNS (DNS netmask ordering) [cite: 902]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 108: Nhóm bảo mật chỉ quản lý DNS mà không quản lý bất kỳ dịch vụ AD nào khác? [cite: 903, 904, 905, 906]",
      options: {
        A: "Domain Admins [cite: 907]",
        B: "Enterprise Admins [cite: 908]",
        C: "Schema Admins [cite: 909]",
        D: "DNSAdmins [cite: 910]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 109: Đảm bảo bản ghi A không bị ghi đè bởi thiết bị cùng tên máy chủ trong quá trình cập nhật động? [cite: 911, 912, 913, 914]",
      options: {
        A: "Configure DNS Registration [cite: 915]",
        B: "Bảo vệ Tên DHCP (DHCP Name Protection) [cite: 916]",
        C: "Configure DHCP High Availability [cite: 917]",
        D: "DHCPv6 Scope [cite: 918]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 110: Nhóm bảo mật IPAM quản lý không gian địa chỉ (IP address blocks, ranges) nhưng không kiểm toán địa chỉ IP? [cite: 919, 920, 921, 922]",
      options: {
        A: "IPAM Administrators [cite: 923]",
        B: "IPAM Users [cite: 924]",
        C: "IPAM ASM Administrators [cite: 925, 928, 930]",
        D: "IPAM MSM Administrators [cite: 926]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 111: Phương pháp IPAM để 1 máy chủ quản lý toàn bộ doanh nghiệp? [cite: 931, 932, 933, 934]",
      options: {
        A: "Cô lập [cite: 935]",
        B: "Tập trung (Centralized) [cite: 936]",
        C: "Lai [cite: 937]",
        D: "Phân tán [cite: 938]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 112: Bước hợp lý TIẾP THEO sau khi cài đặt/cung cấp IPAM trên máy chủ chuyên dụng? [cite: 939, 940, 941, 942]",
      options: {
        A: "Tạo khối IP. [cite: 943]",
        B: "Ủy quyền quản trị. [cite: 944]",
        C: "Cấu hình khám phá máy chủ (Configure server discovery). [cite: 945]",
        D: "Tạo dải IP. [cite: 946]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 113: Cmdlet PowerShell xác minh cài đặt cấu hình cơ sở dữ liệu IPAM hiện tại? [cite: 947, 948, 949, 950]",
      options: {
        A: "Get-IpamDatabase [cite: 951]",
        B: "Get-IpamDatabaseConfiguration (Show-IpamDatabaseConfig) [cite: 952]",
        C: "Show-IpamStatistics [cite: 953]",
        D: "Get-IpamMigrationSettings [cite: 954]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 114: Ứng dụng phù hợp Failover Cluster hơn NLB? (1.SQL Server, 3.Exchange) [cite: 955, 956, 958]",
      options: {
        A: "1,2 [cite: 960]",
        B: "1,3 [cite: 960]",
        C: "1,4 [cite: 960]",
        D: "2,4 [cite: 960]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 115: Ứng dụng phù hợp NLB Cluster hơn Failover? (2.Website, 4.Terminal Services) [cite: 961, 963, 965]",
      options: {
        A: "1,2 [cite: 966]",
        B: "1,3 [cite: 966]",
        C: "1,4 [cite: 966]",
        D: "2,4 [cite: 966]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 116: Cấp chứng chỉ cho người dùng từ xa qua CA đặt tại DMZ? (1.Certificate Enrollment Policy Web Server, 5.Certificate Enrollment Web Service) [cite: 967, 968, 969, 973]",
      options: {
        A: "1,2 [cite: 975]",
        B: "3,4 [cite: 975]",
        C: "5,6 [cite: 975]",
        D: "1,5 [cite: 975]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 117: Trong AD FS JavaCup (Relying Party) và Boston (Claims Provider), phát biểu nào ĐÚNG? (1.Cấu hình relying-party server trên JavaCup, 4.Cấu hình claims provider trust trên JavaCup) [cite: 976, 977, 978, 979, 982]",
      options: {
        A: "1,2 [cite: 983]",
        B: "1,3 [cite: 983]",
        C: "1,4 [cite: 983]",
        D: "2,3 [cite: 983]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 118: Đảm bảo DNS hoạt động (cập nhật/giải quyết) cho cả 2 trang khi đứt link WAN? [cite: 984, 985, 986, 987, 988, 989]",
      options: {
        A: "ServerB làm phụ. [cite: 990]",
        B: "Stub zone. [cite: 991]",
        C: "Cấu hình cả ServerA và ServerB thành vùng Tích hợp Active Directory. [cite: 992]",
        D: "ServerA tích hợp AD, ServerB làm phụ. [cite: 993]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 119: Ngăn các máy ngoài miền tự ý đăng ký vào AD-Integrated DNS? [cite: 994, 995, 996, 997, 998]",
      options: {
        A: "None. [cite: 999]",
        B: "Nonsecure And Secure. [cite: 1000]",
        C: "Domain Users Only. [cite: 1001]",
        D: "Chỉ an toàn (Secure Only). [cite: 1002]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 120: Cho phép chuyển vùng DNS từ Windows 2012 R2 sang máy chủ DNS Unix? [cite: 1003, 1004, 1005, 1006, 1007]",
      options: {
        A: "Bật BIND Secondaries. [cite: 1008]",
        B: "Máy Unix làm stub zone. [cite: 1009]",
        C: "Tích hợp AD. [cite: 1010]",
        D: "Chuyển tiếp yêu cầu. [cite: 1011]",
      },
      correct: "A",
    },
    {
      question:
        "Câu 121: Truy cập và giải quyết tên giữa 2 rừng AD (stellacon.com và abc.com) mà không dùng chuyển vùng DNS? [cite: 1012, 1013, 1014, 1015, 1016]",
      options: {
        A: "Vùng phụ mới. [cite: 1017]",
        B: "Cấu hình chuyển tiếp có điều kiện (Conditional Forwarding) trên abc.com cho stellacon.com. [cite: 1018]",
        C: "Vùng phụ trên stellacon. [cite: 1019]",
        D: "Chuyển tiếp trên stellacon. [cite: 1020]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 122: Hành động xác minh CNTT tuân thủ ghi nhật ký mọi truy vấn DNS đến? [cite: 1021, 1022, 1023]",
      options: {
        A: "Server Auditing. [cite: 1024]",
        B: "Bật ghi nhật ký gỡ lỗi DNS (DNS debug logging). [cite: 1025]",
        C: "Ghi nhật ký database. [cite: 1026]",
        D: "DNS Auditing. [cite: 1027]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 123: Đảm bảo mọi lần chuyển vùng DNS đều được mã hóa (Giữa 2 máy chủ DC)? [cite: 1028, 1029, 1030, 1031, 1032]",
      options: {
        A: "Secure Only trên DNS1. [cite: 1033]",
        B: "Secure Only trên DNS2. [cite: 1034]",
        C: "Secure Only tab Zone Transfers. [cite: 1035]",
        D: "Chuyển cả 2 sang dùng vùng Tích hợp Active Directory. [cite: 1036]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 124: Xử lý số lượng lớn bản ghi DNS cũ không còn hợp lệ? [cite: 1037, 1038, 1039]",
      options: {
        A: "Bật Zone Aging and Scavenging trong thuộc tính vùng. [cite: 1040]",
        B: "Bật Lão hóa vùng và Dọn dẹp (Zone Aging and Scavenging) trong thuộc tính máy chủ. [cite: 1041]",
        C: "Xóa thủ công. [cite: 1042]",
        D: "Dynamic Updates = None. [cite: 1043]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 125: Cung cấp bản sao của vùng Tích hợp AD DNS cho bộ phận tuân thủ? [cite: 1044, 1045, 1046]",
      options: {
        A: "dnscmd /zonecopy [cite: 1047]",
        B: "dnscmd /zoneinfo [cite: 1048]",
        C: "dnscmd /zoneexport [cite: 1049]",
        D: "dnscmd /zonefile [cite: 1050]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 126: Loại máy chủ DNS cài ở chi nhánh (link chậm) để máy khách tìm thấy DC ở trang chính? [cite: 1051, 1052, 1053, 1054]",
      options: {
        A: "Primary zone [cite: 1055]",
        B: "Secondary zone [cite: 1056]",
        C: "AD Integrated zone [cite: 1057]",
        D: "Vùng sơ khai (Stub zone) [cite: 1058]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 127: Cấu hình DHCP Relay Agent để ưu tiên máy chủ cục bộ trước khi chuyển tiếp yêu cầu đi xa? [cite: 1059, 1060]",
      options: {
        A: "Định tuyến tĩnh. [cite: 1061]",
        B: "Điều chỉnh ngưỡng khởi động (Boot threshold). [cite: 1062]",
        C: "Thời gian chuyển tiếp registry. [cite: 1063]",
        D: "Hộp thoại chung. [cite: 1064]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 128: Điều nào KHÔNG phải lợi ích của PPP Multilink? [cite: 1065, 1066]",
      options: {
        A: "Gộp nhiều đường dây. [cite: 1067]",
        B: "Cho phép mã hóa dữ liệu. [cite: 1068]",
        C: "Chi phí thấp. [cite: 1069]",
        D: "Dễ dùng. [cite: 1070]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 129: Giao thức xác thực an toàn cho VPN trên Windows Server 2012 R2 hỗ trợ cả Windows XP? [cite: 1071, 1072, 1073, 1074]",
      options: {
        A: "CHAP [cite: 1075]",
        B: "MS-CHAPv2 [cite: 1076]",
        C: "EAP-TLS [cite: 1077]",
        D: "PAP [cite: 1078]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 130: Khắc phục sự cố giao tiếp VPN giữa các văn phòng chi nhánh? [cite: 1079, 1082, 1083]",
      options: {
        A: "L2TP MPPE [cite: 1084]",
        B: "L2TP không mã hóa [cite: 1085]",
        C: "L2TP IPsec Transport [cite: 1086]",
        D: "L2TP sử dụng IPsec ở chế độ đường hầm (Tunnel mode). [cite: 1087]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 131: Tìm thông tin ghi nhật ký (Accounting) kết nối VPN từ xa? [cite: 1088, 1092, 1093, 1094]",
      options: {
        A: "Performance Monitor [cite: 1095]",
        B: "Active Directory [cite: 1096]",
        C: "Thư mục systemroot\\System32\\LogFiles [cite: 1097]",
        D: "Nhật ký hệ thống [cite: 1098]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 132: Tiêu chí chỉ định chính sách DHCP cho máy khách KHÔNG tuân thủ NAP? [cite: 1099, 1102, 1103, 1104]",
      options: {
        A: "Relay Agent [cite: 1105]",
        B: "Lớp người dùng (User Class) [cite: 1106]",
        C: "Vendor Class [cite: 1107]",
        D: "Client ID [cite: 1108]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 133: Lệnh tạo tệp nhật ký theo dõi sự kiện NAP trên máy khách? [cite: 1109, 1111, 1112]",
      options: {
        A: "Register-ObjectEvent [cite: 1113]",
        B: "Register-EngineEvent [cite: 1114]",
        C: "tracert [cite: 1115]",
        D: "logman [cite: 1116]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 134: Cấu hình RADIUS Group1: ServerB/C ưu tiên, ServerD dự phòng? [cite: 1117, 1119, 1120, 1121]",
      options: {
        A: "Trọng số (Weight) B/C thành 10. [cite: 1122]",
        B: "Trọng số D thành 10. [cite: 1123]",
        C: "Ưu tiên B/C thành 10. [cite: 1124]",
        D: "Thay đổi mức độ ưu tiên (Priority) của ServerD thành 10. [cite: 1125]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 135: Công cụ cấu hình máy chủ RADIUS chấp nhận yêu cầu từ VPN Server? [cite: 1126, 1127, 1128, 1129, 1130]",
      options: {
        A: "Set-RemoteAccessRadius [cite: 1131]",
        B: "CMAK [cite: 1132]",
        C: "NPS [cite: 1133]",
        D: "Routing and Remote Access [cite: 1134]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 136: Đảm bảo chỉ máy Win 7/8 thiết lập được VPN? [cite: 1135]",
      options: {
        A: "RADIUS attribute. [cite: 1137]",
        B: "Điều kiện của một chính sách mạng Máy chủ Chính sách Mạng (NPS). [cite: 1138]",
        C: "Điều kiện Connection Request. [cite: 1139]",
        D: "Ràng buộc (Constraint). [cite: 1140]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 137: Phương pháp NPS hỗ trợ xác thực lẫn nhau dựa trên chứng chỉ cho 802.1X? [cite: 1141, 1144, 1145, 1146]",
      options: {
        A: "PEAP-MS-CHAP v2 [cite: 1147]",
        B: "MS-CHAP v2 [cite: 1148]",
        C: "EAP-TLS [cite: 1149]",
        D: "MS-CHAP [cite: 1150]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 138: Sửa lỗi DNS2 không truy cập được internet do có vùng gốc? [cite: 1152, 1153, 1154, 1156]",
      options: {
        A: "Vùng tích hợp AD mới. [cite: 1157]",
        B: "Xóa vùng .(root) khỏi DNS2 và cấu hình chuyển tiếp có điều kiện. [cite: 1158]",
        C: "Xóa cache.dns. [cite: 1159]",
        D: "Cập nhật root hints. [cite: 1160]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 139: Thành phần cho VPN xác thực và mã hóa giữa 2 tòa nhà chi phí thấp? (1.L2TP, 3.IPsec) [cite: 1165, 1166, 1167, 1168, 1170]",
      options: {
        A: "1,2 [cite: 1173]",
        B: "1,3 [cite: 1173]",
        C: "1,4 [cite: 1173]",
        D: "1,5 [cite: 1173]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 140: Giám sát toàn bộ 4 máy chủ RRAS từ một trạm quản lý? [cite: 1174, 1175, 1177, 1178]",
      options: {
        A: "Server Monitor RRAS. [cite: 1179]",
        B: "Nút Server Status của snap-in RRAS. [cite: 1180]",
        C: "System Monitor. [cite: 1181]",
        D: "MMC. [cite: 1182]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 141: Yêu cầu TRƯỚC khi chạy NAP Configuration Wizard để thực thi VPN? [cite: 1183, 1185, 1186, 1187, 1188]",
      options: {
        A: "HCAP. [cite: 1189]",
        B: "SHV. [cite: 1190]",
        C: "Vai trò Remote Access. [cite: 1191]",
        D: "Một chứng chỉ máy tính. [cite: 1192]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 142: Đảm bảo dữ liệu kế toán (Accounting) vẫn được ghi lại nếu SQL hỏng (giảm thiểu chi phí)? [cite: 1193, 1194, 1197, 1198, 1199]",
      options: {
        A: "Failover Clustering. [cite: 1200]",
        B: "Database mirroring. [cite: 1201]",
        C: "Chạy Trình hướng dẫn Cấu hình Kế toán (Accounting Configuration Wizard). [cite: 1202]",
        D: "Sửa Logging SQL. [cite: 1203]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 143: Nguyên nhân máy khách VPN mặc định không thể kết nối RRAS mặc định? [cite: 1204, 1205, 1209, 1210]",
      options: {
        A: "Win 8 không hỗ trợ. [cite: 1211]",
        B: "RRAS không hỗ trợ VPN. [cite: 1212]",
        C: "Cấu hình RRAS mặc định không hỗ trợ ĐỦ kết nối VPN (Port limit). [cite: 1213]",
        D: "Không hỗ trợ L2TP. [cite: 1214]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 144: Đảm bảo máy vượt qua NAP mới nhận được Gateway hợp lệ (DHCP enforcement)? (2.Bật NAP trên Scope, 4.Tạo chính sách mới) [cite: 1216, 1219, 1221, 1223, 1225]",
      options: {
        A: "1,2 [cite: 1227]",
        B: "2,3 [cite: 1227]",
        C: "2,4 [cite: 1227]",
        D: "2,5 [cite: 1227]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 145: Hai phương pháp xác thực NPS dựa trên chứng chỉ? (2.PEAP-MS-CHAP v2, 4.EAP-TLS) [cite: 1228, 1230, 1231, 1232, 1233, 1235, 1237]",
      options: {
        A: "1,2 [cite: 1239]",
        B: "2,3 [cite: 1239]",
        C: "2,4 [cite: 1239]",
        D: "2,5 [cite: 1239]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 146: Bước để bảo mật liên lạc bí mật giữa 5 chi nhánh (Không thường xuyên, dial-on-demand)? (3.MPPE, 5.MS-CHAPv2) [cite: 1241, 1243, 1244, 1245, 1246, 1247, 1250, 1252]",
      options: {
        A: "3,1 [cite: 1253]",
        B: "3,2 [cite: 1253]",
        C: "3,4 [cite: 1253]",
        D: "3,5 [cite: 1253]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 147: Truyền lương/kế toán an toàn không qua internet, chi phí thấp (dial-on-demand)? (3.Quay số theo yêu cầu, 5.MS-CHAPv2, 7.MPPE) [cite: 1254, 1255, 1256, 1257, 1258, 1261, 1263, 1265]",
      options: {
        A: "1,2,3 [cite: 1267]",
        B: "3,4,5 [cite: 1267]",
        C: "6,7,8 [cite: 1267]",
        D: "3,5,7 [cite: 1267]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 148: Khôi phục máy chủ nhanh nhất sau lỗi trình điều khiển (Máy treo màn hình đăng nhập)? [cite: 1274, 1275, 1276]",
      options: {
        A: "Khôi phục sao lưu. [cite: 1277]",
        B: "Chế độ An toàn (Safe Mode). [cite: 1278]",
        C: "Khởi động với Cấu hình Tốt được biết đến sau cùng (Last Known Good Configuration). [cite: 1279]",
        D: "Bảng điều khiển phục hồi. [cite: 1280]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 149: Lịch trình sao lưu để khôi phục toàn bộ trong 24 giờ qua? [cite: 1281, 1282, 1283]",
      options: {
        A: "Thông thường [cite: 1284]",
        B: "Khác biệt [cite: 1285]",
        C: "Gia tăng [cite: 1286]",
        D: "Hàng ngày (Daily) [cite: 1287]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 150: Tạo điểm khôi phục theo cách thủ công trên Windows? [cite: 1288, 1290, 1291, 1292]",
      options: {
        A: "System Restore [cite: 1293]",
        B: "Tab Bản sao bóng (Shadow Copies) của hộp thoại Thuộc tính Hệ thống. [cite: 1294]",
        C: "System Configuration [cite: 1295]",
        D: "Startup Repair [cite: 1296]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 151: Khôi phục Win 8 sau lỗi trình điều khiển SCSI (Máy không tải được Windows)? [cite: 1297, 1298, 1299, 1300]",
      options: {
        A: "Khôi phục sao lưu. [cite: 1301]",
        B: "Khởi động với Cấu hình Tốt được biết đến sau cùng (Last Known Good). [cite: 1302]",
        C: "Chế độ An toàn. [cite: 1303]",
        D: "Bảng điều khiển phục hồi. [cite: 1304]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 152: Khắc phục tệp hệ thống bị hỏng do vi-rút? [cite: 1305, 1306]",
      options: {
        A: "Khôi phục sao lưu. [cite: 1307]",
        B: "Khôi phục hình ảnh. [cite: 1308]",
        C: "Sử dụng công cụ Sửa chữa Khởi động (Startup Repair). [cite: 1309]",
        D: "Chế độ An toàn. [cite: 1310]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 153: Phát biểu nào về Chế độ An toàn (Safe Mode) là SAI? [cite: 1311, 1312]",
      options: {
        A: "Khi máy tính được khởi động vào Chế độ An toàn, không có quyền truy cập mạng. [cite: 1313]",
        B: "Tải tất cả trình điều khiển phần cứng. [cite: 1314]",
        C: "Tự động bật Boot Logging. [cite: 1315]",
        D: "Độ phân giải 800x600. [cite: 1316]",
      },
      correct: "A",
    },
    {
      question:
        "Câu 154: Sao lưu tệp người dùng riêng lẻ TRƯỚC khi cài ứng dụng mới? [cite: 1317, 1318, 1319]",
      options: {
        A: "Điểm Khôi phục Hệ thống. [cite: 1320]",
        B: "ASR. [cite: 1321]",
        C: "Trong Sao lưu Windows Server, nhấp Sao lưu một lần (Backup Once). [cite: 1322]",
        D: "Nút Sao lưu Máy tính. [cite: 1323]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 155: Hủy kích hoạt UGMC (Universal Group Membership Caching) ở cấp độ nào? [cite: 1324, 1325]",
      options: {
        A: "Máy chủ [cite: 1326]",
        B: "Trang (Site) [cite: 1327]",
        C: "Miền [cite: 1328]",
        D: "Rừng [cite: 1329]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 156: Đối tượng nào KHÔNG cần tạo thủ công khi thiết lập sao chép giữa 3 trang/miền? [cite: 1330]",
      options: {
        A: "Trang [cite: 1331]",
        B: "Liên kết trang [cite: 1332]",
        C: "Đối tượng kết nối (Connection objects) [cite: 1333]",
        D: "Mạng con [cite: 1334]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 157: Dịch vụ chịu trách nhiệm duy trì cấu trúc liên kết sao chép (Replication topology)? [cite: 1335]",
      options: {
        A: "File Replication Service [cite: 1336]",
        B: "Trình kiểm tra Tính nhất quán Tri thức (Knowledge Consistency Checker - KCC) [cite: 1337]",
        C: "WINS [cite: 1338]",
        D: "DNS [cite: 1339]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 158: Đối tượng đại diện cho mối quan hệ bắc cầu (transitive) giữa các trang? [cite: 1340, 1341]",
      options: {
        A: "Trang bổ sung [cite: 1342]",
        B: "Liên kết trang [cite: 1343]",
        C: "Bridgehead servers [cite: 1344]",
        D: "Cầu nối liên kết trang (Site link bridges) [cite: 1345]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 159: Tìm tệp nhật ký tạo ra khi bật Boot Logging? [cite: 1346, 1347]",
      options: {
        A: "\\Windows\\netlog.txt [cite: 1348]",
        B: "System32\\netlog.txt [cite: 1349]",
        C: "\\Windows\\ntbtlog.txt [cite: 1350]",
        D: "netboot.log [cite: 1351]",
      },
      correct: "C",
    },
    {
      question:
        "Câu 160: Bật 3 bộ điều khiển miền (DC) làm máy chủ Danh mục toàn cục (Global Catalog) ở đâu? [cite: 1361, 1362]",
      options: {
        A: "Rừng, cài đặt NTDS [cite: 1363]",
        B: "Miền, cài đặt NTDS [cite: 1364]",
        C: "Trang, cài đặt NTDS [cite: 1365]",
        D: "Máy chủ (Server), cài đặt NTDS [cite: 1366]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 161: Giao thức sao chép liên kết internet, tự động nhận lại thông tin nếu mất kết nối? [cite: 1367, 1368, 1370, 1371, 1372, 1373, 1374]",
      options: {
        A: "IP [cite: 1375]",
        B: "SMTP [cite: 1375]",
        C: "RPC [cite: 1375]",
        D: "DHCP [cite: 1375]",
      },
      correct: "B",
    },
    {
      question:
        "Câu 162: Giảm độ trễ sao chép giữa các DC trong trang khác nhau? [cite: 1376, 1378, 1380, 1381]",
      options: {
        A: "Giảm khoảng thời gian Sao chép cho đối tượng DEFAULTIPSITELINK. [cite: 1382]",
        B: "Giảm khoảng trang. [cite: 1383]",
        C: "Giảm lịch trình trang. [cite: 1384]",
        D: "Giảm lịch trình DC. [cite: 1385]",
      },
      correct: "A",
    },

    {
      question:
        "Câu 163: Tìm lỗi cụ thể liên quan đến sao chép Active Directory ở đâu? [cite: 1386, 1387]",
      options: {
        A: "Trang và Dịch vụ. [cite: 1388]",
        B: "Quản lý Máy tính. [cite: 1389]",
        C: "Nhật ký Hệ thống. [cite: 1390]",
        D: "Trình xem Sự kiện - Nhật ký Dịch vụ Thư mục (Directory Service Log). [cite: 1391]",
      },
      correct: "D",
    },
    {
      question:
        "Câu 164: Làm thế nào để giảm lưu lượng sao chép giữa hai site (mỗi site có 15 Domain Controller) mà không thay đổi cấu trúc vật lý?",
      options: {
        A: "Tạo thêm site mới",
        B: "Tạo nhiều site link",
        C: "Cấu hình site link bridge",
        D: "Cấu hình một máy chủ tại mỗi site làm Preferred Bridgehead Server",
      },
      correct: "D",
    },
    {
      question:
        "Câu 165: Làm thế nào để kiểm soát chính xác thời gian sao chép dựa trên hạ tầng vật lý mà không xóa Domain Controller?",
      options: {
        A: "Thực hiện bước 1 và 2",
        B: "Thực hiện bước 1 và 3",
        C: "Thực hiện bước 1 và 4",
        D: "Thực hiện bước 4 và 5 (tạo site mới phản ánh hạ tầng vật lý và cấu hình bridgehead server)",
      },
      correct: "D",
    },
    {
      question:
        "Câu 166: Với tiền tố IPv6 /53, cần sử dụng mặt nạ nào để hỗ trợ thêm khoảng 1.000 mạng con?",
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
        "Câu 167: Loại địa chỉ IPv6 nào có thể định tuyến nội bộ và giao tiếp với tất cả các phân đoạn mạng?",
      options: {
        A: "Unique Local Address (fd00::/8)",
        B: "Link-local address (fe80::/10)",
        C: "Multicast address (ff00::/8)",
        D: "Loopback address (::1)",
      },
      correct: "A",
    },
    {
      question:
        "Câu 168: Loại địa chỉ IPv6 nào phù hợp cho môi trường thử nghiệm gồm nhiều mạng con và có khả năng định tuyến nội bộ?",
      options: {
        A: "Địa chỉ toàn cục (Global Unicast)",
        B: "Địa chỉ liên kết cục bộ (Link-local)",
        C: "Địa chỉ cục bộ duy nhất (Unique Local Address – ULA)",
        D: "Địa chỉ site-local",
      },
      correct: "C",
    },
    {
      question:
        "Câu 169: Mặt nạ mạng nào phù hợp cho mạng lớp B 137.25.0.0, yêu cầu 50 mạng con và hơn 600 host mỗi mạng?",
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
        "Câu 170: Mặt nạ mạng nào hỗ trợ 35 địa điểm (mạng con) và tối đa 1.000 thiết bị trên mỗi mạng con cho mạng lớp B?",
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
        "Câu 171: Mặt nạ mạng nào phù hợp khi chia mạng lớp C 201.102.34.0 cho 75 máy?",
      options: {
        A: "255.255.255.192",
        B: "255.255.255.224",
        C: "255.255.255.252",
        D: "255.255.255.240",
      },
      correct: "A",
    },
    {
      question: "Câu 172: CIDR /27 tương ứng với mặt nạ mạng nào?",
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
        "Câu 173: Lệnh nào được sử dụng để nén cơ sở dữ liệu DHCP khi tệp Jet Engine quá lớn?",
      options: {
        A: "jetpack.exe dhcp.mdb temp.mdb",
        B: "shrinkpack.exe",
        C: "jetshrink.exe",
        D: "shrinkjet.exe",
      },
      correct: "A",
    },
    {
      question:
        "Câu 174: Cách nào bảo vệ tệp trên NTFS để chỉ một người duy nhất có thể mở được, kể cả quản trị viên?",
      options: {
        A: "Sử dụng Encrypting File System (EFS)",
        B: "Sử dụng CDMA",
        C: "Sử dụng FAT32",
        D: "Chuyển đổi sang FAT32",
      },
      correct: "A",
    },
    {
      question:
        "Câu 175: Lệnh dòng lệnh nào dùng để thay đổi hoặc quản lý các tệp được mã hóa bằng EFS?",
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
        "Câu 176: Giải pháp nào giúp người dùng truy cập tệp dễ dàng khi các tệp thường xuyên di chuyển giữa các máy chủ?",
      options: {
        A: "Encrypting File System (EFS)",
        B: "Distributed File System (DFS)",
        C: "Shared File System (SFS)",
        D: "Published File System (PFS)",
      },
      correct: "B",
    },
    {
      question:
        "Câu 177: Địa chỉ IPv6 FE80::0203:FFFF:FE11:2CD cho biết điều gì?",
      options: {
        A: "Địa chỉ toàn cục và sử dụng DHCPv6",
        B: "Địa chỉ multicast và được gán thủ công",
        C: "Địa chỉ loopback và dùng EUI-64",
        D: "Địa chỉ link-local và được tạo theo chuẩn EUI-64",
      },
      correct: "D",
    },
  ],
};
