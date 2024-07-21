document.addEventListener('DOMContentLoaded', function() {
  function Ajax() {
      const input = $("#userinput").val();
      if (!input.trim()) return;  // Prevent empty messages

      appendMessage('user', input);
      $("#userinput").val("");

      // Show typing indicator
      appendMessage('ai', '<div class="typing-indicator"><span></span><span></span><span></span></div>');

      $.ajax({
          type: "post",
          url: "/Cratoss/IoTbot/__libraries/ajax.php",
          data: { userinput: input },
          success: function (response) {
              console.log("Raw response:", response);
              const result = JSON.parse(response);
              
              // Remove typing indicator
              $('.ai:last-child').remove();

              appendMessage('ai', formatOutput(result.output));
          },
          error: function(jqXHR, textStatus, errorThrown) {
              console.error("Ajax request failed:", textStatus, errorThrown);
              
              // Remove typing indicator
              $('.ai:last-child').remove();

              appendMessage('ai', "Sorry, I encountered an error. Please try again.");
          }
      });
  }

  function appendMessage(type, content) {
      const chatContainer = document.getElementById('chat-container');
      if (!chatContainer) {
          console.error("Chat container not found!");
          return;
      }

      const messageDiv = document.createElement('div');
      messageDiv.className = `message ${type}`;

      const avatar = document.createElement('img');
      avatar.src = `/Cratoss/IoTbot/__libraries/__images/${type === 'user' ? 'User' : 'AI'}.png`;
      avatar.alt = type === 'user' ? 'User' : 'AI';
      avatar.className = 'avatar';

      const messageContent = document.createElement('div');
      messageContent.className = 'message-content';
      messageContent.innerHTML = content;

      if (type === 'ai') {
          const copyButton = document.createElement('button');
          copyButton.className = 'copy-btn';
          copyButton.textContent = 'Copy';
          copyButton.onclick = function() { copyToClipboard(this); };
          messageContent.appendChild(copyButton);
      }

      if (type === 'user') {
          messageDiv.appendChild(messageContent);
          messageDiv.appendChild(avatar);
      } else {
          messageDiv.appendChild(avatar);
          messageDiv.appendChild(messageContent);
      }

      chatContainer.appendChild(messageDiv);
      scrollToBottom();
  }

  function formatOutput(text) {
      const sections = parseOutput(text);
      let formattedHtml = '';

      for (const [title, content] of Object.entries(sections)) {
          formattedHtml += `
              <div class="output-section">
                  <h3>${title}</h3>
                  ${title.toLowerCase().includes("code") ? 
                      `<pre><code>${content}</code></pre>` :
                      `<div>${content}</div>`}
              </div>
          `;
      }

      return wrapCodeBlocks(formattedHtml);
  }

  function parseOutput(text) {
      const sections = {};
      let currentSection = "";
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
                  line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
              }
              sections[currentSection] += line + "\n";
          }
      }

      return sections;
  }

  function wrapCodeBlocks(html) {
      return html.replace(/<div>([\s\S]*?)<\/div>/g, function(match, p1) {
          if (p1.includes('```')) {
              return '<pre><code>' + p1.replace(/```/g, '') + '</code></pre>';
          }
          return match;
      });
  }

  function copyToClipboard(button) {
      const messageContent = button.closest('.message-content');
      const textToCopy = messageContent.innerText.replace('Copy', '').trim();

      navigator.clipboard.writeText(textToCopy).then(function() {
          button.textContent = "Copied!";
          setTimeout(() => button.textContent = "Copy", 1000);
      }, function(err) {
          console.error('Could not copy text: ', err);
      });
  }

  function scrollToBottom() {
      const chatContainer = document.getElementById('chat-container');
      chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  // Event listener for Enter key
  const userinput = document.getElementById("userinput");
  if (userinput) {
      userinput.addEventListener("keypress", function(event) {
          if (event.key === "Enter") {
              event.preventDefault();
              Ajax();
          }
      });
  } else {
      console.error("User input element not found!");
  }
});