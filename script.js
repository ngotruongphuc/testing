const questions = {
  "Kỹ thuật": [
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích học công nghệ (thử lắp ráp đồ đạc, máy móc, v.v.)",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích thao tác trên máy tính để giải trí hoặc học tập",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích sửa chữa vật dụng/đồ dùng cá nhân",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích cài đặt và kiểm tra ứng dụng trên điện thoại hoặc máy tính",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích chuẩn bị và lắp ráp vật dụng cắm trại, dã ngoại, trại hè",
    },
  ],
  "Nghiên cứu": [
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích tìm hiểu về chủ đề mình thích qua sách báo hoặc video",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích nghiên cứu cách giải quyết vấn đề mà mình quan tâm",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích quan sát và phân tích sự vật hoặc hành vi con người",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích đặt câu hỏi về chủ đề mình hứng thú",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích lý giải vấn đề trong cuộc sống một cách hợp lý (logic)",
    },
  ],
  "Nghiệp vụ": [
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích sắp xếp và ghi chú bài học theo quy tắc",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích tuân thủ luật lệ, quy tắc của trường lớp",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích dọn dẹp và sắp xếp bàn học định kỳ",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích thực hiện các việc cá nhân theo lịch cố định",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích làm việc theo sát quy trình, kế hoạch",
    },
  ],
  "Nghệ thuật": [
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích tham gia câu lạc bộ âm nhạc, hội họa, văn nghệ",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích mô tả các ý tưởng bằng hành động",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích Sáng tạo nội dung (âm nhạc, bài văn, tranh ảnh, v.v.) theo cảm hứng",
    },
    {
      question: "Nếu có đủ cơ hội và nguồn lực, bạn có thích học chơi nhạc cụ",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích phác họa và vẽ tranh",
    },
  ],
  "Xã hội": [
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích giảng hòa cuộc tranh cãi giữa những người bạn",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích sẵn sàng giúp đỡ mọi người xung quanh",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích giúp bạn bè vượt qua trở ngại trong học tập",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích làm vui lòng người khác",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích quan tâm đến cảm xúc của người xung quanh",
    },
  ],
  "Quản lý": [
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích trình bày thông tin trước lớp",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích giao nhiệm vụ cho thành viên trong nhóm",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích đảm nhiệm vai trò quản lý lớp (lớp trưởng, lớp phó, v.v.)",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích xung phong làm nhóm trưởng",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích dẫn   đầu, dẫn dắt người khác",
    },
  ],
};

const parts = [
  "Kỹ thuật",
  "Nghiên cứu",
  "Nghiệp vụ",
  "Nghệ thuật",
  "Xã hội",
  "Quản lý",
];
let currentPartIndex = 0;
let currentQuestionIndex = 0;
let scores = parts.reduce((acc, part) => ({ ...acc, [part]: 0 }), {});
let selectedScore = null;
let currentFontSize = 16;
let preliminaryAnswer = null;
let selectedCareerGroup = null;

const satisfactionOptions = [
  { text: "Rất thích 🥰", points: 5 },
  { text: "Thích 😊", points: 4 },
  { text: "Bình thường 🤔", points: 3 },
  { text: "Không thích 🙁", points: 2 },
  { text: "Rất không thích 😡", points: 1 },
];

function displayQuestion() {
  const currentPart = parts[currentPartIndex];
  const quizContainer = document.getElementById("quizContainer");
  quizContainer.innerHTML = "";

  const question = questions[currentPart][currentQuestionIndex];

  const questionTitle = document.createElement("h3");
  questionTitle.textContent = `Phần ${currentPart} - Câu hỏi ${
    currentQuestionIndex + 1
  }:`;
  quizContainer.appendChild(questionTitle);

  const questionText = document.createElement("p");
  questionText.textContent = question.question;
  questionText.style.fontSize = `${currentFontSize}px`; // Set dynamic font size
  quizContainer.appendChild(questionText);

  const optionsList = document.createElement("ul");
  optionsList.classList.add("options-list");

  satisfactionOptions.forEach((option) => {
    const optionItem = document.createElement("li");
    const button = document.createElement("button");
    button.classList.add("option");
    button.textContent = option.text;
    button.onclick = () => selectAnswer(option.points, button);
    optionItem.appendChild(button);
    optionsList.appendChild(optionItem);
  });

  quizContainer.appendChild(optionsList);

  const navigationContainer = document.createElement("div");
  navigationContainer.classList.add("navigation-container");

  const backButton = document.createElement("button");
  backButton.id = "backButton";
  backButton.textContent = "Quay lại";
  backButton.classList.add("nav-button");
  backButton.disabled = currentQuestionIndex === 0 && currentPartIndex === 0; // Disabled on the first question of the first part
  backButton.onclick = moveToPreviousQuestion;
  navigationContainer.appendChild(backButton);

  const nextButton = document.createElement("button");
  nextButton.id = "nextButton";
  nextButton.textContent = "Tiếp theo";
  nextButton.classList.add("nav-button");
  nextButton.disabled = true; 
  nextButton.onclick = moveToNextQuestion;
  navigationContainer.appendChild(nextButton);

  quizContainer.appendChild(navigationContainer);
}

function selectAnswer(points, button) {
  selectedScore = points;

  const options = document.querySelectorAll(".option");
  options.forEach((option) => option.classList.remove("selected"));
  button.classList.add("selected");

  document.getElementById("nextButton").disabled = false;
}

function moveToPreviousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
  } else if (currentPartIndex > 0) {
    currentPartIndex--;
    currentQuestionIndex = questions[parts[currentPartIndex]].length - 1;
  }
  displayQuestion();
}

function moveToNextQuestion() {
  if (selectedScore !== null) {
    scores[parts[currentPartIndex]] += selectedScore;
    selectedScore = null;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex >= questions[parts[currentPartIndex]].length) {
    if (currentPartIndex < parts.length - 1) {
      showTransitionScreen();
    } else {
      displayResult();
    }
  } else {
    displayQuestion();
  }
}

function showTransitionScreen() {
  const quizContainer = document.getElementById("quizContainer");
  quizContainer.innerHTML = `
        <h3>Bạn sắp bắt đầu Phần ${parts[currentPartIndex + 1]}</h3>
        <p>Nhấn nút "Bắt đầu" để tiếp tục bài trắc nghiệm.</p>
        <button id="startNextPartButton" class="start-part-button">Bắt đầu Phần ${
          parts[currentPartIndex + 1]
        }</button>
    `;

  document.getElementById("startNextPartButton").onclick = () => {
    currentPartIndex++;
    currentQuestionIndex = 0;
    if (currentPartIndex == parts.length) {
      displayResult();
    } else {
      displayQuestion();
    }
  };
}

const partDetails = {
  "Kỹ thuật": `<h3 class='title'>Đặc điểm của những người thuộc nhóm Kỹ thuật</h3>
        <p>Là nhóm người thực tế, ưa hành động hơn suy nghĩ, thích khám phá...</p>
        <p><strong>Điểm mạnh:</strong> Là những người trung thực, thẳng thắn và kiên trì trong công việc.</p>
        <p><strong>Điểm cần khắc phục:</strong> Đa phần người thuộc nhóm kỹ thuật bộc trực, hơi khô khan và không giỏi giao tiếp.</p>
        <p><strong>Ngành nghề:</strong> Cơ khí, Ô tô, Điện tử, Điện lạnh; Máy tính, Công nghệ thông tin; Xây dựng,…</p>
        <p><strong>Trải nghiệm ở lớp, trường:</strong> Thực hành sửa các vật dụng đơn giản</p>
        <p><strong>Các môn học cần phát huy:</strong> Công nghệ, vật lý, sinh học,…</p>
        <p><strong>Ở lớp:</strong> Tham gia thực hành các môn như Vật lý, Công nghệ hoặc thể dục, hỗ trợ giáo viên sửa chữa hoặc chuẩn bị thí nghiệm</p>
        <p><strong>Ở trường:</strong> Tham gia câu lạc bộ kỹ thuật, chế tạo mô hình, hoặc các hoạt động về khoa học ứng dụng. Thử sức trong các cuộc thi sáng tạo robot, mô hình cơ khí.</p>
        <p><strong>Ở nhà:</strong>Sửa chữa đồ dùng gia đình hoặc tự làm các dự án DIY (Do-It-Yourself). Trồng cây, làm vườn, chăm sóc thú cưng </p>
        `,
  "Nghiên cứu": `<h3 class='title'>Đặc điểm của những người thuộc nhóm Nghiên cứu</h3>
        <p>Thích phân tích, nghiên cứu sâu mọi vấn đề...</p>
        <p><strong>Điểm mạnh:</strong> ọ thích làm việc với ý tưởng hoặc dữ liệu để sáng tạo nên những giải pháp mới; có khả năng quan sát, phân tích, đánh giá vấn đề một cách logic và có hệ thống.</p>
        <p><strong>Điểm cần khắc phục:</strong> Thích các hoạt động cá nhân hoặc làm việc trong nhóm nhỏ.</p>
        <p><strong>Ngành nghề:</strong> Nhà nghiên cứu Khoa học; Kỹ sư máy tính; Bác sĩ, Dược sĩ,…</p>
        <p><strong>Trải nghiệm ở lớp, trường:</strong> Trải nghiệm tham gia nghiên cứu khoa học</p>
        <p><strong>Các môn học cần phát huy:</strong> Toán, khoa học tự nhiên, tin học, ngoại ngữ,…</p>
        <p><strong>Ở lớp:</strong>Tham gia các bài tập yêu cầu phân tích dữ liệu hoặc thí nghiệm khoa học. Đặt câu hỏi hoặc trình bày quan điểm cá nhân về vấn đề khoa học.</p>
        <p><strong>Ở trường:</strong>Gia nhập các câu lạc bộ nghiên cứu khoa học hoặc câu lạc bộ STEM. Tham gia các cuộc thi học thuật như Olympic Toán, Hóa, Sinh, hoặc tin học.</p>
        <p><strong>Ở nhà:</strong>Đọc sách chuyên ngành, tài liệu học thuật hoặc xem các chương trình khoa học.Tự làm các thí nghiệm nhỏ, sử dụng công cụ như kính hiển vi, phần mềm lập trình. </p>
        `,
  "Nghiệp vụ": `<h3 class='title'>Đặc điểm của những người thuộc nhóm Nghiệp vụ</h3>
        <p>Có tổ chức, logic, định hướng chi tiết...</p>
        <p><strong>Điểm mạnh:</strong> Tận tâm, lịch sự và rất kiên trì với mục tiêu của mình, </p>
        <p><strong>Điểm cần khắc phục:</strong> Cầu toàn trong công việc cũng như muốn làm người khác hài lòng nên rất dễ bị căng thẳng và áp lực </p>
        <p><strong>Ngành nghề:</strong> Kế toán, kiểm toán, thuế, nhân viên ngân hàng, giáo viên,…</p>
        <p><strong>Trải nghiệm ở lớp, trường:</strong> Các trọng trách quan trọng: Thủ quỷ, giữ sổ đầu bài</p>
        <p><strong>Các môn học cần phát huy:</strong> Tin học, toán, ngoại ngữ, giáo dục công dân,…</p>
        <p><strong>Ở lớp:</strong> Hỗ trợ giáo viên quản lý tài liệu, sổ sách hoặc làm thư ký nhóm. Luyện tập làm bài tập logic, thống kê, hoặc quản lý thời gian.</p>
        <p><strong>Ở trường:</strong> Tham gia các câu lạc bộ về quản trị văn phòng, theo dõi sổ sách quỹ, hoặc phân tích dữ liệu. Hỗ trợ tổ chức tài liệu, sắp xếp sự kiện.</p>
        <p><strong>Ở nhà:</strong>Thực hành các kỹ năng như sử dụng phần mềm Excel, làm báo cáo, hoặc quản lý ngân sách cá nhân. Sắp xếp đồ đạc ngăn nắp, lập kế hoạch chi tiêu hoặc lịch trình học tập chi tiết.</p>
        `,
  "Nghệ thuật": `<h3 class='title'>Đặc điểm của những người thuộc nhóm Nghệ thuật</h3>
        <p>Ưa thích tự do, yêu cái đẹp, trí tưởng tượng phong phú...</p>
        <p><strong>Điểm mạnh:</strong> Trí tưởng tượng phong phú, sáng tạo: có khiếu thẩm mỹ, có thể phối màu hoặc vẽ, viết, mặc đẹp, nhảy, chơi nhạc cụ,….</p>
        <p><strong>Điểm cần khắc phục:</strong> Bạn trẻ nhóm nghệ thuật thường thích làm những điều khác với những người xung quanh, vì vậy ít tuân thủ theo luật lệ, nề nếp.</p>
        <p><strong>Ngành nghề:</strong> Thiết kế đồ họa, ngoại ngữ; thanh nhạc, thời trang…</p>
        <p><strong>Trải nghiệm ở lớp, trường:</strong> Lớp phó văn thể mỹ, lớp phó văn nghệ</p>
        <p><strong>Các môn học cần phát huy:</strong> Mỹ thuật, âm nhạc, ngữ văn,…</p>
        <p><strong>Ở lớp:</strong> Sáng tác bài thơ, bài văn hoặc bài hát trong các tiết học văn hoặc âm nhạc. Tham gia biểu diễn kịch, vẽ tranh minh họa cho các dự án nhóm.</p>
        <p><strong>Ở trường:</strong> Tham gia các câu lạc bộ mỹ thuật, âm nhạc, văn thơ, hoặc sân khấu. Góp phần tổ chức các chương trình nghệ thuật, triển lãm hoặc sự kiện văn hóa.</p>
        <p><strong>Ở nhà:</strong>Tự luyện tập vẽ, sáng tác nhạc, viết truyện, làm đồ thủ công. Trang trí không gian sống hoặc học thiết kế đồ họa.</p>
        `,
  "Xã hội": `<h3 class='title'>Đặc điểm của những người thuộc nhóm Xã hội</h3>
        <p>Thích giúp đỡ người khác, làm việc cộng đồng...</p>
        <p><strong>Điểm mạnh:</strong> Thấu hiểu, có khả năng về ngôn ngữ, diễn đạt tốt ý tưởng truyền đạt kiến thức, có khả năng lắng nghe một cách kiên nhẫn.</p>
        <p><strong>Điểm cần khắc phục:</strong> Nhạy cảm, dễ bị ảnh hưởng bởi cảm xúc của người khác, dễ mủi lòng, hay che giấu sở thích hoặc khả năng thật.</p>
        <p><strong>Ngành nghề:</strong> Cố vấn, luật sư, quảng cáo marketing, du lịch, dịch vụ khách hàng,…</p>
        <p><strong>Trải nghiệm ở lớp, trường:</strong> Dịch vụ cộng đồng, dịch vụ cá nhân</p>
        <p><strong>Các môn học cần phát huy:</strong> Giáo dục công dân, ngữ văn, lịch sử,…</p>
        <p><strong>Ở lớp:</strong> Hỗ trợ bạn bè trong học tập, làm nhóm trưởng trong các dự án nhóm. Thuyết trình hoặc hướng dẫn bạn bè trong các hoạt động học tập chung.</p>
        <p><strong>Ở trường:</strong> Tham gia hoạt động tình nguyện, câu lạc bộ hỗ trợ cộng đồng hoặc đội hướng dẫn học sinh mới. Tổ chức hoặc tham gia các buổi tư vấn, giao lưu kỹ năng mềm.</p>
        <p><strong>Ở nhà:</strong>Hướng dẫn hoặc giúp đỡ em nhỏ trong việc học tập. Tổ chức các buổi trò chuyện hoặc thuyết trình trong gia đình.</p>
        `,
  "Quản lý": `<h3 class='title'>Đặc điểm của những người thuộc nhóm Quản lý</h3>
        <p>Yêu thích lãnh đạo, thuyết phục người khác...</p>
        <p><strong>Điểm mạnh:</strong> Quyết đoán, rất năng động, tham vọng, giao tiếp tốt; được nhiều người tin tưởng, nể phục. </li>
        <p><strong>Điểm cần khắc phục:</strong> Không thích, không có năng khiếu trong việc để ý đến các chi tiết.  </li>
        <p><strong>Ngành nghề:</strong> Quản lí doanh nghiệp; Marketing, quản trị, quản lí trong cơ quan nhà nước, trường học;…</li>
        <p><strong>Trải nghiệm ở lớp, trường:</strong> Lớp phó học tập, lớp trưởng, ...</li>
        <p><strong>Các môn học cần phát huy:</strong> Toán, ngữ văn, tin học, giáo dục công dân,…</p>
        <p><strong>Ở lớp:</strong> Đề xuất ý tưởng và dẫn dắt nhóm trong các dự án hoặc bài tập nhóm. Tổ chức thảo luận, tranh biện, hoặc lập kế hoạch học tập cho nhóm.</p>
        <p><strong>Ở trường:</strong> Tham gia câu lạc bộ kinh doanh, khởi nghiệp hoặc đội lãnh đạo học sinh. Tổ chức sự kiện, hội thảo, hoặc các buổi gây quỹ.</p>
        <p><strong>Ở nhà:</strong>Thực hành kỹ năng thuyết trình, lập kế hoạch cá nhân hoặc dự án nhỏ tại nhà. Học các khóa online về kỹ năng giao tiếp, bán hàng, hoặc lãnh đạo.</p>
        `,
};

