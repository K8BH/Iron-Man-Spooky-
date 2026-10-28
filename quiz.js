document.addEventListener('DOMContentLoaded', () => {
    const qtext = document.getElementById('q-text'), qCount = document.getElementById('q-count'), opts = document.getElementById('options');
    if (qtext) {
        let idx = 0, score = 0;
        const data = [
            { q: "A rouge Ultron drone shows up at your door on halloween holding a pillowcase. what is optimal stark protocol?" , 
                o: ["Give arc reactor" , "drop candy bars", "repulsor blast"] , 
                c: 2
            },
            {
                q:"Thor Drops Mjolnir on you bathroom scale. What does the dislay read??",
                o:["overload Error", "Worthiness required", "150 lbs"],
                c: 1
            },
            {
                q:"Loki offers u a Free Iphone!! Whats Your move??",
                o:["Take it!", "dodge dagger","say thanks"],
                c:1
            },
            {
                q:"Hulk stubs his toe.Whats ur reaction?",
                o:["Run away","say calm down","tiny bandge-aid"],
                c:0
            },
            {
                q:"Spidey runs out of web fluid mid-air.Target??",
                o:["Dumpster","flap arms","pejion flock"],
                c:0
            },
            {
                q:"Cap Asks u if u get tat refrence.Did u??",
                o:["Yes Sir","no idea sir","whats that?"],
                c:0
            }

        ];
        function renderQuestion() {
            if (idx >= data.length) {
                qtext.textContent =`Protocol Ended :score ${score} / ${data.length}`;
                if (qCount) qCount.textContent = "done";
                opts.innerHTML = '<button class="quiz-btn" onclick="location.reload()">restart</button>';
                return;
            }
            const item = data[idx];
            if (qCount) qCount.textContent = `query 0${idx + 1} / 0${data.length}`;
            qtext.textContent = item.q;
            opts.innerHTML = '';
            item.o.forEach((optText, i) => {
                const btn = document.createElement('button');
                btn.className = 'quiz-btn';
                btn.textContent = `> ${optText}`;
                btn.addEventListener('click', () => {
                    if (i === item.c) score++;
                    idx++;
                    renderQuestion();

                });
                opts.appendChild(btn);
            });
        }
        renderQuestion();
 
    }
});