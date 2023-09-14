let quote1 =
        "Programming is the art of algorithm design and the craft of debugging errant code. – Ellen Ullman";
      let quote2 =
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. ― Martin Fowler";
      let quote3 = "Confusion is part of programming. ― Felienne Hermans";
      let quote4 =
        "Software is like s--: it’s better when it’s free. – Linus Torvalds";
      let quote5 = "When the programmers get drunk, says to my code & your code cheers.";
      let quote6 =
        "Everybody should learn to program a computer because it teaches you how to think. – Steve Jobs";
      let quote7 =
        "Programmers seem to be changing the world. It would be a relief, for them and for all of us, if they knew something about it.  – Ellen Ullman";
      let quote8 =
        "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program. – Linus Torvalds";
      let quote9 =
        "Programmer: A machine that turns coffee into code. – Anonymous";
      let quote10 =
        "When I wrote this code, only God and I understood what I did. Now only God knows.  – Anonymous";
      let quote11 = "There is always one more bug to fix.  – Ellen Ullman";
      let quote12 =
        "If debugging is the process of removing bugs, then programming must be the process of putting them in. – Sam Redwine";
      let quote13 = "Talk is cheap. Show me the code. ― Linus Torvalds";

      // end on 13 number because it's holy number +

      const textArray = [
        quote1,
        quote2,
        quote3,
        quote4,
        quote5,
        quote6,
        quote7,
        quote8,
        quote9,
        quote10,
        quote11,
        quote12,
        quote13,
      ];
      let speed = 50; // Adjust typing speed as needed
      let eraseSpeed = 20; // Adjust erasing speed as needed
      let currentIndex = 0;
      let isErasing = false;
      let text = "";
      const textLink = document.querySelector(".quote-text");

      function startTyping() {
        if (currentIndex < textArray.length) {
          if (!isErasing) {
            text += textArray[currentIndex].charAt(text.length);
            textLink.innerHTML = text;
            if (text === textArray[currentIndex]) {
              isErasing = true;
              setTimeout(startErasing, 1000); // Wait 1 second before erasing
            } else {
              setTimeout(startTyping, speed);
            }
          } else {
            text = text.slice(0, -1); // Remove the last character
            textLink.innerHTML = text;
            if (text === "") {
              isErasing = false;
              currentIndex++;
              setTimeout(startTyping, 1000); // Wait 1 second before typing the next string
            } else {
              setTimeout(startErasing, eraseSpeed);
            }
          }
        }else{
            currentIndex = 0;
            startTyping()
        }
      }

      function startErasing() {
        setTimeout(startTyping, 0); // Start typing the next string
      }

      startTyping(); // Start the animation