let top3 = [];
let remainingGroups = [];

function displayDetails(groupsToShow, isInitialDisplay = true) {
  const resultContainer = document.getElementById("result");
  resultContainer.innerHTML = "";
  let currentDetailIndex = 0;

  function showDetail(index) {
    resultContainer.innerHTML = "";

    const [group] = groupsToShow[index];

    const detailDiv = document.createElement("div");
    detailDiv.classList.add("details-container");

    let pageContent = `<h2>Nhóm ${index + 1}: ${group}</h2> ${
      partDetails[group] || "<p>Thông tin chi tiết chưa được cập nhật.</p>"
    }`;
    if (index >= 3) {
      pageContent = `<h2>Nhóm ${index}: ${group}</h2> ${
        partDetails[group] || "<p>Thông tin chi tiết chưa được cập nhật.</p>"
      }`;
    }
    if (index === 3) {
      pageContent = `<h2>Các nhóm còn lại</h2><p>Các nhóm tiếp theo còn lại có số điểm thấp hơn 3 nhóm đầu. Tuy nhiên bạn cũng có thể khám phá xem bạn có đặc điểm gì với các nhóm nghề này</p>`;
    }
    detailDiv.innerHTML = `${pageContent}
             <div class="navigation-container">
                ${
                  index > 0
                    ? '<button class="nav-button" id="prevButton">Quay lại</button>'
                    : ""
                }
                ${
                  index < groupsToShow.length - 1
                    ? '<button class="nav-button" id="quizNextButton">Tiếp theo</button>'
                    : ""
                }
                  ${
                    index === 6
                      ? '<button class="nav-button" id="summaryBackButton">Quay lại kết quả</button>'
                      : ""
                  }
                ${
                  index === 6
                    ? '<button class="nav-button" id="showFormButton">Tiếp theo</button>'
                    : ""
                }
            </div>
        `;

    resultContainer.appendChild(detailDiv);

    if (index > 0) {
      document.getElementById("prevButton").onclick = () =>
        showDetail(index - 1);
    }
    if (index < groupsToShow.length - 1) {
      document.getElementById("quizNextButton").onclick = () =>
        showDetail(index + 1);
    }
    if (index === groupsToShow.length - 1) {
      document.getElementById("showFormButton").onclick =
        displayCompletionScreen;
      document.getElementById("summaryBackButton").onclick = goBackToSummary;
    }
  }

  showDetail(currentDetailIndex);
}

function displayResult() {
  const resultContainer = document.getElementById("result");
  const resultText = document.getElementById("resultText");

  top3 = Object.entries(scores)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3);

  remainingGroups = Object.entries(scores)
    .sort(([, a], [, b]) => b - a)
    .slice(3);

  const predictionCorrect = top3.some(([part]) => part === selectedCareerGroup);

  resultText.innerHTML = `
        <h2>Kết quả</h2>
        <br>
        <h5>Top 3 nhóm có điểm cao nhất:</h5>
        <br>
        ${top3
          .map(
            ([part, score], index) => `
            <div dis>
            <span style='min-width: 200px'>
            ${index + 1}. ${part}
            </span>
            <span>
            - <span style='color: #6a11cb'>${score}</span> điểm
            </span>
        </div>`
          )
          .join("<br>")}<br><br>
        Dự đoán của bạn: ${
          selectedCareerGroup ? `Nhóm ${selectedCareerGroup}` : "Không chọn"
        }<br>
        ${predictionCorrect ? "Dự đoán chính xác!" : "Dự đoán không chính xác."}
        <div id="detailsButton" style='margin-top: 30px' class="nav-button">Xem chi tiết</div>
    `;

  resultContainer.style.display = "block";
  document.getElementById("detailsButton").onclick = () => {
    const allGroups = top3.concat(["Remaining"], remainingGroups);
    displayDetails(allGroups);
    handleNextStep("step__5", "step__6");
  };
  document.getElementById("quizSection").style.display = "none";
  document.getElementById("completionScreen").style.display = "none";
}

function goBackToSummary() {
  const details = document.querySelectorAll(".details-container");
  details.forEach((detail) => detail.remove());

  const resultText = document.getElementById("resultText");
  resultText.style.display = "block";

  const resultContainer = document.getElementById("result");
  resultContainer.style.display = "block";
  handleNextStep("step__5", "step__6");
  document.getElementById("quizSection").style.display = "none";
}

function clearScreen() {
  const allElements = document.querySelectorAll("body > .container");

  allElements.forEach((element) => element.remove());
}

function clearCompletionScreen() {
  const completionScreen = document.getElementById("completionScreen");
  if (completionScreen) {
    completionScreen.remove();
  }
}

function displayCompletionScreen() {
  document.getElementById("result").style.display = "none";
  document.getElementById("completionScreen").style.display = "block";
  handleNextStep("step__6", "step__7");
}

function submitResult() {
  const form = document.getElementById("resultForm");
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => (data[key] = value));

  data.scores = JSON.stringify(scores);
  data.predictedCareer = selectedCareerGroup;
  data.preliminaryAnswer = preliminaryAnswer;

  fetch(
    "https://script.google.com/macros/s/AKfycbzlnfYsB5GIgJxueZU4fQmIenWrOt944h1dQH7a9RYxToPUzLV9KvNv0u6e9pjv0EngtA/exec",
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {

      if (data.status === "success") {
        // alert("Kết quả đã được gửi thành công!");
        document.getElementById("completionScreen").style.display = "none";
        handleNextStep("step__7", "step__8");
      } else {
        // alert("Có lỗi khi gửi kết quả. Vui lòng thử lại.");
        document.getElementById("completionScreen").style.display = "none";
        handleNextStep("step__7", "step__8");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      // alert("Có lỗi khi gửi kết quả. Vui lòng thử lại.");
    });
}

document.getElementById("resultForm").addEventListener("submit", (event) => {
  event.preventDefault();
  submitResult();
});

document.querySelectorAll(".career-option").forEach((option) => {
  option.addEventListener("click", () => {
    selectedCareerGroup = option.getAttribute("data-group");
    document.getElementById("frontQuestion").style.display = "none";
    document.getElementById("openingScreen").style.display = "flex";
  });
});

function openChatGpt() {
  return window.open('https://chatgpt.com/g/g-676c3474fb1c8191bde8c0175368c2b6-huong-nghiep-ai', '_blank')
}
function tryAgain() {
  window.location.reload()
}

function toggleSettingsMenu() {
  const menu = document.getElementById("settingsMenu");
  menu.classList.toggle("hidden");
}

function changeFontStyle(event) {
  document.body.style.fontFamily = event.target.value;
}

function toggleThemeMode(event) {
  if (event.target.value === "dark") {
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "#fff";
  } else {
    document.body.style.backgroundColor = "#f5f7fa";
    document.body.style.color = "#444";
  }
}

function changeFontSize(event) {
  currentFontSize = parseInt(event.target.value, 10);
  displayQuestion();
}

function retakeQuiz() {
  scores = parts.reduce((acc, part) => ({ ...acc, [part]: 0 }), {});
  currentQuestionIndex = 0;
  selectedCareerGroup = null;

  document.getElementById("result").style.display = "none";
  document.getElementById("frontQuestion").style.display = "none";
  document.getElementById("openingScreen").style.display = "none";
  document.getElementById("completionScreen").style.display = "none";
  document.getElementById("quizSection").style.display = "block";

  displayQuestion(); // Restart the quiz
}
function getElementByClassName(name) {
  return document.querySelector(`${name}`);
}

let currentStep = "step__1";

const bgImage = {
  step__1: [""],
  step__2: ["./images/Questions-pana.svg", "./images/Questions-amico.svg"],
  step__3: ["./images/engineer.svg", "./images/leader.svg"],
  step__4: ["", ""],
};

// Initialize quiz on page load

function handleNextStep(cur, tar) {
  currentStep = tar;
  const preStep = getElementByClassName(`.${cur}`);
  const nextStep = getElementByClassName(`.${tar}`);
  nextStep.classList.add("active");
  nextStep.classList.remove("animate__fadeIn");
  preStep.classList.add("animate__fadeOut");
  preStep.classList.remove("active");

  const firstStepBg = getElementByClassName(".center__bg");
  firstStepBg.style.display = "none";

  const stepBgLeft = getElementByClassName(".left__bg");
  const stepBgRight = getElementByClassName(".right__bg");

  stepBgLeft.setAttribute("src", bgImage[currentStep][0]);
  stepBgRight.setAttribute("src", bgImage[currentStep][1]);
  stepBgLeft.classList.add("active");
  stepBgRight.classList.add("active");
  if(!stepBgLeft.getAttribute('src') && !stepBgRight.getAttribute('src')) {
    stepBgLeft.classList.remove("active");
    stepBgRight.classList.remove("active");
  }
}

window.onload = () => {
  const statedBtn = document.querySelector(".get-started");
  statedBtn.addEventListener("click", () => {
    // fade to step 2
    handleNextStep("step__1", "step__2");
  });

  const questionStarteds = document.querySelectorAll(".question-started .btn");
  questionStarteds.forEach((item) => {
    item.addEventListener("click", () => {
      // fade to step 3
      handleNextStep("step__2", "step__3");
    });
  });

  // Display the initial preliminary question
  document.querySelectorAll(".preliminary-option").forEach((option) => {
    option.addEventListener("click", () => {
      preliminaryAnswer = option.getAttribute("data-answer");
      document.getElementById("preliminaryQuestion").style.display = "none";
      document.getElementById("frontQuestion").style.display = "block";
    });
  });
  displayOpeningScreen();

  const startButton = document.getElementById("startButton");
  startButton.onclick = () => {
    document.getElementById("openingScreen").style.display = "none";
    document.getElementById("quizSection").style.display = "block";
    displayQuestion();
  };
  audioPlayer = document.getElementById("audioPlayer");
  selectMusic();

  // End
  const reStarted = getElementByClassName('.re-started')
  reStarted.addEventListener('click', () => {
    window.location.reload();
  })
};

function displayOpeningScreen() {
  document.querySelectorAll(".career-option").forEach((option) => {
    option.addEventListener("click", () => {
      selectedCareerGroup = option.getAttribute("data-group");
      document.getElementById("frontQuestion").style.display = "none";
      document.getElementById("openingScreen").style.display = "flex";
      handleNextStep("step__3", "step__4");
    });
  });
}

let audioPlayer;
let isPlaying = false;

function selectMusic() {
  const musicSelect = document.getElementById("musicSelect");
  currentMusic = musicSelect.value;
  audioPlayer.src = currentMusic;
  createCustomControls();
}

function toggleAudio() {
  if (isPlaying) {
    audioPlayer.pause();
    isPlaying = false;
    document.getElementById("playPauseButton").textContent = "Play";
  } else {
    audioPlayer.play();
    isPlaying = true;
    document.getElementById("playPauseButton").textContent = "Pause";
  }
}

function adjustVolume() {
  audioPlayer.volume = document.getElementById("volumeControl").value;
}

function createCustomControls() {
  const customControlsDiv = document.getElementById("customAudioControls");
  customControlsDiv.innerHTML = `
        <button id="playPauseButton" onclick="toggleAudio()">Play</button>
        <input type="range" id="volumeControl" min="0" max="1" step="0.1" value="1" oninput="adjustVolume()">
    `;
}


// =======================================================
//          NEW: JOB SEARCH AND FILTER LOGIC
// =======================================================

