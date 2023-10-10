let anim= lottie.loadAnimation({
    container: document.getElementById('lottie_cont'),
    autoplay: true,
    renderer: 'svg',
    path: 'laptop_lottie.json',
    loop: true})


    let nav_headings = document.getElementsByClassName('nav_headings');
let arr = Array.from(nav_headings);
let svg_main = document.getElementById('svg_main');
let polyline = document.getElementById('polyline');
let line = document.getElementById('line');



// let points = polyline.getAttribute("points");

// arr.forEach((element)=>{
//     let el_rect = element.getBoundingClientRect();
//     console.log(el_rect.y)
    
//     let new_points = points+=` ${el_rect.x-10}, ${el_rect.y+el_rect.height}`
    
//     console.log(new_points);
//     polyline.setAttribute(`points`, new_points);

//     })
// let p = points+=" 30, 100000";
// polyline.setAttribute("points", p);




my_job = document.getElementById('myjob');

const animate_jobs = ()=>{

    let JOBS = ["Game developer", "Mobile app developer", "Web developer"];
    let idx = 0;
    
    
    
    var do_charbychar = function(){
        $("#myjob").codex({
            effect: "charbychar",
            keep_whitespaces: false, // sodomize also whitespaces
            speed: 50, // speed in which random chars will appear in letters not yet revelaed
            reveal: 100, // number of miliseconds that will take for a single char reveal
            // duration: 100
        });
      }
    
    let curr_job = JOBS[idx]; 
    let curr_job_arr = curr_job.split();
    
    let wait_time = 3000;
    
    
    
    setInterval(()=>{
        if(idx==(JOBS.length)){
            idx = 0
        }
    curr_job = JOBS[idx]; 
    curr_job_arr = curr_job.split();
    
    my_job.textContent = JOBS[idx]
    do_charbychar();
    idx+=1;
    
    },((curr_job_arr.length+1)*100)+wait_time)
    
    // console.log(curr_job_arr.length*100)+1000;
    
    
}

animate_jobs();






// function setBackgroundText(){
//     let bg_texts_all = document.getElementsByClassName('background_text');
//     let arr_bg_texts_all = Array.from(bg_texts_all);


// }

function blurBg(){
    let body = document.getElementById('b');

    body.style.filter = "blur(2px)";
}
function unblurBG(){
    let body = document.getElementById('b');

    body.style.filter = "blur(0px)";
}