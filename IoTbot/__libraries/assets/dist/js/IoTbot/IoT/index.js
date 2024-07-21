function Ajax() {
  input = $("#userinput").val();
  var new_row = document.createElement("div");
  new_row.setAttribute("class", "container text-end user ");
  new_row.setAttribute("id", "Profile");
  const node = document.createTextNode($("#userinput").val());
  new_row.appendChild(node);
  document.body.appendChild(new_row);
  $("#userinput").val("");

  elem = document.createElement("img");
  new_row.class = "container text-end User";
  elem.src = "/Cratoss/IoTbot/__libraries/__images/User.png";
  elem.height = "50";
  elem.width = "50";
  elem.alt = "User";
  elem.setAttribute("class", "rounded-circle p-2");
  new_row.appendChild(elem);
  document.body.appendChild(new_row);

  const outputContainer = document.createElement("div");
  outputContainer.setAttribute("class", "container AI");
  outputContainer.setAttribute("id", "Profile");
  elem = document.createElement("img");
  outputContainer.class = "AI";
  elem.src = "/Cratoss/IoTbot/__libraries/__images/AI.png";
  elem.height = "50";
  elem.width = "50";
  elem.alt = "AI";
  elem.setAttribute("class", "rounded-circle p-2");
  outputContainer.appendChild(elem);
  const animation_ = document.createElement("div");
  animation_.setAttribute("id", "typingIndicator");
  outputContainer.appendChild(animation_);
  document.body.appendChild(outputContainer);
  starttypeanimation();

  $.ajax({
    type: "post",
    url: "/Cratoss/IoTbot/__libraries/ajax.php",
    data: {
      userinput: input,
    },
    success: function (response) {
      console.log("Raw response:", response);
      result_ = JSON.parse(response);
      stoptypeanimation();
      $('#typingIndicator').remove();
      const outputText = result_["output"];

      // Create a container for the formatted output
      const formattedOutput = document.createElement("div");
      formattedOutput.setAttribute("class", "formatted-output");

      // Parse the output text
      const sections = parseOutput(outputText);

      // Create elements for each section
      for (const [title, content] of Object.entries(sections)) {
        const section = document.createElement("div");
        section.setAttribute("class", "output-section");

        const titleElem = document.createElement("h3");
        titleElem.textContent = title;
        section.appendChild(titleElem);

        if (title.toLowerCase().includes("code")) {
          const codeOutput = document.createElement("pre");
          codeOutput.setAttribute("class", "code-output");
          const codeElem = document.createElement("code");
          codeElem.innerHTML = content;
          codeOutput.appendChild(codeElem);
          
          // Add copy button for code section
          const codeCopyBtn = createCopyButton(content);
          codeCopyBtn.setAttribute("class", "btn btn-primary code-copy-btn");
          section.appendChild(codeCopyBtn);
          
          section.appendChild(codeOutput);
        } else {
          const contentElem = document.createElement("div");
          contentElem.innerHTML = content;
          section.appendChild(contentElem);
        }

        formattedOutput.appendChild(section);
      }

      outputContainer.appendChild(formattedOutput);
      document.body.appendChild(outputContainer);

      // Add copy button for entire response
      var responseCopyBtn = createCopyButton(result_['output']);
      responseCopyBtn.setAttribute("class", "btn btn-primary response-copy-btn");
      outputContainer.appendChild(responseCopyBtn);

      window.scrollTo(0, document.body.scrollHeight);
    },
  });
}

function createCopyButton(text) {
  const btn = document.createElement("button");
  btn.textContent = "Copy";
  btn.addEventListener("click", function () {
    Copy(text);
    this.textContent = "Copied!";
    setTimeout(() => this.textContent = "Copy", 1000);
  });
  return btn;
}

function Copy(text) {
  navigator.clipboard.writeText(text).then(function() {
    console.log('Copying to clipboard was successful!');
  }, function(err) {
    console.error('Could not copy text: ', err);
  });
}

function starttypeanimation() {
  $("#typingIndicator").text("Typing....");
}

function stoptypeanimation() {
  $("#typingIndicator").text("");
}

function parseOutput(text) {
  const sections = {};
  let currentSection = "Description";
  let lines = text.split('\n');
  let inCodeBlock = false;

  for (let line of lines) {
    if (line.startsWith('**') && line.endsWith('**')) {
      currentSection = line.replace(/\*\*/g, '').trim();
      sections[currentSection] = "";
    } else if (line.trim() === '```') {
      inCodeBlock = !inCodeBlock;
      sections[currentSection] += inCodeBlock ? '<pre><code>' : '</code></pre>';
    } else {
      if (!inCodeBlock) {
        // Replace ** with <strong> tags for bold text
        line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      }
      sections[currentSection] += line + "\n";
    }
  }

  return sections;
}