// --- PASTE YOUR JOB DATA ARRAY HERE ---
const jobData = [
            {
                "id": 1,
                "ten_nghe": "Giảng viên đại học, sau đại học (2311) - University Teacher",
                "nhom_nghe": "NHÓM NGHỀ NGÔN NGỮ",
                "holland_code": "S, I, A",
                "mo_ta": "Giảng viên đại học, cao học là người có kiến thức chuyên sâu về một chuyên ngành cụ thể và dạy các lý thuyết và thực hành về một hay nhiều môn học ở ở bậc đại học, hoặc tương đương; thực hiện nghiên cứu và cải tiến, phát triển khái niệm, lý thuyết, phương pháp hoạt động, biên soạn sách và và giảng dạy.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "Các trường đại học trong và ngoài nước được các cơ quan quản lý Nhà nước công nhận (chi tiết có thể tham khảo tại Cục Quản lý Chất lượng Giáo dục, Bộ Giáo dục & Đào tạo)"
            },
            {
                "id": 2,
                "ten_nghe": "Giảng viên cao đẳng (2312) - College Teacher",
                "nhom_nghe": "NHÓM NGHỀ NGÔN NGỮ",
                "holland_code": "S, I, A",
                "mo_ta": "Giảng viên cao đẳng là người có kiến thức chuyên sâu về một chuyên ngành cụ thể và dạy các lý thuyết và thực hành về một hay nhiều môn học ở bậc cao đẳng hoặc các tương đương; thực hiện nghiên cứu và cải tiến, phát triển khái niệm, lý thuyết, phương pháp hoạt động, biên soạn sách và và giảng dạy.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "Các trường đại học trong và ngoài nước được các cơ quan quản lý Nhà nước công nhận (chi tiết có thể tham khảo tại Cục Quản lý Chất lượng Giáo dục, Bộ Giáo dục & Đào tạo)"
            },
            {
                "id": 3,
                "ten_nghe": "Giáo viên trung cấp (2331) - Secondary Vocational and Professional School Teacher",
                "nhom_nghe": "NHÓM NGHỀ NGÔN NGỮ",
                "holland_code": "S, R",
                "mo_ta": "Giáo viên trung cấp là người có kiến thức chuyên sâu về một lĩnh vực cụ thể và dạy các lý thuyết và thực hành về một hay nhiều môn học ở cấp giáo dục trung cấp, sau khi kết thúc giáo dục trung học cơ sở hoặc trung học phổ thông, với mục đích giáo dục, hướng nghiệp, hoặc dạy nghề.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "Các trường hoặc khoa Sư phạm kỹ thuật (không phải học chứng chỉ Sư phạm GDNN); Các trường cao đẳng, đại học trên toàn quốc."
            },
            {
                "id": 4,
                "ten_nghe": "Giáo viên trung học phổ thông (2332) - Upper Secondary Education Teacher",
                "nhom_nghe": "NHÓM NGHỀ NGÔN NGỮ",
                "holland_code": "S, A",
                "mo_ta": "Giáo viên trung học phổ thông dạy học sinh ở các trường trung học phổ thông hoặc tương đương, ví dụ như trung tâm giáo dục thường xuyên. Họ dạy một hoặc nhiều môn học với mục đích giáo dục, hướng nghiệp, hoặc dạy nghề.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "Các trường ĐH Sư phạm trên toàn quốc như: ĐH Sư phạm Hà Nội, ĐH Sư phạm Tp HCM, ĐH Cần Thơ,..."
            },
            {
                "id": 5,
                "ten_nghe": "Giáo viên trung học cơ sở (2333) - Lower Secondary Education Teacher",
                "nhom_nghe": "NHÓM NGHỀ NGÔN NGỮ",
                "holland_code": "S, A",
                "mo_ta": "Giáo viên trung học cơ sở dạy học sinh ở các trường trung học cơ sở hoặc tương đương. Họ dạy một hoặc nhiều môn học với mục đích giáo dục, hướng nghiệp, hoặc dạy nghề.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "Các trường ĐH Sư phạm trên toàn quốc và các trường CĐ SP hoặc CĐ cộng đồng có đào tạo sư phạm tại các tỉnh, TP."
            },
            {
                "id": 6,
                "ten_nghe": "Giáo viên ngoại ngữ (2353) - Foreign Language Teacher",
                "nhom_nghe": "NHÓM NGHỀ NGÔN NGỮ",
                "holland_code": "S, A",
                "mo_ta": "Giáo viên Ngoại ngữ dạy học sinh ở các trường trung học phổ thông, trung cấp, cao đẳng và các bậc học khác. Họ dạy một hoặc nhiều ngoại ngữ khác nhau nhằm mục đích giáo dục, hướng nghiệp hoặc dạy nghề.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Sư phạm Hà Nội, ĐH Hà Nội, ĐHQG Hà Nội - ĐH Ngoại ngữ, ĐH Sư phạm TpHCM,..."
            },
            {
                "id": 7,
                "ten_nghe": "Chuyên viên quan hệ công chúng (2432) - Public Relations Officer",
                "nhom_nghe": "NHÓM NGHỀ NGÔN NGỮ",
                "holland_code": "E, S, A",
                "mo_ta": "Chuyên viên quan hệ công chúng, còn được gọi là cán bộ truyền thông, là người giữ nhiệm vụ kết nối giữa tổ chức, doanh nghiệp với thế giới bên ngoài.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Đại Nam, ĐH Hòa Bình, ĐHQG Hà Nội - ĐH Khoa học Xã hội & Nhân văn, ĐH Văn Lang,..."
            },
            {
                "id": 8,
                "ten_nghe": "Luật sư (2611) - Lawyer",
                "nhom_nghe": "NHÓM NGHỀ NGÔN NGỮ",
                "holland_code": "E, I, S",
                "mo_ta": "Luật sư là người bào chữa hoặc người bảo vệ quyền lợi cho thân chủ tại tòa án, trong các vụ án, các vụ việc và yêu cầu khác theo qui định của pháp luật.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Luật Hà Nội, ĐHQG Hà Nội - Khoa Luật, ĐH Luật Tp HCM, ĐHQG TpHCM – ĐH Kinh tế - Luật"
            },
            {
                "id": 9,
                "ten_nghe": "Chuyên viên lưu trữ văn thư và quản lí bảo tàng (2621) - Archivist and Curator",
                "nhom_nghe": "NHÓM NGHỀ NGÔN NGỮ",
                "holland_code": "C, I",
                "mo_ta": "Chuyên viên lưu trữ văn thư và quản lí bảo tàng tiến hành nghiên cứu, thu thập, đánh giá và bảo vệ, bảo tồn các nội dung tài liệu, hiện vật có giá trị lịch sử, văn hóa và nghệ thuật.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Nội vụ Hà Nội, ĐH Văn Hóa Hà Nội, ĐH Văn hóa TpHCM"
            },
            {
                "id": 10,
                "ten_nghe": "Thủ thư và nhân viên thư viện (2622, 4401) - Librarian and Library Clerk",
                "nhom_nghe": "NHÓM NGHỀ NGÔN NGỮ",
                "holland_code": "C, S",
                "mo_ta": "Thủ thư và nhân viên thư viện là những người thu thập và lưu trữ các tài liệu; ghi lại hoặc cho mượn và thu lại sách báo, tài liệu; lấy và cung cấp thông tin theo yêu cầu.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Nội vụ Hà Nội, ĐH Văn Hóa Hà Nội, ĐH Văn hóa TpHCM"
            },
            {
                "id": 11,
                "ten_nghe": "Biên tập viên nhà xuất bản - Editor/ Publisher",
                "nhom_nghe": "NHÓM NGHỀ NGÔN NGỮ",
                "holland_code": "A, C",
                "mo_ta": "Biên tập viên làm việc với các tác giả, giúp họ trình bày tác phẩm của họ một cách lôi cuốn, chỉnh sửa và hoàn thiện bản thảo.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "HV Báo chí Tuyên truyền, ĐH Văn hóa Hà Nội, ĐH Văn Hóa TpHCM"
            },
            {
                "id": 12,
                "ten_nghe": "Nhà nghiên cứu khoa học xã hội (2632) - Social Scientist",
                "nhom_nghe": "NHÓM NGHỀ NGÔN NGỮ",
                "holland_code": "I, S",
                "mo_ta": "Các nhà nghiên cứu khoa học xã hội nghiên cứu xã hội loài người và những mối quan hệ giữa người và người trong xã hội.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐHQG Hà Nội - ĐH Khoa học Xã hội & Nhân văn, ĐHQG TpHCM - ĐH Khoa học Xã hội & Nhân văn, ĐH Đà Lạt"
            },
            {
                "id": 13,
                "ten_nghe": "Nhà khảo cổ học (2633) - Archaeologist",
                "nhom_nghe": "NHÓM NGHỀ NGÔN NGỮ",
                "holland_code": "I, R",
                "mo_ta": "Các nhà khảo cổ nghiên cứu quá khứ để hiểu con người đã sống như thế nào. Họ theo dõi sự phát triển của nhân loại bằng cách nghiên cứu các di vật từ quá khứ.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐHQG Hà Nội - ĐH Khoa học Xã hội & Nhân văn, ĐHQG TpHCM - ĐH Khoa học Xã hội & Nhân văn, ĐH Huế - ĐH Khoa học"
            },
            {
                "id": 14,
                "ten_nghe": "Nhà sử học (2633) - Historian",
                "nhom_nghe": "NHÓM NGHỀ NGÔN NGỮ",
                "holland_code": "I, A",
                "mo_ta": "Nhà sử học cho chúng ta biết về quá khứ nhờ tiến hành nghiên cứu và mô tả hoạt động của con người trong quá khứ.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐHQG Hà Nội - ĐH Khoa học Xã hội & Nhân văn, ĐH Sư phạm Hà Nội, ĐH Sư phạm TpHCM"
            },
            {
                "id": 15,
                "ten_nghe": "Nhà biên kịch, nhà văn và các nghề có liên quan (2641) - Script Writer",
                "nhom_nghe": "NHÓM NGHỀ NGÔN NGỮ",
                "holland_code": "A, I",
                "mo_ta": "Nhà biên kịch, nhà văn và các nghề có liên quan làm công việc sáng tác và viết kịch bản phim, kịch, tác phẩm phát thanh và truyền hình, truyện đọc, tiểu thuyết...",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Sân khấu Điện Ảnh Hà Nội, ĐHQG Hà Nội - ĐH Khoa học Xã hội và Nhân văn, ĐH Sân khấu Điện Ảnh TpHCM"
            },
            {
                "id": 16,
                "ten_nghe": "Nhà báo (2642) - Journalist",
                "nhom_nghe": "NHÓM NGHỀ NGÔN NGỮ",
                "holland_code": "A, E, I",
                "mo_ta": "Nhà báo là những người viết, biên tập, sản xuất các ấn phẩm báo chí (truyền hình, phát thanh, báo viết, báo mạng).",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "HV Báo chí Tuyên truyền, ĐHQG Hà Nội - ĐH Khoa học xã hội và Nhân văn, ĐHQG TpHCM - ĐH Khoa học xã hội và Nhân văn"
            },
            {
                "id": 17,
                "ten_nghe": "Nhà ngôn ngữ học (2643) - Language Specialist",
                "nhom_nghe": "NHÓM NGHỀ NGÔN NGỮ",
                "holland_code": "I, A",
                "mo_ta": "Nhà ngôn ngữ học nghiên cứu các thành phần cơ bản của một ngôn ngữ nào đó, chẳng hạn như ngữ âm, ngữ nghĩa và chữ viết.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐHQG Hà Nội - ĐH Khoa học Xã hội & Nhân văn, ĐH Hà Nội, ĐHQG TpHCM - ĐH Khoa học Xã hội & Nhân văn"
            },
            {
                "id": 18,
                "ten_nghe": "Biên dịch và phiên dịch (2643) - Translator and Interpreter",
                "nhom_nghe": "NHÓM NGHỀ NGÔN NGỮ",
                "holland_code": "A, S, C",
                "mo_ta": "Biên dịch và phiên dịch nghiên cứu nguồn gốc, sự phát triển và cấu trúc của các ngôn ngữ, dịch viết và dịch nói từ ngôn ngữ này sang ngôn ngữ khác.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc THPT",
                "cac_truong_dao_tao": "Khoa ngoại ngữ của các trường ĐH, CĐ, TC, các trường ĐH ngoại ngữ, ĐH Sư phạm, CĐ Sư phạm trên toàn quốc"
            },
            {
                "id": 19,
                "ten_nghe": "Đạo diễn phim, sân khấu (2654) - Director: Film/ Stage",
                "nhom_nghe": "NHÓM NGHỀ NGÔN NGỮ",
                "holland_code": "A, E",
                "mo_ta": "Đạo diễn phim, sân khấu, còn gọi là đạo diễn và nhà sản xuất điện ảnh, sân khấu, là người chỉ đạo và sản xuất phim, các tác phẩm truyền hình, phát thanh và chương trình biểu diễn trên sân khấu.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Sân khấu Điện ảnh Hà Nội, ĐH Sân khấu Điện ảnh TpHCM, CĐ Văn hóa nghệ thuật và Du lịch Sài Gòn"
            },
            {
                "id": 20,
                "ten_nghe": "Phát thanh viên trên đài phát thanh, truyền hình và các phương tiện truyền thông đại chúng khác (2656) - Announcer: Radio, Television and Other media",
                "nhom_nghe": "NHÓM NGHỀ NGÔN NGỮ",
                "holland_code": "A, S",
                "mo_ta": "Phát thanh viên trên đài phát thanh, truyền hình và các phương tiện truyền thông khác là người đọc bản tin, phỏng vấn, hướng dẫn và thực hiện các thông báo khác.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "HV Báo chí Tuyên truyền, CĐ Phát thanh Truyền Hình 1, CĐ Phát thanh Truyền Hình 2"
            },
            {
                "id": 21,
                "ten_nghe": "Kĩ thuật viên ghi chép sổ sách y tế và thông tin về sức khỏe (3252) - Health Information Administrator",
                "nhom_nghe": "NHÓM NGHỀ NGÔN NGỮ",
                "holland_code": "C, S",
                "mo_ta": "Kĩ thuật viên ghi chép sổ sách y tế và thông tin về sức khỏe là chuyên gia trong việc lưu trữ cập nhật hồ sơ tại các bệnh viện, phòng khám và các cơ sở chăm sóc sức khỏe.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "CĐN Công nghiệp Hà Nội, CĐN Cơ điện Hà Nội, TC Y Dược Việt Nam"
            },
            {
                "id": 22,
                "ten_nghe": "Kĩ thuật viên bảo tàng (3433) - Museologist",
                "nhom_nghe": "NHÓM NGHỀ NGÔN NGỮ",
                "holland_code": "C, R",
                "mo_ta": "Kĩ thuật viên bảo tàng là người làm công việc đánh số hạng mục, phân loại và bảo quản hiện vật trong toàn bộ hoặc một bộ phận của bảo tàng.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Văn hóa Hà Nội, ĐH Văn hóa TpHCM, CĐ Văn hóa Nghệ thuật Việt Bắc"
            },
            {
                "id": 23,
                "ten_nghe": "Thư kí hành chính (3343, 3349) - Secretary",
                "nhom_nghe": "NHÓM NGHỀ NGÔN NGỮ",
                "holland_code": "C, S",
                "mo_ta": "Thư kí là người hỗ trợ công việc hành chính cho những người khác trong một tổ chức. Họ đóng vai trò quan trọng vì hoạt động của toàn bộ tổ chức phụ thuộc vào hiệu quả làm việc của họ.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Nội vụ, ĐH Hà Nội, ĐH Sư phạm TpHCM, ĐH Ngoại ngữ - Tin học TpHCM"
            },
            {
                "id": 24,
                "ten_nghe": "Kĩ thuật viên phát thanh, truyền hình và nghe - nhìn (3521) - Broadcasting and Audiovisual Technicians",
                "nhom_nghe": "NHÓM NGHỀ NGÔN NGỮ",
                "holland_code": "R, A",
                "mo_ta": "Kĩ thuật viên phát thanh, truyền hình và nghe - nhìn quản lí các chức năng kĩ thuật của thiết bị để ghi lại và biên tập các hình ảnh và âm thanh và để truyền thanh, truyền hình.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "CĐ Truyền hình Hà Nội, CĐ Văn hóa nghệ thuật Quân đội TP. HCM, ĐH Sân khấu Điện ảnh Hà Nội"
            },
            {
                "id": 25,
                "ten_nghe": "Nhân viên tổng đài dịch vụ khách hàng (4222) - Call Centre Operator",
                "nhom_nghe": "NHÓM NGHỀ NGÔN NGỮ",
                "holland_code": "S, C",
                "mo_ta": "Các nhân viên tổng đài dịch vụ khách hàng được đào tạo sử dụng điện thoại để giải đáp cho khách hàng về sản phẩm, dịch vụ cũng như thúc đẩy hỗ trợ việc bán sản phẩm.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "Khóa đào tạo ngắn hạn của các hãng Viettel, Mobile Phone, Vina Phone, Vietnamobile..."
            },
            {
                "id": 26,
                "ten_nghe": "Hướng dẫn viên du lịch (5113) - Tour Guide",
                "nhom_nghe": "NHÓM NGHỀ NGÔN NGỮ",
                "holland_code": "S, E",
                "mo_ta": "Hướng dẫn viên du lịch được đào tạo để đi cùng với khách du lịch trong phạm vi một quốc gia, thành phố hoặc khu vực nào đó. Họ giới thiệu với khách du lịch về ý nghĩa lịch sử, khảo cổ của những nơi họ đến.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "CĐ Du lịch Hà Nội, ĐH Hùng Vương – Phú Thọ, CĐN du lịch Huế"
            },
            {
                "id": 27,
                "ten_nghe": "Nhân viên marketing và bán hàng (5223) - Marketing and Sales Assistant",
                "nhom_nghe": "NHÓM NGHỀ NGÔN NGỮ",
                "holland_code": "E, S",
                "mo_ta": "Nhân viên marketing và bán hàng trong cửa hàng và tại các cơ sở bán lẻ trực tiếp bán nhiều loại hàng hóa và dịch vụ cho khách hàng, giới thiệu chức năng và chất lượng hàng hóa và dịch vụ.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Kinh tế Quốc Dân, ĐH Đà Nẵng - ĐH Kinh tế, ĐH Cần Thơ"
            },
            {
                "id": 28,
                "ten_nghe": "Nhà thiên văn học (2111) - Astronomer",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "I, R",
                "mo_ta": "Nhà thiên văn học tiến hành nghiên cứu, phát triển các lí thuyết và phương pháp vận hành, hoặc áp dụng kiến thức khoa học liên quan tới thiên văn học vào các lĩnh vực khác.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Khoa học và công nghệ Hà Nội (Ngành Vũ trụ và ứng dụng)"
            },
            {
                "id": 29,
                "ten_nghe": "Nhà khí tượng học (2112) - Meteorologist",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "I, R",
                "mo_ta": "Nhà khí tượng học tiến hành nghiên cứu, cải tiến hoặc phát triển các khái niệm, lí thuyết và phương pháp hoạt động liên quan đến các thành phần, cấu trúc và những biến đổi của bầu khí quyển.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Tài nguyên Môi trường Hà Nội, ĐHQG Hà Nội - ĐH Khoa học Tự nhiên, ĐH Tài nguyên và Môi trường TpHCM"
            },
            {
                "id": 30,
                "ten_nghe": "Nhà hoá học (2113) - Chemist",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "I, R",
                "mo_ta": "Nhà hóa học thực hiện các nghiên cứu, cải tiến hoặc phát triển các khái niệm, học thuyết và các phương pháp hoạt động, hoặc ứng dụng các kiến thức khoa học liên quan vào hóa học.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐHQG Hà Nội - ĐH Khoa học tự nhiên, ĐH Bách khoa Hà Nội, ĐHQG TpHCM - ĐH Bách khoa"
            },
            {
                "id": 31,
                "ten_nghe": "Nhà địa chất (2114) - Geologist",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "I, R",
                "mo_ta": "Các nhà địa chất nghiên cứu cấu trúc vật lí của lớp vỏ trái đất, quá trình hình thành đá và hóa thạch để xác định từng bước thay đổi và lịch sử phát triển của trái đất.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐHQG Hà Nội - ĐH Khoa học Tự nhiên, ĐH Mỏ - Địa chất, ĐHQG TpHCM - ĐH Khoa học Tự nhiên"
            },
            {
                "id": 32,
                "ten_nghe": "Nhà địa lí (2114) - Geographer",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "I, R",
                "mo_ta": "Nhà địa lí nghiên cứu các đặc điểm và tác dụng của bề mặt trái đất trong mối tương quan với các hiện tượng vật lí và văn hoá xã hội.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐHQG Hà Nội - ĐH Khoa học tự nhiên, ĐH Sư phạm Hà Nội, ĐHQG TpHCM - ĐH Khoa học Xã hội & Nhân văn"
            },
            {
                "id": 33,
                "ten_nghe": "Nhà toán học (2121) - Mathematician",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "I, C",
                "mo_ta": "Các nhà toán học và các nhà nghiên cứu liên quan tới toán học tiến hành nghiên cứu và phát triển các khái niệm toán học và tính toán rủi ro, các lí thuyết, các phương pháp và kĩ thuật vận hành.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐHQG Hà Nội- ĐH Khoa học Tự nhiên, ĐH Bách khoa Hà Nội, ĐHQG TpHCM- ĐH Khoa học Tự nhiên"
            },
            {
                "id": 34,
                "ten_nghe": "Nhà thống kê (2122) - Statistician",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "I, C",
                "mo_ta": "Nhà thống kê ứng dụng toán học vào phân tích số liệu, ví dụ như quyết định lựa chọn việc làm chịu ảnh hưởng lớn từ các yếu tố nào: mức lương hay thời hạn hợp đồng?",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Kinh tế quốc dân Hà Nội, ĐH Đà Nẵng- ĐH Kinh tế, ĐH Kinh tế TpHCM"
            },
            {
                "id": 35,
                "ten_nghe": "Thống kê bảo hiểm (2122) - Actuarial Scientist",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "I, C, E",
                "mo_ta": "Nhà thống kê bảo hiểm đảm nhiệm việc tính toán các rủi ro. Họ là những chuyên gia trong việc tính phí bảo hiểm đối với những dạng rủi ro khác nhau.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Kinh tế quốc dân, ĐH Lao động- Xã hội, ĐH Tôn Đức Thắng"
            },
            {
                "id": 36,
                "ten_nghe": "Nhà sinh vật học (2131) - Biologist",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "I, R",
                "mo_ta": "Nhà sinh vật học nghiên cứu về sự sống và các hệ sinh vật. Họ tiến hành nghiên cứu, cải tiến hoặc phát triển các lí thuyết và phương pháp vận hành cũng như áp dụng kiến thức khoa học liên quan.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐHQG Hà Nội - ĐH Khoa học tự nhiên, ĐH Bách Khoa Hà Nội, HV Nông nghiệp Hà Nội"
            },
            {
                "id": 37,
                "ten_nghe": "Nhà khoa học biển (2131) - Marine Scientist",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "I, R",
                "mo_ta": "Nhà khoa học biển chủ yếu làm việc ở đại dương. Tùy thuộc vào chuyên môn mà họ nghiên cứu những vật thể không có sự sống hoặc vật thể sống trong đại dương.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Khoa học và Công nghệ Hà Nội, ĐH Thủy lợi, ĐH Nha Trang"
            },
            {
                "id": 38,
                "ten_nghe": "Kĩ sư và kĩ thuật viên công nghệ sinh học (2131) - Engineer: Biotechnologist",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "I, R",
                "mo_ta": "Kĩ sư công nghệ sinh học áp dụng các nguyên tắc sinh học ở cấp độ “công nghiệp” để kiểm soát, cải tiến và quản lí các quá trình biến đổi về mặt sinh học tồn tại trong tự nhiên.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Bách Khoa Hà Nội, ĐH Nông Lâm Bắc Giang, ĐHQG TpHCM - ĐH khoa học tự nhiên"
            },
            {
                "id": 39,
                "ten_nghe": "Kĩ thuật y sinh - Biomedical Engineer",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "I, R",
                "mo_ta": "Kĩ thuật y sinh tiến hành nghiên cứu các khía cạnh khác nhau của con người hay các loài động vật nhằm kiểm tra, chứng minh hoặc điều chỉnh hệ thống lí thuyết về sự sống đã biết.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Bách Khoa Hà Nội, ĐH Y Hà Nội, ĐH Y dược TpHCM"
            },
            {
                "id": 40,
                "ten_nghe": "Nhà nông học (2132) - Agricultural Scientist",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "R, I",
                "mo_ta": "Dựa vào nguyên tắc hóa sinh, vi sinh học, di truyền học và các khoa học khác, nhà nông học tham gia nghiên cứu và phát triển các ứng dụng về các lĩnh vực nông nghiệp khác nhau.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "HV Nông nghiệp Hà Nội, ĐH Thái Nguyên - ĐH Nông lâm, ĐH Nông Lâm TpHCM"
            },
            {
                "id": 41,
                "ten_nghe": "Kĩ sư thủy sản (2132) - Engineer: Marine/ Fishery Scientists and Aquaculturists",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "R, I",
                "mo_ta": "Kĩ sư thủy sản chuyên về nuôi trồng, đánh bắt các loài cá và thủy sản khác. Họ có thể làm việc về thủy sản nước ngọt, nước lợ và nước mặn.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "HV Nông nghiệp Hà Nội, ĐH Nha Trang, ĐH Nông Lâm TpHCM"
            },
            {
                "id": 42,
                "ten_nghe": "Kĩ sư và kĩ thuật viên lâm nghiệp (2132) - Forestry Advisor",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "R, I",
                "mo_ta": "Kĩ sư và kĩ thuật viên lâm nghiệp cung cấp hỗ trợ kĩ thuật, tư vấn về các vấn đề và các phương thức lâm nghiệp.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Lâm nghiệp, ĐH Thái Nguyên – ĐH Nông Lâm, ĐH Nông Lâm TpHCM"
            },
            {
                "id": 43,
                "ten_nghe": "Chuyên gia bảo vệ môi trường (2133) - Environmental Specialist",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "I, R, S",
                "mo_ta": "Chuyên gia bảo vệ môi trường nghiên cứu, đánh giá và quản lí tác động của các hoạt động của con người đối với môi trường tự nhiên và nhân tạo.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Bách Khoa Hà Nội, ĐH Tài nguyên và Môi trường TpHCM, ĐH Cần Thơ"
            },
            {
                "id": 44,
                "ten_nghe": "Kĩ sư công nghiệp (2141) - Industrial Engineer",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "R, I, C",
                "mo_ta": "Kĩ sư quản lí sự vận hành của toàn bộ nhà máy, đảm bảo rằng các qui trình hoạt động hiệu quả, an toàn và có tính kinh tế.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Bách khoa Hà Nội, ĐH Công nghiệp Hà Nội, ĐH Sư phạm Kĩ thuật TpHCM"
            },
            {
                "id": 45,
                "ten_nghe": "Chuyên gia công nghệ thực phẩm và đồ uống (2141) - Food and Drink Technologist",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "R, I",
                "mo_ta": "Chuyên gia công nghệ thực phẩm và đồ uống cải tiến các kĩ thuật chế biến, bảo quản, sử dụng và đánh giá thành phần thực phẩm và đồ uống từ động thực vật hoặc nguyên liệu nhân tạo.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Bách Khoa Hà Nội, ĐH Công nghiệp Thực phẩm TpHCM, ĐH Nông lâm TP. HCM"
            },
            {
                "id": 46,
                "ten_nghe": "Kĩ sư xây dựng (2142) - Civil Engineer",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "R, I",
                "mo_ta": "Các kĩ sư xây dựng áp dụng toán học, vật lí và hóa học để xây dựng các công trình nhà ở, nhà thương mại, đường giao thông, cầu, đập nước, mạng lưới cấp nước, mạng lưới thoát nước, bến cảng, kênh rạch, bến, sân bay, hệ thống đường sắt.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Kiến trúc Hà Nội, ĐH Xây Dựng Hà Nội, ĐH Bách Khoa TpHCM"
            },
            {
                "id": 47,
                "ten_nghe": "Kĩ sư ô tô (2144) - Automobile Engineer",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "R, I",
                "mo_ta": "Kĩ sư ô tô thiết kế, thử nghiệm, phát triển và chỉ đạo sản xuất các loại ô tô như xe hơi, xe tải, xe buýt, xe bồn, xe đua…",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Bách Khoa Hà Nội, ĐH Công nghiệp Hà Nội, ĐH Sư phạm kĩ thuật TpHCM"
            },
            {
                "id": 48,
                "ten_nghe": "Kĩ sư cơ khí (2144) - Mechanical Engineer",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "R, I",
                "mo_ta": "Kĩ sư cơ khí làm công việc có liên quan tới quá trình lắp đặt, vận hành và bảo trì máy móc trong các ngành công nghiệp.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Bách khoa Hà Nội, ĐH Công nghiệp Hà Nội, ĐHQG TpHCM - ĐH Bách Khoa"
            },
            {
                "id": 49,
                "ten_nghe": "Kĩ sư hoá học (2145) - Chemical Engineer",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "I, R",
                "mo_ta": "Kĩ sư hóa học áp dụng các kiến thức hóa học, vật lí và toán học để biến đổi các hóa chất trong nguyên liệu, hóa chất tổng hợp thành các dạng hữu ích hơn hoặc có giá trị hơn.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Bách Khoa Hà Nội, ĐH Công nghiệp Hà Nội, ĐH Bách Khoa TpHCM"
            },
            {
                "id": 50,
                "ten_nghe": "Kĩ sư luyện kim (2146) - Metallurgical Engineer",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "R, I",
                "mo_ta": "Kĩ sư luyện kim là chuyên gia về công nghệ chế tạo kim loại và vận dụng các nguyên tắc vật lí để xử lí kim loại tuỳ theo mục đích ứng dụng.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Bách khoa Hà Nội, ĐHQG TpHCM - ĐH Bách Khoa, CĐN Cơ điện Luyện kim Thái Nguyên"
            },
            {
                "id": 51,
                "ten_nghe": "Kĩ sư vật liệu (2149) - Materials Engineer",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "I, R",
                "mo_ta": "Kĩ sư vật liệu nghiên cứu các tính chất của những loại vật liệu tự nhiên và tổng hợp như kim loại, gốm, sứ, polymer, gỗ và các nguồn tài nguyên khác.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Bách khoa Hà Nội, ĐH Khoa học Công nghệ Hà Nội, ĐHQG TpHCM - ĐH Bách Khoa"
            },
            {
                "id": 52,
                "ten_nghe": "Kĩ sư điện (2151) - Electrical Engineer",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "R, I",
                "mo_ta": "Kĩ sư điện làm công việc có liên quan tới việc phát và truyền tải điện. Họ lắp đặt, vận hành và duy trì mạng lưới điện.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Bách khoa Hà Nội, ĐH Điện lực, ĐHQG TpHCM - ĐH Bách Khoa"
            },
            {
                "id": 53,
                "ten_nghe": "Kĩ sư điện tử (2152) - Electronics Engineer",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "R, I",
                "mo_ta": "Các kĩ sư điện tử nghiên cứu, thiết kế và chỉ đạo xây dựng, bảo dưỡng và sửa chữa các hệ thống điện tử.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Bách Khoa Hà Nội, ĐH Công nghiệp TpHCM, ĐHQG TpHCM – ĐH Bách khoa"
            },
            {
                "id": 54,
                "ten_nghe": "Kĩ sư viễn thông (2153) - Engineer: Telecommunications",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "R, I, C",
                "mo_ta": "Các kĩ sư viễn thông tiến hành nghiên cứu, tư vấn, thiết kế, chỉ đạo việc xây dựng, vận hành, bảo dưỡng và sửa chữa các hệ thống và thiết bị viễn thông.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "HV Công nghệ bưu chính viễn thông Hà Nội, ĐH FPT, ĐH Bách khoa Hà Nội"
            },
            {
                "id": 55,
                "ten_nghe": "Kĩ sư vũ trụ, hàng không - Aerospace/Aeronautical Engineer",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "I, R",
                "mo_ta": "Kĩ sư vũ trụ, hàng không là chuyên gia trong việc thiết kế và sản xuất các loại thiết bị bay. Họ cũng thực hiện các công việc duy tu, bảo dưỡng máy bay.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Khoa học & Công nghệ Hà Nội, ĐH Bách khoa Hà Nội, ĐHQG TpHCM – ĐH Bách khoa"
            },
            {
                "id": 56,
                "ten_nghe": "Bác sĩ Thú y (2250) - Veterinarian",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "I, R, S",
                "mo_ta": "Chuyên gia thú y áp dụng các nguyên tắc y học để điều trị và kiểm soát dịch bệnh trong gia súc gia cầm và vật nuôi.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "HV Nông nghiệp Hà Nội, ĐH Nông lâm TpHCM, ĐH Tây Nguyên"
            },
            {
                "id": 57,
                "ten_nghe": "Kỹ thuật viên Thú y (3240) - Veterinarian technician",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "R, I, S",
                "mo_ta": "Kỹ thuật viên thú y thực hiện nhiệm vụ tư vấn, chẩn đoán, phòng ngừa và chữa bệnh thú y theo chỉ dẫn của bác sĩ thú y.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "Các trường trung cấp. cao đẳng có đào tạo nghề thú y, hoặc chăn nuôi thú y trong cả nước."
            },
            {
                "id": 58,
                "ten_nghe": "Dược sĩ (2262) - Pharmacist",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "I, C, S",
                "mo_ta": "Dược sĩ nghiên cứu, cải tiến, phát triển các khái niệm, học thuyết và phương pháp hoạt động dược phẩm bằng cách chuẩn bị, phân phối và bán dược phẩm và thuốc.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Dược Hà Nội, ĐH Y dược Huế, ĐH Y dược TpHCM"
            },
            {
                "id": 59,
                "ten_nghe": "Kế toán (2411, 3313, 3411) - Accountant",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "C, I",
                "mo_ta": "Kế toán theo dõi các hoạt động tài chính của một tổ chức. Họ lập kế hoạch, tổ chức, điều hành và thực hiện hệ thống kế toán cho tổ chức.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "HV Tài Chính, ĐH Kinh tế quốc dân, ĐH Kinh tế TpHCM"
            },
            {
                "id": 60,
                "ten_nghe": "Chuyên gia phân tích tài chính (2413) - Financial Analyst",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "I, C, E",
                "mo_ta": "Chuyên gia phân tích tài chính điều tra, nghiên cứu các quá trình tác động tới các hoạt động tài chính của khu vực công hoặc các tổ chức tư nhân.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "Các trường cao đẳng kinh tế, kĩ thuật; Các trường đại học kinh tế, tài chính trên toàn quốc"
            },
            {
                "id": 61,
                "ten_nghe": "Chuyên gia quản trị dầu khí - Administration Specialist: Oil and Gas",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "E, C, R",
                "mo_ta": "Chuyên gia quản trị dầu khí là chuyên gia lập kế hoạch và quản lí hoạt động khai thác dầu và khí đốt.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Dầu khí, CĐN Thương mại và Công nghiệp Hải Dương, CĐ Kinh tế đối ngoại TpHCM"
            },
            {
                "id": 62,
                "ten_nghe": "Chuyên gia quản trị giao thông (quản lí và điều hành giao thông vận tải) - Administration Specialist: Transport",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "E, C, R",
                "mo_ta": "Chuyên gia quản trị giao thông lưu giữ hồ sơ và quản lí vận hành các dịch vụ vận tải hành khách và hàng hóa trong các hệ thống giao thông đường bộ, đường không, đường sắt, đường thủy…",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Giao thông Vận tải Hà Nội, ĐH Giao thông Vận tải TpHCM, CĐN Đường sắt, Hà Nội"
            },
            {
                "id": 63,
                "ten_nghe": "Chuyên gia quản trị năng lượng - Administration Specialist: Energy Management",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "E, C, I",
                "mo_ta": "Chuyên gia quản trị năng lượng là những chuyên gia trong việc mua bán, trao đổi, phân phối và sử dụng năng lượng để đáp ứng các yêu cầu cụ thể.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Điện lực Hà Nội, CĐ Điện lực miền Trung, CĐ Điện lực TpHCM"
            },
            {
                "id": 64,
                "ten_nghe": "Chuyên gia phát triển phần mềm (2512) - Computer Scientist: Software Developer",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "I, R, C",
                "mo_ta": "Chuyên gia phát triển phần mềm nghiên cứu, phân tích và đánh giá các yêu cầu đối với các phần mềm ứng dụng sẵn có hoặc phần mềm và hệ điều hành mới.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Bách Khoa Hà Nội, ĐH FPT, ĐHQG TpHCM - ĐH Bách khoa"
            },
            {
                "id": 65,
                "ten_nghe": "Nhà kinh tế học (2631) - Economist",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "I, C, E",
                "mo_ta": "Nhà kinh tế học hiểu cách làm cho một quốc gia trở nên thịnh vượng bằng cách sử dụng nguồn lực của quốc gia đó một cách năng suất và hiệu quả.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Kinh tế quốc dân, ĐHQG Hà Nội – ĐH Kinh tế, ĐH Kinh tế TpHCM"
            },
            {
                "id": 66,
                "ten_nghe": "Chuyên viên thương mại quốc tế (2631) - International Trade (Exporter - Importer)",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "E, C",
                "mo_ta": "Đây là lĩnh vực liên quan tới nhiều khía cạnh của thương mại. Các hoạt động bao gồm: đàm phán hợp đồng thương mại, tạo điều kiện cho việc vận chuyển hàng hoá, phân phối sản phẩm và dịch vụ.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Kinh tế quốc dân, ĐH Ngoại thương, ĐH Mở TpHCM"
            },
            {
                "id": 67,
                "ten_nghe": "Chuyên viên ngân hàng, quỹ đầu tư (3312) - Investment Banker",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "E, I, C",
                "mo_ta": "Chuyên viên ngân hàng, quỹ đầu tư là các chuyên gia tạo ra các sản phẩm và dịch vụ tài chính (chẳng hạn như đề án quỹ tương hỗ).",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "HV Ngân hàng Hà Nội, ĐH Kinh tế quốc dân, ĐH Ngân hàng TpHCM"
            },
            {
                "id": 68,
                "ten_nghe": "Kĩ sư và kĩ thuật viên âm thanh (3521) - Sound Engineer",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "R, A, I",
                "mo_ta": "Kĩ sư và kĩ thuật viên kĩ thuật âm thanh vận hành máy móc, thiết bị để ghi lại, đồng bộ hoá, phối âm hoặc sao chép các hiệu ứng về âm thanh, giọng nói và âm nhạc.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Sân khấu điện ảnh Hà Nội, ĐH Sân khấu điện ảnh TpHCM, CĐ phát thanh truyền hình Hà Nội"
            },
            {
                "id": 69,
                "ten_nghe": "Nhân viên giao dịch ngân hàng (4211) - Bank Teller and Related Clerks",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "C, S",
                "mo_ta": "Nhân viên giao dịch ngân hàng và các nghề liên quan làm việc trực tiếp với khách hàng đến ngân hàng hoặc các bưu điện giao dịch, thực hiện các giao dịch liên quan tới nhận, gửi, chuyển, qui đổi và rút tiền.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "CĐ công thương Hà Nội, CĐ Giao thông vận tải, CĐ tài chính hải quan"
            },
            {
                "id": 70,
                "ten_nghe": "Giáo viên công nghệ thông tin (2356) - Information Technology Teacher",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "S, I, R",
                "mo_ta": "Giáo viên CNTT xây dựng chương trình, bố trí lịch học và thực hiện đào tạo về máy tính và CNTT cho người dùng không chuyên.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Bách khoa Hà Nội, ĐH SPKT Hưng Yên, ĐH FPT, ĐHQG TpHCM – ĐH Bách khoa"
            },
            {
                "id": 71,
                "ten_nghe": "Nhà thiết kế đồ họa và truyền thông đa phương tiện (2513) - Graphic and Multi Media Designer",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "A, R, I",
                "mo_ta": "Nhà Thiết kế đồ họa và truyền thông đa phương tiện kết hợp thiết kế và những kiến thức kỹ thuật để nghiên cứu, phân tích, đánh giá, thiết kế, lập trình và sửa đổi các trang web và các ứng dụng.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐHQG Hà Nội - ĐH Công nghệ, ĐH Mỹ thuật công nghiệp, ĐHQG TpHCM - ĐH Công nghệ thông tin"
            },
            {
                "id": 72,
                "ten_nghe": "Nhà Quản trị cơ sở dữ liệu và mạng máy tính (2521) - Computer database and network administrators",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "I, R, C",
                "mo_ta": "Quản trị cơ sở dữ liệu và mạng máy tính thiết kế, xây dựng, kiểm soát, hỗ trợ các hệ thống công nghệ thông tin để đảm bảo vận hành và an toàn.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Bách khoa Hà Nội, ĐH FPT, ĐHQG TpHCM – ĐH Bách khoa TpHCM"
            },
            {
                "id": 73,
                "ten_nghe": "Kỹ thuật viên công nghệ thông tin (3511) - ICT technician",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "R, I, C",
                "mo_ta": "Kỹ thuật viên vận hành công nghệ thông tin (CNTT) và truyền thông hỗ trợ việc xử lý, vận hành và quản lý thông tin và hệ thống kỹ thuật truyền thông hàng ngày.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "Các trường ĐH, CĐ, TC có đào tạo về CNTT, mạng máy tính trên cả nước"
            },
            {
                "id": 74,
                "ten_nghe": "Thủ quỹ (5230) - Treasurer",
                "nhom_nghe": "NHÓM NGHỀ PHÂN TÍCH - LOGIC",
                "holland_code": "C",
                "mo_ta": "Thủ quỹ là người kiểm soát toàn bộ hoạt động thu chi phát sinh trong doanh nghiệp như kiểm tra phiếu Thu, phiếu Chi, ký xác nhận, giao các liên, tạm ứng, …",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "Các trường TC có đào tạo tài chính hoặc kế toán, Các trung tâm GDNN"
            },
            {
                "id": 75,
                "ten_nghe": "Kĩ thuật viên bao bì (2149, 3139) - Packaging Technologists",
                "nhom_nghe": "NHÓM NGHỀ HÌNH HỌC - MÀU SẮC - THIẾT KẾ",
                "holland_code": "R, A, C",
                "mo_ta": "Kĩ thuật viên bao bì lập kế hoạch, triển khai và hướng dẫn kĩ thuật trong các hoạt động liên quan đến việc thiết kế, phát triển và sản xuất các loại bao bì.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "TCN Tư thục Kinh tế - Kĩ thuật Sài Gòn 3, TC An Đức"
            },
            {
                "id": 76,
                "ten_nghe": "Kĩ thuật viên in ấn (2149, 3139, 7321, 7322, 7323) - Printing Technologists",
                "nhom_nghe": "NHÓM NGHỀ HÌNH HỌC - MÀU SẮC - THIẾT KẾ",
                "holland_code": "R, C",
                "mo_ta": "Kĩ thuật viên in ấn tiến hành nghiên cứu, phát triển, thực hiện và giám sát qui trình in ấn đảm bảo chất lượng và hiệu quả.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "HV Báo chí và Tuyên truyền, CĐ In, TCN Tư thục Kinh tế Kĩ thuật Sài gòn 3"
            },
            {
                "id": 77,
                "ten_nghe": "Kĩ thuật viên ngành giấy (2149, 3139, 8143, 8172) - Paper Technologists",
                "nhom_nghe": "NHÓM NGHỀ HÌNH HỌC - MÀU SẮC - THIẾT KẾ",
                "holland_code": "R, I",
                "mo_ta": "Kĩ thuật viên giấy phụ trách công nghệ kĩ thuật trong quá trình sản xuất giấy và sản phẩm từ giấy.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "CĐN Công nghệ Giấy và Cơ điện Phú Thọ"
            },
            {
                "id": 78,
                "ten_nghe": "Kĩ thuật viên may mặc và công nghệ có liên quan (2141, 3149) - Garment and Related Trades Technicians",
                "nhom_nghe": "NHÓM NGHỀ HÌNH HỌC - MÀU SẮC - THIẾT KẾ",
                "holland_code": "R, C",
                "mo_ta": "Kĩ thuật viên may mặc và công nghệ có liên quan (sợi, dệt, nhuộm…) phụ trách công nghệ kĩ thuật trong quá trình sản xuất hàng vải sợi, dệt và may mặc đại trà.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "CĐ CN Dệt may thời trang Hà Nội, CĐN Vinatex Nam Định, CĐ Kinh tế -Kĩ thuật Vinatex TpHCM"
            },
            {
                "id": 79,
                "ten_nghe": "Kĩ thuật viên da giày (2141, 3149) - Leather and Footwear Technologists",
                "nhom_nghe": "NHÓM NGHỀ HÌNH HỌC - MÀU SẮC - THIẾT KẾ",
                "holland_code": "R, C",
                "mo_ta": "Kĩ thuật viên da giày phụ trách công nghệ kĩ thuật trong quá trình sản xuất các sản phẩm da giày, từ thuộc da và da lông thú, đến sản xuất thành phẩm cuối cùng.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Bách khoa Hà Nội, ĐH Công nghiệp thực phẩm TpHCM, CĐ Công thương TpHCM"
            },
            {
                "id": 80,
                "ten_nghe": "Thợ thẩm mĩ (Làm đẹp) (5141, 5142) - Cosmetologists (Beauticians)",
                "nhom_nghe": "NHÓM NGHỀ HÌNH HỌC - MÀU SẮC - THIẾT KẾ",
                "holland_code": "A, S, E",
                "mo_ta": "Thợ thẩm mĩ, còn gọi là thợ làm đẹp, cắt và tạo dáng tóc, râu, chăm sóc sắc đẹp, sử dụng mĩ phẩm và trang điểm, và thực hiện các dịch vụ và liệu pháp chăm sóc khác.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "Các trung tâm thẩm mĩ, trung tâm GDNN trong cả nước, CĐ Y Hà Nội"
            },
            {
                "id": 81,
                "ten_nghe": "Kiến trúc sư xây dựng (2161) - Architects (Building)",
                "nhom_nghe": "NHÓM NGHỀ HÌNH HỌC - MÀU SẮC - THIẾT KẾ",
                "holland_code": "A, R, I",
                "mo_ta": "Kiến trúc sư xây dựng thiết kế nhà ở, nhà thương mại, các công trình xây dựng dân dụng và công nghiệp; lập kế hoạch và giám sát thi công, bảo trì, mở rộng và cải tạo.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Kiến trúc Hà Nội, ĐH Xây dựng, ĐH Kiến trúc TP. Hồ Chí Minh"
            },
            {
                "id": 82,
                "ten_nghe": "Kiến trúc sư cảnh quan/ nhà thiết kế cảnh quan (2162) - Landscape Designers / Architects",
                "nhom_nghe": "NHÓM NGHỀ HÌNH HỌC - MÀU SẮC - THIẾT KẾ",
                "holland_code": "A, R",
                "mo_ta": "Kiến trúc sư cảnh quan, còn gọi là nhà thiết kế cảnh quan, qui hoạch, thiết kế, tổ chức thi công, quản lí, bảo dưỡng và phục hồi cảnh quan, đường nội bộ và không gian ngoài trời.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Kiến trúc Hà Nội, ĐH Xây dựng, ĐH Lâm nghiệp, ĐH Kiến trúc TpHCM"
            },
            {
                "id": 83,
                "ten_nghe": "Nhà thiết kế sản phẩm/ Mỹ thuật công nghiệp (2163) - Product/ Industrial Designers",
                "nhom_nghe": "NHÓM NGHỀ HÌNH HỌC - MÀU SẮC - THIẾT KẾ",
                "holland_code": "A, R, I",
                "mo_ta": "Nhà thiết kế sản phẩm, còn gọi là nhà thiết kế Mỹ thuật công nghiệp, thiết kế hình thức của các sản phẩm, chuẩn bị bản vẽ và các thông số của sản phẩm để đưa vào sản xuất.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Mỹ thuật Việt Nam, ĐH Mỹ thuật Công nghiệp, ĐH Kiến trúc"
            },
            {
                "id": 84,
                "ten_nghe": "Nhà thiết kế thời trang (2163) - Fashion Designers",
                "nhom_nghe": "NHÓM NGHỀ HÌNH HỌC - MÀU SẮC - THIẾT KẾ",
                "holland_code": "A, E, R",
                "mo_ta": "Nhà thiết kế thời trang thiết kế áo quần, giày dép, phụ kiện và tạo ra những bộ sưu tập và dòng sản phẩm thời trang.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Công nghiệp Dệt may Hà Nội, ĐH Mỹ thuật Công nghiệp, ĐH Công nghệ TpHCM"
            },
            {
                "id": 85,
                "ten_nghe": "Nhà trắc địa bản đồ (2165) - Cartographers and Surveyors",
                "nhom_nghe": "NHÓM NGHỀ HÌNH HỌC - MÀU SẮC - THIẾT KẾ",
                "holland_code": "R, I, C",
                "mo_ta": "Nhà trắc địa bản đồ sử dụng các phương pháp và kĩ thuật khảo sát để xác định vị trí chính xác của các phân vùng tự nhiên, phân vùng xây dựng, ranh giới đất, nước, trong lòng đất.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Mỏ địa chất, ĐH Tài nguyên và môi trường Hà Nội, ĐHQG TpHCM - ĐH Bách khoa"
            },
            {
                "id": 86,
                "ten_nghe": "Nhà thiết kế đồ họa và truyền thông đa phương tiện (2166) - Graphic and Multi Media Designers",
                "nhom_nghe": "NHÓM NGHỀ HÌNH HỌC - MÀU SẮC - THIẾT KẾ",
                "holland_code": "A, R, I",
                "mo_ta": "Nhà thiết kế đồ họa và truyền thông đa phương tiện thiết kế nội dung hình ảnh và âm thanh để truyền thông dưới dạng in ấn, phim, điện tử, kĩ thuật số và các phương tiện nghe nhìn khác.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Mỹ thuật công nghiệp, HV Bưu chính viễn thông, ĐH Công nghệ TpHCM"
            },
            {
                "id": 87,
                "ten_nghe": "Kĩ thuật viên vẽ kĩ thuật (3118) - Draughts persons",
                "nhom_nghe": "NHÓM NGHỀ HÌNH HỌC - MÀU SẮC - THIẾT KẾ",
                "holland_code": "R, C, A",
                "mo_ta": "Kĩ thuật viên vẽ kĩ thuật làm các bản vẽ kĩ thuật, bản đồ và bản minh họa dựa trên các phác thảo, kích thước và các số liệu khác; sao chép bản vẽ và hình lên bản kẽm để in ấn.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Kiến trúc Hà Nội, ĐH Mỹ thuật Công nghiệp, ĐH Mỹ thuật TP. Hồ Chí Minh"
            },
            {
                "id": 88,
                "ten_nghe": "Nhà nhiếp ảnh (3431) - Photographers",
                "nhom_nghe": "NHÓM NGHỀ HÌNH HỌC - MÀU SẮC - THIẾT KẾ",
                "holland_code": "A, R, E",
                "mo_ta": "Nhà nhiếp ảnh sử dụng khả năng tư duy, sáng tạo của bản thân và các kĩ thuật của máy ảnh để chụp ảnh. Họ có thể chụp hình ảnh tĩnh và động.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Sân khấu điện ảnh Hà Nội, CĐ Mỹ thuật trang trí Đồng Nai, CĐ Văn hóa nghệ thuật TpHCM"
            },
            {
                "id": 89,
                "ten_nghe": "Nhà thiết kế và trang trí nội thất (3432) - Interior Designers and Decorators",
                "nhom_nghe": "NHÓM NGHỀ HÌNH HỌC - MÀU SẮC - THIẾT KẾ",
                "holland_code": "A, E, R",
                "mo_ta": "Nhà thiết kế và trang trí nội thất khảo sát mặt bằng, thiết kế nội thất và ngoại thất, đồ dùng và đồ trang trí nhà ở, nhà thương mại, công trình công cộng và công nghiệp.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Mỹ thuật Hà Nội, ĐH Kiến trúc Hà Nội, ĐH Kiến trúc TpHCM"
            },
            {
                "id": 90,
                "ten_nghe": "Nhà thiết kế thủ công mĩ nghệ (3432) - Crafts Designers",
                "nhom_nghe": "NHÓM NGHỀ HÌNH HỌC - MÀU SẮC - THIẾT KẾ",
                "holland_code": "A, R",
                "mo_ta": "Nhà thiết kế thủ công mĩ nghệ thiết kế các sản phẩm thủ công mĩ nghệ để đảm bảo hài hòa các giá trị thẩm mĩ, văn hóa, công năng và phù hợp với các đối tượng khách hàng.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Kiến trúc Hà Nội, ĐH Mỹ thuật Việt Nam, ĐH Mỹ thuật công nghiệp"
            },
            {
                "id": 91,
                "ten_nghe": "Nghệ sĩ Mỹ thuật (2651) - Fine Artists",
                "nhom_nghe": "NHÓM NGHỀ HÌNH HỌC - MÀU SẮC - THIẾT KẾ",
                "holland_code": "A, I",
                "mo_ta": "Nghệ sĩ Mỹ thuật là người tạo ra các tác phẩm nghệ thuật thông qua các phương tiện khác nhau như màu vẽ, điêu khắc, nhiếp ảnh, sắp đặt vật thể…",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Mỹ thuật Việt Nam, ĐH Mỹ thuật Công nghiệp, ĐH Mỹ thuật TP. Hồ Chí Minh"
            },
            {
                "id": 92,
                "ten_nghe": "Nhà thiết kế quảng cáo (3435) - Commercial Artists",
                "nhom_nghe": "NHÓM NGHỀ HÌNH HỌC - MÀU SẮC - THIẾT KẾ",
                "holland_code": "A, E",
                "mo_ta": "Nhà thiết kế quảng cáo đưa ra ý tưởng, vẽ và thiết kế nên các hình ảnh mang tính biểu tượng để truyền tải thông điệp trong quảng cáo truyền thông.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Kiến trúc Hà Nội, ĐH Mỹ thuật Việt Nam, ĐH Mỹ thuật công nghiệp"
            },
            {
                "id": 93,
                "ten_nghe": "Nhà quay phim (3521) - Cinematographers",
                "nhom_nghe": "NHÓM NGHỀ HÌNH HỌC - MÀU SẮC - THIẾT KẾ",
                "holland_code": "A, R",
                "mo_ta": "Nhà quay phim là người ghi hình bộ phim, video, tác phẩm sân khấu, chương trình truyền hình và các sự kiện xã hội hay gia đình.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "HV Báo chí - tuyên truyền, ĐH Sân khấu điện ảnh Hà Nội, ĐH Sân khấu điện ảnh TpHCM"
            },
            {
                "id": 94,
                "ten_nghe": "Người làm vườn, vườn ươm và trồng hoa, cây cảnh (6113) - Gardeners, Horticultural and Nursery Growers",
                "nhom_nghe": "NHÓM NGHỀ HÌNH HỌC - MÀU SẮC - THIẾT KẾ",
                "holland_code": "R, A",
                "mo_ta": "Người làm vườn, vườn ươm và trồng hoa, cây cảnh lập kế hoạch và thực hiện các hoạt động cần thiết để trồng và chăm sóc hoa và cây trồng tạo cảnh quan.",
                "hoc_van_toi_thieu": "Bất kì",
                "cac_truong_dao_tao": "HV Nông nghiệp Hà Nội, ĐH Lâm nghiệp, ĐH Nông Lâm TpHCM"
            },
            {
                "id": 95,
                "ten_nghe": "Nhà thiết kế trang sức (7313) - Jewelry Designers",
                "nhom_nghe": "NHÓM NGHỀ HÌNH HỌC - MÀU SẮC - THIẾT KẾ",
                "holland_code": "A, R, E",
                "mo_ta": "Nhà thiết kế trang sức áp dụng các nguyên tắc nghệ thuật và khoa học để thiết kế các sản phẩm kim hoàn, đồ trang sức phục vụ cho trang điểm, nghi lễ, tôn giáo hoặc công nghiệp.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Mỹ thuật Việt Nam, ĐH Mỹ thuật Công nghiệp, ĐH Kiến trúc Hà Nội"
            },
            {
                "id": 96,
                "ten_nghe": "Thợ gốm sứ và thợ có liên quan (7314, 8181) - Potters and Related Workers",
                "nhom_nghe": "NHÓM NGHỀ HÌNH HỌC - MÀU SẮC - THIẾT KẾ",
                "holland_code": "R, A",
                "mo_ta": "Thợ gốm và các thợ có liên quan chuẩn bị đồ gốm, sứ, đất nung, thiết bị vệ sinh, gạch, ngói và mài bằng tay hoặc bằng máy.",
                "hoc_van_toi_thieu": "Bất kì",
                "cac_truong_dao_tao": "ĐH Mỹ thuật Việt Nam, ĐH Mỹ thuật Công nghiệp, ĐH Kiến trúc Hà Nội"
            },
            {
                "id": 97,
                "ten_nghe": "Thợ vẽ biển quảng cáo, thợ trang trí và thợ có liên quan (7316) - Sign writers, Decorative Painters and Related Workers",
                "nhom_nghe": "NHÓM NGHỀ HÌNH HỌC - MÀU SẮC - THIẾT KẾ",
                "holland_code": "R, A",
                "mo_ta": "Thợ vẽ biển quảng cáo, thợ trang trí và các thợ có liên quan trang trí các sản phẩm được làm từ gỗ, kim loại, vải dệt, thủy tinh, gốm và các nguyên vật liệu khác.",
                "hoc_van_toi_thieu": "Bất kì",
                "cac_truong_dao_tao": "Các trung tâm, trường GDNN, các công ty quảng cáo"
            },
            {
                "id": 98,
                "ten_nghe": "Thợ thủ công trong ngành đồ gỗ và trang trí nội thất (7213, 7313, 7314, 7315, 7316, 7317, 7521, 7522, 7523, 7319) - Handicraft Workers in Furniture and Home Furnishings Industries",
                "nhom_nghe": "NHÓM NGHỀ HÌNH HỌC - MÀU SẮC - THIẾT KẾ",
                "holland_code": "R, A",
                "mo_ta": "Thợ thủ công trong ngành đồ gỗ và trang trí nội thất áp dụng các kĩ thuật thủ công truyền thống để xử lí vật liệu gỗ, tre, nứa, song, mây, cói, đá, vỏ/ mai/ lông động vật, đất sét, cát thạch anh và các nguyên phụ liệu khác.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Mỹ thuật Việt Nam, ĐH Mỹ thuật Công nghiệp, ĐH Kiến trúc Hà Nội"
            },
            {
                "id": 99,
                "ten_nghe": "Thợ thủ công trong ngành dệt may và da giày (7318, 7531, 7532, 7533, 7535, 7536) - Handicraft Workers in Textile-Garment and Leather-Footwear Industries",
                "nhom_nghe": "NHÓM NGHỀ HÌNH HỌC - MÀU SẮC - THIẾT KẾ",
                "holland_code": "R, A",
                "mo_ta": "Thợ thủ công trong ngành dệt may và da giày áp dụng các kĩ thuật và hoa văn truyền thống để sản xuất vải dệt, chi tiết đan, thêu, đắp nổi và kĩ thuật thủ công khác trong sản phẩm may mặc và da giày thủ công.",
                "hoc_van_toi_thieu": "Bất kì",
                "cac_truong_dao_tao": "TCN An Dương, CĐ CN Dệt may thời trang Hà Nội, CĐ Kinh tế - Kĩ thuật Vinatex TpHCM"
            },
            {
                "id": 100,
                "ten_nghe": "Thợ vận hành máy sản xuất hàng dệt may và da giày (7533) - Machine Operators in Textile-Garment and Leather-Footwear Industries",
                "nhom_nghe": "NHÓM NGHỀ HÌNH HỌC - MÀU SẮC - THIẾT KẾ",
                "holland_code": "R, C",
                "mo_ta": "Thợ vận hành máy sản xuất hàng dệt may và da giày làm công việc vận hành và giám sát hoạt động của các máy móc thiết bị chế biến và xử lí sợi, vải, da và lông thú.",
                "hoc_van_toi_thieu": "Bất kì",
                "cac_truong_dao_tao": "TCN An Dương, CĐ CN Dệt may thời trang Hà Nội, CĐ Kinh tế - Kĩ thuật Vinatex TpHCM"
            },
            {
                "id": 101,
                "ten_nghe": "Bác sĩ y khoa (2211, 2212) - Allopathic Medical Doctor",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "I, S",
                "mo_ta": "Bác sĩ y khoa khám và chữa bệnh cho những người bị ốm, bệnh tật hoặc tai nạn thương tật khác. Họ cũng tiến hành nghiên cứu, cải tiến và phát triển các khái niệm, lí thuyết và phương pháp phòng và khám chữa bệnh.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Y Hà Nội, ĐH Y dược TpHCM, ĐH Y dược Huế, ĐH Y dược Cần Thơ"
            },
            {
                "id": 102,
                "ten_nghe": "Y tá và hộ sinh (2221, 2222) - Nurse and Midwife",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "S, I, R",
                "mo_ta": "Y tá hỗ trợ các bác sĩ khi họ thực hiện nhiệm vụ và phục vụ các bệnh nhân bị ốm, bị thương hoặc khuyết tật. Trong các y tá có hộ sinh là người hỗ trợ quá trình sinh nở, chăm sóc bà mẹ và trẻ em trước và sau khi sinh.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Y Hà Nội, ĐH Điều dưỡng Nam Định, ĐH Y khoa Phạm Ngọc Thạch"
            },
            {
                "id": 103,
                "ten_nghe": "Bác sĩ y học cổ truyền (2230) - Medical Doctor: Traditional Medicine",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "I, S, R",
                "mo_ta": "Bác sĩ y học cổ truyền khám, điều trị, phòng ngừa bệnh tật và chấn thương liên quan đến các bệnh thể chất và tinh thần cho bệnh nhân bằng phương pháp và thuốc y học cổ truyền.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "HV Y dược học cổ truyền Việt Nam, ĐH Y Hà Nội, ĐH Y dược TpHCM"
            },
            {
                "id": 104,
                "ten_nghe": "Nha sĩ (2261) - Dentist",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "I, R, S",
                "mo_ta": "Các nha sĩ, còn gọi là bác sĩ nha khoa, điều trị các bệnh và các rối loạn răng, nướu và mô mềm của miệng.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Y Hà Nội, ĐH Y dược TpHCM, ĐH Y dược Cần Thơ"
            },
            {
                "id": 105,
                "ten_nghe": "Chuyên gia phục hồi chức năng nghề nghiệp (2263) - Occupational Therapist",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "S, I, A",
                "mo_ta": "Chuyên gia phục hồi chức năng nghề nghiệp giúp đỡ bệnh nhân trong quá trình phục hồi nghề nghiệp sau khi bị bệnh hoặc tai nạn bằng cách đưa họ tham gia các công việc mang tính sáng tạo.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Y Hà Nội, ĐH Y Khoa Tokyo Việt Nam, ĐH Y dược TpHCM"
            },
            {
                "id": 106,
                "ten_nghe": "Chuyên gia vật lí trị liệu (2264, 3255) - Physiotherapist",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "S, R, I",
                "mo_ta": "Chuyên gia vật lí trị liệu tiến hành trị liệu các rối loạn về xương, cơ và các bộ phận của hệ tuần hoàn hoặc hệ thần kinh.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Kĩ thuật Y tế Hải Dương, HV Quân Y, ĐH Y dược Thành phố HCM"
            },
            {
                "id": 107,
                "ten_nghe": "Chuyên gia dinh dưỡng (2265) - Dietician and Nutritionist",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "S, I",
                "mo_ta": "Chuyên gia dinh dưỡng tiến hành nghiên cứu, cải tiến và phát triển các khái niệm, phương pháp thực hiện liên quan đến việc chuẩn bị, áp dụng các chế độ ăn uống cho điều trị và các mục đích khác.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Y Hà Nội, ĐH Y Dược Phạm Ngọc Thạch, ĐH Y Dược Cần Thơ"
            },
            {
                "id": 108,
                "ten_nghe": "Bác sĩ thính học và trị liệu ngôn ngữ (2266) - Audiologist and Speech Therapist",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "S, I",
                "mo_ta": "Bác sĩ thính học và đặc trị các khuyết tật về ngôn ngữ xác định loại và mức độ khuyết tật ảnh hưởng đến chức năng nghe, nói, giao tiếp và nhai nuốt của con người.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Y Hà Nội, ĐHQG Hà Nội - ĐH Giáo dục, ĐH Y dược TpHCM"
            },
            {
                "id": 109,
                "ten_nghe": "Giáo viên mầm non (2342, 3620) - Pre-School Teacher",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "S, A",
                "mo_ta": "Giáo viên mầm non dạy trẻ em từ 3 đến 6 tuổi. Đây là giai đoạn đặt nền móng cho việc học tập và là giai đoạn quan trọng đối với quá trình giáo dục một con người.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "Các trường CĐ và ĐH Sư phạm trên toàn quốc"
            },
            {
                "id": 110,
                "ten_nghe": "Giáo viên tiểu học (2341, 3610) - Primary School Teacher",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "S, A",
                "mo_ta": "Giáo viên tiểu học dạy trẻ em từ lớp 1 đến lớp 5. Họ chủ yếu tập trung xây dựng cơ sở vững chắc cho kĩ năng đọc, viết, tính toán cùng với các kĩ năng khác.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "Các trường ĐH Sư phạm trên toàn quốc"
            },
            {
                "id": 111,
                "ten_nghe": "Giáo viên giáo dục đặc biệt (2352, 3630) - Special Needs Teacher",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "S, A",
                "mo_ta": "Giáo viên giáo dục đặc biệt dạy cho trẻ em, thanh thiếu niên, người lớn có khuyết tật về thể chất hay trí tuệ, hoặc những người có khó khăn về học tập.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "CĐ Sư phạm Trung ương, ĐH Sư phạm Hà Nội, ĐH Sư phạm TpHCM"
            },
            {
                "id": 112,
                "ten_nghe": "Chuyên gia quản trị doanh nghiệp nhỏ và vừa (242) - Administration Specialist: Small & Medium Business Management",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "E, C, S",
                "mo_ta": "Chuyên gia quản trị doanh nghiệp nhỏ và vừa (DNNVV) là chuyên gia trong việc thành lập và phát triển DNNVV, hoặc trực tiếp quản lí mọi mặt hoạt động sản xuất kinh doanh của DNNVV.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "Tất cả các trường ĐH có chuyên ngành quản trị kinh doanh, quản trị doanh nghiệp như ĐH kinh tế quốc dân, ĐH thương mại, ĐH kinh tế TpHCM…"
            },
            {
                "id": 113,
                "ten_nghe": "Chuyên gia quản trị kinh doanh nông nghiệp (242) - Agribusiness Management",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "E, R, C",
                "mo_ta": "Chuyên gia quản trị kinh doanh nông nghiệp là người nghiên cứu, tổ chức, quản lí kinh doanh trong lĩnh vực sản xuất nông nghiệp cũng như đưa sản phẩm nông nghiệp đến tay người tiêu dùng.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "HV Nông nghiệp Hà Nội, ĐH Thái Nguyên - ĐH Nông lâm, ĐH Nông lâm TpHCM"
            },
            {
                "id": 114,
                "ten_nghe": "Quản lí bán hàng và marketing (1221, 243) - Sales and Marketing Manager",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "E, S, C",
                "mo_ta": "Nhà quản lí bán hàng và marketing lập kế hoạch, chỉ đạo và điều phối hệ thống phân phối nhằm đảm bảo hàng hóa của doanh nghiệp đến nhà kho, cửa hàng và cuối cùng là đến với người tiêu dùng.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Quốc tế Bắc Hà, ĐH Công nghiệp TpHCM, ĐH Đà Nẵng – ĐH Kinh tế"
            },
            {
                "id": 115,
                "ten_nghe": "Quản lí bán lẻ và bán buôn (1420, 1844, 243) - Retail and Wholesale Manager",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "E, C",
                "mo_ta": "Nhà quản lí bán lẻ và bán buôn làm công tác quản lí chung trong doanh nghiệp bán buôn và bán lẻ, làm chủ đại lí bán buôn hoặc các doanh nghiệp bán lẻ.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "TC đa ngành Vạn Xuân, ĐH Tài chính – Marketing"
            },
            {
                "id": 116,
                "ten_nghe": "Quản lí khách sạn, nhà hàng (1825, 1845, 242) - Hotel/ HORECA Manager",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "E, S, C",
                "mo_ta": "Quản lí khách sạn, nhà hàng lập kế hoạch, chỉ đạo và phối hợp các hoạt động kinh doanh của khách sạn, nhà hàng theo lĩnh vực chuyên môn.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "CĐ Du lịch thuộc Bộ VHTT&DL, ĐH FPT, ĐH Công nghệ TpHCM"
            },
            {
                "id": 117,
                "ten_nghe": "Quản lí nông nghiệp (1821, 1841, 242) - Agriculture Manager",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "E, R",
                "mo_ta": "Nhà quản lí nông nghiệp là người làm chủ hoặc đại diện cho chủ sở hữu các trang trại, nông trường. Họ chịu trách nhiệm quản lí chung, lập kế hoạch, chỉ đạo và điều phối các hoạt động sản xuất kinh doanh.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Nông Lâm Thái Nguyên, ĐH Kinh tế quốc dân, ĐH Nông Lâm TpHCM"
            },
            {
                "id": 118,
                "ten_nghe": "Quản trị bệnh viện (1829,1839, 1849, 242)",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "E, S, C",
                "mo_ta": "Nhà quản trị bệnh viện là chuyên gia về quản trị và quản lí của ngành y tế. Họ đảm bảo rằng các dịch vụ chăm sóc sức khỏe được thực hiện một cách hiệu quả cho bệnh nhân và gia đình.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Thăng Long, ĐH Hùng Vương TpHCM"
            },
            {
                "id": 119,
                "ten_nghe": "Quản lí nhân sự (1212) - Human Resource Manager",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "E, S, C",
                "mo_ta": "Nhà quản lí nhân sự lập kế hoạch, điều phối các hoạt động của một tổ chức để thực hiện chiến lược nhân lực một cách tốt nhất.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Nội vụ Hà Nội, ĐH Công Đoàn, ĐH Lao động xã hội"
            },
            {
                "id": 120,
                "ten_nghe": "Chuyên gia quản lí đô thị (2614) - Administration Specialist: Urban Management",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "E, C, I",
                "mo_ta": "Chuyên gia quản lí đô thị xây dựng và triển khai các kế hoạch, chiến lược liên quan đến sử dụng đất, thiết kế môi trường đô thị, kể cả hệ thống giao thông.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "HV Tài chính, ĐH Kiến trúc Hà Nội, ĐH Xây dựng Hà Nội"
            },
            {
                "id": 121,
                "ten_nghe": "Cán bộ quan hệ lao động - Labour Relations Officer",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "S, E, C",
                "mo_ta": "Cán bộ quan hệ lao động là chuyên gia trong lĩnh vực xây dựng và duy trì quan hệ lao động hài hòa giữa người sử dụng lao động và người lao động của một doanh nghiệp.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Công đoàn (Hà Nội), ĐH Lao động xã hội (Hà Nội), ĐH Tôn Đức Thắng"
            },
            {
                "id": 122,
                "ten_nghe": "Chuyên gia dịch vụ pháp lí (2619) - Legal Services Specialist",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "C, S, I",
                "mo_ta": "Chuyên gia dịch vụ pháp lí, còn gọi là thư kí luật, sử dụng kiến thức chuyên môn để trợ giúp các chuyên gia pháp lí trong thông tin liên lạc, tài liệu, hỗ trợ nội bộ.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Luật Hà Nội, ĐH Luật TpHCM, ĐH Huế - ĐH Luật"
            },
            {
                "id": 123,
                "ten_nghe": "Nhà tâm lí học (2634) - Psychologist",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "I, S",
                "mo_ta": "Nhà tâm lí học nghiên cứu các quá trình tâm lí và hành vi của cá nhân hoặc nhóm người. Họ áp dụng kiến thức này để thúc đẩy, điều chỉnh sự phát triển của cá nhân, xã hội, giáo dục hoặc nghề nghiệp.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐHQG Hà Nội - ĐH KHXH-NV, ĐH Sư phạm Hà Nội, ĐH Sư phạm TpHCM"
            },
            {
                "id": 124,
                "ten_nghe": "Nhà tư vấn tâm lí (2635) - Counsellor",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "S, I, A",
                "mo_ta": "Nhà tư vấn tâm lí hướng dẫn hoặc tư vấn cho các cá nhân nhằm giúp họ đối phó với những khó khăn về tâm lí, tình cảm và căng thẳng liên quan đến cuộc sống hàng ngày.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐHQG Hà Nội - ĐH KHXH-NV, ĐH Sư phạm Hà Nội, ĐH Sư phạm TpHCM"
            },
            {
                "id": 125,
                "ten_nghe": "Nhà tư vấn nghề nghiệp (2635) - Career Counsellor",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "S, E, I",
                "mo_ta": "Nhà tư vấn nghề nghiệp áp dụng các nguyên tắc tâm lí học nghề nghiệp để giúp khách hàng hiểu bản thân mình, hiểu thế giới nghề nghiệp, xây dựng các phương án chọn nghề và chuẩn bị cho nghề nghiệp.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐHQG Hà Nội - ĐH Giáo dục, ĐH Sư phạm Hà Nội, ĐH Sư phạm TpHCM"
            },
            {
                "id": 126,
                "ten_nghe": "Kĩ thuật viên chẩn đoán hình ảnh (3211, 3212) - Medical Technologist: Medical Imaging",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "R, I, S",
                "mo_ta": "Kĩ thuật viên chẩn đoán hình ảnh phụ trách các thiết bị chẩn đoán hình ảnh trợ giúp các bác sĩ xác định về tình trạng bệnh tật có thể có của bệnh nhân.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Y Hà Nội, ĐH Y Hải Phòng, ĐH Y Phạm Ngọc Thạch"
            },
            {
                "id": 127,
                "ten_nghe": "Kĩ thuật viên nhãn khoa (3254) - Medical Technologist: Optometry",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "R, I, S",
                "mo_ta": "Kĩ thuật viên nhãn khoa, còn gọi là y tá nhãn khoa, hỗ trợ chẩn đoán, điều trị các vấn đề sức khỏe liên quan đến thị giác và mắt.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "Viện Mắt Trung ương"
            },
            {
                "id": 128,
                "ten_nghe": "Kĩ thuật viên y tế (321) - Medical Technologist",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "R, I, C",
                "mo_ta": "Kỹ thuật Y Sinh (KTYS) là một lĩnh vực liên ngành ứng dụng kỹ thuật tiên tiến vào việc tạo ra các phương pháp nghiên cứu và thiết bị phục vụ cho sức khỏe.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Y khoa Tokyo Việt Nam, ĐH Kỹ thuật y tế Hải Dương"
            },
            {
                "id": 129,
                "ten_nghe": "Đại lí bảo hiểm (3321) - Insurance Agent",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "E, S, C",
                "mo_ta": "Đại lí bảo hiểm bán bảo hiểm nhân thọ, tai nạn, ô tô, trách nhiệm dân sự, hỏa hoạn, hàng hải và sản phẩm bảo hiểm khác cho các khách hàng mới và khách hàng hiện hữu.",
                "hoc_van_toi_thieu": "Bất kì",
                "cac_truong_dao_tao": "ĐH Lao động xã hội, ĐH Kinh tế quốc dân (Hà Nội), ĐH Hải phòng"
            },
            {
                "id": 130,
                "ten_nghe": "Nhà quản lí sự kiện (3332) - Event Manager",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "E, S, C",
                "mo_ta": "Nhà quản lí sự kiện làm công việc quản lí và điều hành sự kiện. Họ tổ chức và phối hợp các dịch vụ cho các hội nghị, sự kiện, tiệc, đám cưới, triển lãm, hội thảo và các sự kiện đặc biệt.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "HV Báo chí và Tuyên truyền, ĐH Văn Hóa Hà Nội, ĐH Văn Hóa TpHCM"
            },
            {
                "id": 131,
                "ten_nghe": "Chuyên gia quản trị bất động sản (3334) - Administration Specialist: Real Estate",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "E, C",
                "mo_ta": "Chuyên gia quản trị bất động sản, còn gọi là đại lí bất động sản và quản lí tài sản, thay mặt khách hàng sắp xếp việc mua, bán, cho thuê bất động sản, tài sản và hưởng lợi trên cơ sở nhận hoa hồng.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Xây dựng Hà Nội, ĐH Tài chính-Quản trị kinh doanh, ĐH Kinh tế quốc dân"
            },
            {
                "id": 132,
                "ten_nghe": "Nhân viên công tác xã hội (3412) - Social Worker",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "S, E",
                "mo_ta": "Nhân viên công tác xã hội làm việc với các nhóm và cộng đồng. Họ tìm hiểu các vấn đề xã hội, hướng dẫn cho đối tượng gặp khó khăn trong các vấn đề xã hội.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐHQG Hà Nội - ĐH KHXH-NV, ĐH Công đoàn, ĐH Lao động – xã hội"
            },
            {
                "id": 133,
                "ten_nghe": "Đại lí du lịch và lữ hành (4221) - Travel and Tourism Agent",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "E, S, C",
                "mo_ta": "Đại lí du lịch và lữ hành tiến hành tư vấn và tổ chức tour du lịch, lập kế hoạch hành trình và lịch trình đi lại, ăn nghỉ cho khách du lịch.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "CĐ Du lịch Hà Nội, ĐH Văn hóa Hà Nội, ĐH Mở Hà Nội"
            },
            {
                "id": 134,
                "ten_nghe": "Tiếp viên hàng không hoặc tiếp viên trên phương tiện vận tải - Air Hostess / Steward",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "S, E, R",
                "mo_ta": "Tiếp viên, còn gọi là chiêu đãi viên, là người trực tiếp cung cấp dịch vụ cá nhân nhằm đảm bảo sự an toàn và thoải mái của hành khách.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "HV Hàng không TpHCM, HV Hàng không Vietjet, CĐN hàng hải TPHCM"
            },
            {
                "id": 135,
                "ten_nghe": "Thợ chế biến thực phẩm (7513) – Food Processing Workers",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "R, C",
                "mo_ta": "Thợ chế biến thực phẩm là người tham gia trực tiếp vào công việc chế biến thực phẩm của các cơ sở sản xuất, kiểm tra chất lượng sản phẩm của dây chuyền chế biến.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc THPT",
                "cac_truong_dao_tao": "Các trường TC và CĐ đào tạo chế biến thực phẩm"
            },
            {
                "id": 136,
                "ten_nghe": "Đầu bếp - Cook",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "R, A, E",
                "mo_ta": "Thợ đầu bếp chế biến và làm các món ăn, hiểu biết về dinh dưỡng, đảm bảo các món ăn ngon, an toàn thực phẩm và đầy đủ chất dinh dưỡng cần thiết.",
                "hoc_van_toi_thieu": "Bất kì",
                "cac_truong_dao_tao": "Các Trung tâm, Trường Trung cấp và cao đẳng trên cả nước. Các nhà hàng và khách sạn lớn cũng đào tạo đầu bếp cho mình"
            },
            {
                "id": 137,
                "ten_nghe": "Phụ bếp - Cook Assistant",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "R",
                "mo_ta": "Phụ bếp giúp đầu bếp, bếp trưởng, bếp phó thực hiện chế biến và làm các món ăn và các hoạt động khác liên quan đến nấu nướng.",
                "hoc_van_toi_thieu": "Bất kì",
                "cac_truong_dao_tao": "Học nghề từ các đầu bếp tại các khách sạn, nhà hàng…"
            },
            {
                "id": 138,
                "ten_nghe": "Phục vụ bàn - Waiter",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "S, R",
                "mo_ta": "Bồi bàn là người giới thiệu, tư vấn và phục vụ các món ăn, đồ uống cho khách hàng.",
                "hoc_van_toi_thieu": "Bất kì",
                "cac_truong_dao_tao": "Các trường, trung tâm GDNN trên cả nước"
            },
            {
                "id": 139,
                "ten_nghe": "Lễ tân – Receptionists",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "S, C, E",
                "mo_ta": "Lễ tân là người tiếp xúc, đón tiếp khách đến làm việc, tiếp nhận và xử lí thông tin ban đầu, hỗ trợ các hoạt động của cơ quan với khách hàng.",
                "hoc_van_toi_thieu": "Bất kì",
                "cac_truong_dao_tao": "Cao đẳng du lịch Hà Nội; Cao đẳng Thương mại và Du lịch Hà Nội; ĐH Văn Hiến"
            },
            {
                "id": 140,
                "ten_nghe": "Nhân viên văn phòng - Office clerk",
                "nhom_nghe": "NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI",
                "holland_code": "C, S",
                "mo_ta": "Nhân viên văn phòng làm việc trong lĩnh vực hành chính văn phòng, thực hiện các công việc thuộc hành chính của các cơ quan, tổ chức, công ty…",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT",
                "cac_truong_dao_tao": "CĐ Viễn Đông, CĐ kinh tế công nghiệp Hà Nội, CĐ cộng đồng Vĩnh Long"
            },
            {
                "id": 141,
                "ten_nghe": "Kĩ sư bảo dưỡng máy bay (2144) - Aircraft Maintenance Engineer",
                "nhom_nghe": "NHÓM NGHỀ THỂ CHẤT – CƠ KHÍ",
                "holland_code": "R, I, C",
                "mo_ta": "Các kĩ sư bảo dưỡng máy bay đảm bảo máy bay đủ điều kiện hoạt động. Họ chỉ đạo, giám sát và thực hiện việc bảo trì, sửa chữa và đại tu kết cấu và động cơ máy bay.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Bách khoa Hà Nội, HV Phòng không-Không quân, HV Hàng Không Việt Nam"
            },
            {
                "id": 142,
                "ten_nghe": "Kĩ sư mỏ (2146) - Engineer Mining",
                "nhom_nghe": "NHÓM NGHỀ THỂ CHẤT – CƠ KHÍ",
                "holland_code": "R, I",
                "mo_ta": "Kĩ sư mỏ áp dụng các nguyên tắc vật lí, địa chất và hóa học để thăm dò, khai thác và chế biến khoáng sản thiên nhiên.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Mỏ địa chất, ĐHQG Hà Nội – ĐH Khoa học tự nhiên, ĐH công nghiệp Quảng Ninh"
            },
            {
                "id": 143,
                "ten_nghe": "Kĩ sư khai thác dầu khí (2146)",
                "nhom_nghe": "NHÓM NGHỀ THỂ CHẤT – CƠ KHÍ",
                "holland_code": "R, I",
                "mo_ta": "Kĩ sư khai thác dầu khí ứng dụng các nguyên tắc vật lí, địa chất và hóa học để phát hiện và khai thác dầu và khí từ các mỏ dầu khí dưới lòng đất và dưới biển.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Bách khoa Hà Nội, ĐH Mỏ địa chất, ĐH Dầu khí"
            },
            {
                "id": 144,
                "ten_nghe": "Kĩ thuật viên chỉnh hình và phục hình (2221) - Orthotist and Prosthetist",
                "nhom_nghe": "NHÓM NGHỀ THỂ CHẤT – CƠ KHÍ",
                "holland_code": "R, S, I",
                "mo_ta": "Kĩ thuật viên chỉnh hình và phục hình phục vụ, chăm sóc bệnh nhân khuyết tật ở các bộ phận chân, tay, cột sống hay bị mất một phần hoặc toàn bộ chân, tay.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Lao động – Xã hội, Trung tâm đào tạo kĩ thuật viên chỉnh hình Việt Nam (Bộ LĐTBXH)"
            },
            {
                "id": 145,
                "ten_nghe": "Kĩ thuật viên cơ – điện tử - Mechatronics",
                "nhom_nghe": "NHÓM NGHỀ THỂ CHẤT – CƠ KHÍ",
                "holland_code": "R, I",
                "mo_ta": "Kĩ thuật viên cơ - điện tử làm việc trong một lĩnh vực liên quan tới nhiều ngành nghề kĩ thuật như kĩ thuật cơ khí, kĩ thuật điện, kĩ thuật điều khiển và kĩ thuật máy tính.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Bách Khoa Hà Nội, CĐ Công nghệ Viettronics, ĐH Công nghiệp TPHCM"
            },
            {
                "id": 146,
                "ten_nghe": "Kĩ sư hàng hải - Merchant Navy Engineer",
                "nhom_nghe": "NHÓM NGHỀ THỂ CHẤT – CƠ KHÍ",
                "holland_code": "R, I",
                "mo_ta": "Kĩ sư hàng hải kiểm soát và tham gia hoạt động điều khiển, bảo trì, bảo dưỡng, sửa chữa thiết bị cơ khí, điện, điện tử và máy móc trên tàu.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH hàng hải, ĐH Giao thông vận tải TpHCM, ĐH Nha trang"
            },
            {
                "id": 147,
                "ten_nghe": "Công an (2445) - Police Officers",
                "nhom_nghe": "NHÓM NGHỀ THỂ CHẤT – CƠ KHÍ",
                "holland_code": "R, S, E",
                "mo_ta": "Công an thi hành các qui định luật pháp và trật tự xã hội, đảm bảo ổn định cho xã hội, trật tự kỉ cương, bảo vệ lợi ích của nhà nước trong xã hội.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "HV Cảnh sát, HV An Ninh, Các trường CĐ Cảnh sát"
            },
            {
                "id": 148,
                "ten_nghe": "Vũ công và biên đạo múa (2653) - Dancer and Choreographer",
                "nhom_nghe": "NHÓM NGHỀ THỂ CHẤT – CƠ KHÍ",
                "holland_code": "A, R",
                "mo_ta": "Biên đạo múa sáng tác các điệu múa. Vũ công là người biểu diễn các điệu múa.",
                "hoc_van_toi_thieu": "Bất kì",
                "cac_truong_dao_tao": "HV Múa Việt Nam, ĐH Văn hóa nghệ thuật quân đội, ĐH Sân khấu-Điện ảnh"
            },
            {
                "id": 149,
                "ten_nghe": "Kĩ thuật xây dựng (3112) - Civil Engineering Technician",
                "nhom_nghe": "NHÓM NGHỀ THỂ CHẤT – CƠ KHÍ",
                "holland_code": "R, I, C",
                "mo_ta": "Cán bộ kĩ thuật xây dựng thực hiện các nhiệm vụ kĩ thuật trong nghiên cứu kĩ thuật dân dụng, thiết kế, xây dựng, thực hiện, duy tu và sửa chữa các nhà cao tầng.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Kiến trúc Hà Nội, ĐH Xây Dựng, ĐHQG TpHCM - ĐH Bách Khoa"
            },
            {
                "id": 150,
                "ten_nghe": "Kĩ thuật thủy lợi - Irrigation technicians",
                "nhom_nghe": "NHÓM NGHỀ THỂ CHẤT – CƠ KHÍ",
                "holland_code": "R, I",
                "mo_ta": "Cán bộ kĩ thuật thủy lợi lập qui hoạch, thiết kế và duy tu các hệ thống vận chuyển và phân phối nước cho các vùng sản xuất nông nghiệp và các cụm dân cư.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "HV Thủy lợi, CĐN Cơ điện và Thủy lợi, CĐN Cơ giới và Thủy lợi"
            },
            {
                "id": 151,
                "ten_nghe": "Kĩ thuật điện trong công nghệ thông tin và truyền thông (3113) - Electrical Engineering Technicians (Information-Communication Technology)",
                "nhom_nghe": "NHÓM NGHỀ THỂ CHẤT – CƠ KHÍ",
                "holland_code": "R, I, C",
                "mo_ta": "Cán bộ kĩ thuật điện trong ngành CNTT&TT làm công tác kĩ thuật về hệ thống điện của các thiết bị CNTT&TT. Họ lắp đặt, bảo trì, vận hành và sửa chữa hệ thống điện của máy tính, điện thoại…",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "HV Công nghệ bưu chính viễn thông Hà Nội, ĐH FPT, ĐHQG TpHCM - ĐH Bách khoa"
            },
            {
                "id": 152,
                "ten_nghe": "Kĩ thuật điện trong phát và truyền tải điện (3113, 3131) - Electrical Engineering Technician and Operator (Power Generation and Transmission)",
                "nhom_nghe": "NHÓM NGHỀ THỂ CHẤT – CƠ KHÍ",
                "holland_code": "R, C",
                "mo_ta": "Cán bộ kĩ thuật điện trong phát và truyền tải điện làm công việc vận hành bảng điều khiển và máy móc thiết bị của nhà máy phát điện và các công ty truyền tải.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Bách khoa Hà Nội, ĐH Điện lực, CĐ Điện lực TpHCM"
            },
            {
                "id": 153,
                "ten_nghe": "Kĩ thuật tua-bin (3113) - Electrical Engineering Technician (Turbines)",
                "nhom_nghe": "NHÓM NGHỀ THỂ CHẤT – CƠ KHÍ",
                "holland_code": "R, I",
                "mo_ta": "Tua-bin là các thiết bị cơ khí sản xuất năng lượng bằng cách xoay nhờ các tác động gió, khí hoặc chất lỏng. Cán bộ kĩ thuật tua-bin làm công việc lắp đặt, bảo trì và sửa chữa các thiết bị này.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "CĐN Công nghiệp Việt Bắc-Vinacomin Thái Nguyên, CĐN LICOGI Tp Hải Dương, TCN Nghiệp vụ Bình Dương"
            },
            {
                "id": 154,
                "ten_nghe": "Kĩ thuật viên phần cứng máy tính - Computer Hardware Technologist",
                "nhom_nghe": "NHÓM NGHỀ THỂ CHẤT – CƠ KHÍ",
                "holland_code": "R, I, C",
                "mo_ta": "Các kĩ thuật viên trong lĩnh vực này cung cấp hỗ trợ kĩ thuật cho người sử dụng một cách trực tiếp hoặc thông qua điện thoại, thư điện tử hoặc các thiết bị điện tử khác.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Bách Khoa Hà Nội, ĐH An Giang, ĐH Hoa Sen"
            },
            {
                "id": 155,
                "ten_nghe": "Kĩ thuật viên điện đài trên tàu thủy (3114) - Ship Radio Officer",
                "nhom_nghe": "NHÓM NGHỀ THỂ CHẤT – CƠ KHÍ",
                "holland_code": "R, C",
                "mo_ta": "Kĩ thuật viên điện đài trên tàu thủy điều hành hoạt động của thiết bị vô tuyến trên tàu để nhận và truyền tải điện văn mã hóa từ điện thoại vô tuyến hoặc hệ thống điện báo vô tuyến.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Hàng hải Hải phòng, Cao đẳng Hàng hải Đà Nẵng"
            },
            {
                "id": 156,
                "ten_nghe": "Kĩ thuật viên cơ khí trong sản xuất, lắp ráp và sửa chữa (3115) - Mechanical Engineering Technicians (Manufacture, Assembly and Repair)",
                "nhom_nghe": "NHÓM NGHỀ THỂ CHẤT – CƠ KHÍ",
                "holland_code": "R, I",
                "mo_ta": "Kĩ thuật viên cơ khí trong sản xuất, lắp ráp và sửa chữa là những kĩ thuật viên được đào tạo về sản xuất, lắp ráp, bảo trì và sửa chữa các bộ phận cấu thành của tất cả các loại máy móc cơ khí.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "CĐN Cơ điện Hà Nội, CĐ Kĩ thuật Công nghệ Bách khoa, CĐ Kĩ thuật Lí Tự Trọng TpHCM"
            },
            {
                "id": 157,
                "ten_nghe": "Kĩ thuật viên giao thông vận tải - Transport Technicians",
                "nhom_nghe": "NHÓM NGHỀ THỂ CHẤT – CƠ KHÍ",
                "holland_code": "R, C",
                "mo_ta": "Kĩ thuật viên giao thông vận tải là những người làm kĩ thuật chuyên môn trong việc đảm bảo hoạt động thông suốt của tất cả các loại phương tiện vận tải công cộng.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "CĐN Đường sắt Hà Nội, ĐH Giao thông Vận tải Hà Nội, ĐH Giao thông Vận tải TpHCM"
            },
            {
                "id": 158,
                "ten_nghe": "Kĩ thuật viên khai thác mỏ (3117) - Mining Technicians",
                "nhom_nghe": "NHÓM NGHỀ THỂ CHẤT – CƠ KHÍ",
                "holland_code": "R, I",
                "mo_ta": "Kĩ thuật viên khai thác mỏ làm công việc hỗ trợ kĩ thuật để thăm dò khoáng sản, kim loại và dầu khí trên đất liền hoặc dưới biển.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "CDN Vinacomin, ĐH Mỏ - Địa chất, ĐH Huế - ĐH Khoa Học"
            },
            {
                "id": 159,
                "ten_nghe": "Kĩ thuật viên luyện kim (3117) - Metallurgical Technician",
                "nhom_nghe": "NHÓM NGHỀ THỂ CHẤT – CƠ KHÍ",
                "holland_code": "R, I",
                "mo_ta": "Kĩ thuật viên luyện kim làm công việc hỗ trợ kĩ thuật trong nghiên cứu và phát triển các phương pháp tiến bộ để chiết xuất kim loại từ quặng và luyện kim loại.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "CĐ Cơ điện Luyện kim Thái Nguyên, CĐ Công nghiệp Việt Bắc-Vinacomin, ĐH Bách Khoa TpHCM"
            },
            {
                "id": 160,
                "ten_nghe": "Vận hành máy móc (3131-35-39, 8111-14, 8122, 8131-32, 8142-43, 8151-57-59, 8160, 8171-72, 8181-83-89) - Mechanical Engineering Technician: Operator",
                "nhom_nghe": "NHÓM NGHỀ THỂ CHẤT – CƠ KHÍ",
                "holland_code": "R",
                "mo_ta": "Kĩ thuật viên kĩ thuật cơ khí vận hành máy móc giám sát, vận hành và kiểm tra tại chỗ hoặc bằng điều khiển từ xa hoạt động của các loại máy móc và thiết bị.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "TCN Cơ khí 1 Hà Nội, CĐN Công nghệ cao Hà Nội, CĐ Kĩ thuật Lí Tự Trọng TpHCM"
            },
            {
                "id": 161,
                "ten_nghe": "Kĩ thuật viên vận hành thiết bị lọc dầu và khí thiên nhiên (3134) - Petroleum and Natural Gas Refining Plant Operator",
                "nhom_nghe": "NHÓM NGHỀ THỂ CHẤT – CƠ KHÍ",
                "holland_code": "R, C",
                "mo_ta": "Kĩ thuật viên vận hành nhà máy lọc dầu và khí thiên nhiên làm công tác vận hành và giám sát hoạt động của các hệ thống máy móc thiết bị, điều chỉnh, duy tu bảo dưỡng các thiết bị chế biến, lọc, tinh chế.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "CĐN Dầu Khí thành phố Vũng Tàu, CĐN Kĩ thuật công nghệ Dung Quất, ĐH Công nghiệp TpHCM"
            },
            {
                "id": 162,
                "ten_nghe": "Kĩ thuật viên bảo vệ môi trường (3141) - Environmental Protection Technician",
                "nhom_nghe": "NHÓM NGHỀ THỂ CHẤT – CƠ KHÍ",
                "holland_code": "I, R",
                "mo_ta": "Kĩ thuật viên bảo vệ môi trường (BVMT) tiến hành các xét nghiệm trong phòng thí nghiệm và trên thực địa để giám sát môi trường và phát hiện nguồn gốc vấn đề.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "TC Kinh tế tài nguyên và môi trường, CĐ Sơn La, CĐ Cần Thơ"
            },
            {
                "id": 163,
                "ten_nghe": "Kĩ thuật viên lâm nghiệp (3143) - Forester",
                "nhom_nghe": "NHÓM NGHỀ THỂ CHẤT – CƠ KHÍ",
                "holland_code": "R, I",
                "mo_ta": "Kĩ thuật viên lâm nghiệp thực hiện các hoạt động nuôi dưỡng, bảo tồn và khai thác rừng khi cần thiết để bán hoặc phân phối các sản phẩm lâm nghiệp.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "CĐ Nông lâm Đông Bắc, ĐH Lâm nghiệp, ĐH Tây Nguyên"
            },
            {
                "id": 164,
                "ten_nghe": "Điều khiển phương tiện đường thủy (3152) - Merchant Navy: Mariner",
                "nhom_nghe": "NHÓM NGHỀ THỂ CHẤT – CƠ KHÍ",
                "holland_code": "R, E",
                "mo_ta": "Hoa tiêu và nhân viên văn phòng trên tàu chỉ huy và điều khiển tàu thủy và các tàu chở hàng tương tự, thực hiện các chức năng liên quan trên biển.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "CĐ Hàng hải, ĐH Hàng hải, ĐH Giao thông vận tải TpHCM"
            },
            {
                "id": 165,
                "ten_nghe": "Phi công (3153) - Pilot",
                "nhom_nghe": "NHÓM NGHỀ THỂ CHẤT – CƠ KHÍ",
                "holland_code": "R, I, C",
                "mo_ta": "Phi công phương tiện bay và kĩ thuật viên hỗ trợ liên quan kiểm soát hoạt động của các thiết bị cơ khí, điện và điện tử để điều khiển phương tiện bay.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "HV Hàng Không Việt Nam, Trường Sĩ quan không quân (Nha trang), HV Hàng Không VietJet"
            },
            {
                "id": 166,
                "ten_nghe": "Kiểm soát viên không lưu (3154) - Air Traffic Controller",
                "nhom_nghe": "NHÓM NGHỀ THỂ CHẤT – CƠ KHÍ",
                "holland_code": "C, S, R",
                "mo_ta": "Kiểm soát viên không lưu, còn gọi là kiểm soát viên giao thông đường hàng không, hướng dẫn hướng bay trên không trung, và dưới mặt đất qua các thiết bị như đài, ra-đa hay hệ thống đèn.",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "Các trường CĐ, ĐH trên cả nước. Công ty Quản lí bay miền Bắc, miền Trung, miền Nam"
            },
            {
                "id": 167,
                "ten_nghe": "Kĩ thuật viên y tế: công nghệ y học hạt nhân (3211, 3212) - Medical Technologist: Nuclear Medicine Technology",
                "nhom_nghe": "NHÓM NGHỀ THỂ CHẤT – CƠ KHÍ",
                "holland_code": "I, R",
                "mo_ta": "Kĩ thuật viên công nghệ y học hạt nhân làm công việc vận hành máy móc liên quan đến y học hạt nhân, như máy chụp cắt lớp, chụp cộng hưởng từ, máy chạy tia gamma...",
                "hoc_van_toi_thieu": "Tốt nghiệp THPT hoặc tương đương",
                "cac_truong_dao_tao": "ĐHQG Hà Nội - ĐH Khoa học tự nhiên, ĐHQG TpHCM - ĐH Khoa học tự nhiên, ĐH Đà Lạt"
            },
            {
                "id": 168,
                "ten_nghe": "Kĩ thuật viên phòng xét nghiệm (3212) - Laboratory Technician",
                "nhom_nghe": "NHÓM NGHỀ THỂ CHẤT – CƠ KHÍ",
                "holland_code": "I, C",
                "mo_ta": "Kĩ thuật viên phòng xét nghiệm trong các bệnh viện, cơ sở y tế, pháp y, còn gọi là kĩ thuật viên phòng thí nghiệm y tế, tiến hành các xét nghiệm sinh hóa, kiểm tra bằng kính hiển vi và soi vi khuẩn.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Thái Nguyên - ĐH Y dược, ĐH Kĩ thuật y tế Hải Dương, ĐH Y dược Cần Thơ"
            },
            {
                "id": 169,
                "ten_nghe": "Kĩ thuật viên y tế: kĩ thuật viên phẫu thuật (3221) - Medical Technologist: Surgical Technology",
                "nhom_nghe": "NHÓM NGHỀ THỂ CHẤT – CƠ KHÍ",
                "holland_code": "R, I, S",
                "mo_ta": "Kĩ thuật viên phẫu thuật, còn là kĩ thuật viên phòng mổ, làm việc dưới sự giám sát của bác sĩ phẫu thuật, y tá, bác sĩ gây mê hoặc nhân viên phẫu thuật khác.",
                "hoc_van_toi_thieu": "Tốt nghiệp THCS hoặc tương đương",
                "cac_truong_dao_tao": "ĐH Y Hà Nội, ĐH Thành Tây, ĐH Điều dưỡng Nam Định"
            },
        ];

// --- NEW: Map for Holland Code descriptions ---
const hollandCodeMap = {
    'R': 'Realistic (Kỹ thuật)',
    'I': 'Investigative (Nghiên cứu)',
    'A': 'Artistic (Nghệ thuật)',
    'S': 'Social (Xã hội)',
    'E': 'Enterprising (Quản lý)',
    'C': 'Conventional (Nghiệp vụ)'
};

// --- DOM ELEMENTS (will be assigned on initialization) ---
let jobListingsContainer, paginationContainer, searchInput, groupFilter, educationFilter, hollandFilter, noResults, clearFiltersButton;

// --- STATE ---
let jobSearchCurrentPage = 1;
const jobsPerPage = 9;
let currentFilteredJobs = [...jobData];
let jobSearchInitialized = false;

// --- FUNCTIONS ---

function toggleJobSearch() {
    const container = document.getElementById('jobSearchContainer');
    container.classList.toggle('hidden');
    
    // If showing the container, initialize the job search logic (if not already done)
    if (!container.classList.contains('hidden')) {
        initializeJobSearch();
    }
}

function initializeJobSearch() {
    if (jobSearchInitialized) return;

    // Get elements from the DOM
    jobListingsContainer = document.getElementById('jobListings');
    paginationContainer = document.getElementById('pagination');
    searchInput = document.getElementById('searchInput');
    groupFilter = document.getElementById('groupFilter');
    educationFilter = document.getElementById('educationFilter');
    hollandFilter = document.getElementById('hollandFilter');
    noResults = document.getElementById('noResults');
    clearFiltersButton = document.getElementById('clearFilters');

    // Populate filters and set up event listeners
    populateFilters();
    displayPage();

    searchInput.addEventListener('input', applyFiltersAndSearch);
    groupFilter.addEventListener('change', applyFiltersAndSearch);
    educationFilter.addEventListener('change', applyFiltersAndSearch);
    hollandFilter.addEventListener('change', applyFiltersAndSearch);
    clearFiltersButton.addEventListener('click', clearAllFilters);
    
    // Event delegation for "Show More" / "Collapse" buttons
    jobListingsContainer.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('show-more-btn')) {
            const button = e.target;
            const card = button.closest('.job-card');
            const details = card.querySelector('.details-content');
            
            if (details.style.maxHeight) {
                // Collapse the details
                details.style.maxHeight = null;
                button.textContent = 'Hiển thị thêm';
            } else {
                // Expand the details
                details.style.maxHeight = details.scrollHeight + "px";
                button.textContent = 'Ẩn bớt';
            }
        }
    });

    jobSearchInitialized = true; // Mark as initialized
}

function renderJobs() {
    jobListingsContainer.innerHTML = ''; 

    if (currentFilteredJobs.length === 0) {
        noResults.classList.remove('hidden');
        jobListingsContainer.classList.add('hidden');
    } else {
        noResults.classList.add('hidden');
        jobListingsContainer.classList.remove('hidden');
    }

    const startIndex = (jobSearchCurrentPage - 1) * jobsPerPage;
    const endIndex = startIndex + jobsPerPage;
    const paginatedJobs = currentFilteredJobs.slice(startIndex, endIndex);

    paginatedJobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col';
        
        jobCard.innerHTML = `
            <div>
                <h2 class="text-xl font-bold text-blue-700 mb-2">${job.ten_nghe}</h2>
                <p class="text-sm font-semibold text-gray-600 mb-1">${job.nhom_nghe}</p>
                <p class="text-sm font-medium text-purple-600 mb-4">Mã Holland: <span class="font-semibold">${job.holland_code || 'N/A'}</span></p>
            </div>
            
            <div class="details-content">
                <div class="pt-4 border-t border-gray-200">
                    <p class="text-gray-700 mb-4">${job.mo_ta}</p>
                    <p class="text-sm text-gray-600 mb-2"><span class="font-semibold">Học vấn tối thiểu:</span> ${job.hoc_van_toi_thieu}</p>
                    <p class="text-sm text-gray-600"><span class="font-semibold">Trường đào tạo ví dụ:</span> ${job.cac_truong_dao_tao}</p>
                </div>
            </div>

            <div class="mt-auto pt-4">
                 <button class="show-more-btn w-full text-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
                    Hiển thị thêm
                 </button>
            </div>
        `;
        jobListingsContainer.appendChild(jobCard);
    });
}

function renderPaginationControls() {
    paginationContainer.innerHTML = '';
    const totalPages = Math.ceil(currentFilteredJobs.length / jobsPerPage);

    if (totalPages <= 1) return;

    const prevButton = document.createElement('button');
    prevButton.innerHTML = '« Trước';
    prevButton.className = 'pagination-btn px-4 py-2 mx-1 text-gray-700 bg-white rounded-lg border border-gray-300 hover:bg-gray-100';
    prevButton.disabled = jobSearchCurrentPage === 1;
    prevButton.addEventListener('click', () => {
        if (jobSearchCurrentPage > 1) {
            jobSearchCurrentPage--;
            displayPage();
        }
    });
    paginationContainer.appendChild(prevButton);

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.className = 'pagination-btn px-4 py-2 mx-1 text-gray-700 bg-white rounded-lg border border-gray-300 hover:bg-gray-100';
        if (i === jobSearchCurrentPage) {
            pageButton.classList.add('active');
        }
        pageButton.addEventListener('click', () => {
            jobSearchCurrentPage = i;
            displayPage();
        });
        paginationContainer.appendChild(pageButton);
    }

    const nextButton = document.createElement('button');
    nextButton.innerHTML = 'Sau »';
    nextButton.className = 'pagination-btn px-4 py-2 mx-1 text-gray-700 bg-white rounded-lg border border-gray-300 hover:bg-gray-100';
    nextButton.disabled = jobSearchCurrentPage === totalPages;
    nextButton.addEventListener('click', () => {
        if (jobSearchCurrentPage < totalPages) {
            jobSearchCurrentPage++;
            displayPage();
        }
    });
    paginationContainer.appendChild(nextButton);
}

function populateFilters() {
    const groups = [...new Set(jobData.map(job => job.nhom_nghe))].sort();
    const educations = [...new Set(jobData.map(job => job.hoc_van_toi_thieu))].sort();
    const hollandCodes = [...new Set(jobData.flatMap(job => (job.holland_code || "").split(',').map(code => code.trim())))].sort();

    groups.forEach(group => groupFilter.appendChild(new Option(group, group)));
    educations.forEach(edu => educationFilter.appendChild(new Option(edu, edu)));
    
    // UPDATED: Use the map to create descriptive options
    hollandCodes.forEach(code => {
        if (code) {
            const description = hollandCodeMap[code] || ''; // Get description or empty string
            const optionText = description ? `${code} - ${description}` : code;
            hollandFilter.appendChild(new Option(optionText, code));
        }
    });
}


function displayPage() {
    renderJobs();
    renderPaginationControls();
    document.getElementById('jobSearchContainer').scrollTo({ top: 0, behavior: 'smooth' });
}

function applyFiltersAndSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedGroup = groupFilter.value;
    const selectedEducation = educationFilter.value;
    const selectedHolland = hollandFilter.value;

    currentFilteredJobs = jobData.filter(job => {
        const matchesSearch = job.ten_nghe.toLowerCase().includes(searchTerm) || job.mo_ta.toLowerCase().includes(searchTerm);
        const matchesGroup = !selectedGroup || job.nhom_nghe === selectedGroup;
        const matchesEducation = !selectedEducation || job.hoc_van_toi_thieu === selectedEducation;
        const jobHollandCodes = (job.holland_code || "").split(',').map(c => c.trim());
        const matchesHolland = !selectedHolland || jobHollandCodes.includes(selectedHolland);
        
        return matchesSearch && matchesGroup && matchesEducation && matchesHolland;
    });
    
    jobSearchCurrentPage = 1; 
    displayPage();
}

function clearAllFilters() {
    searchInput.value = '';
    groupFilter.value = '';
    educationFilter.value = '';
    hollandFilter.value = '';
    applyFiltersAndSearch();
}