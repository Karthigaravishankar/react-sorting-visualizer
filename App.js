<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>SkillBridge | Academic Industry Collaboration</title>

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Inter,Segoe UI,Arial,sans-serif;
}

:root{
    --bg:#07111f;
    --sidebar:#0a1627;
    --card:#101e31;
    --card2:#13243a;
    --border:#243a55;
    --text:#f4f8ff;
    --muted:#91a4bd;
    --purple:#7567ff;
    --cyan:#29d8c4;
    --green:#35d39b;
    --yellow:#f4bd52;
    --red:#ff687b;
}

body{
    background:var(--bg);
    color:var(--text);
    overflow-x:hidden;
}

/* BACKGROUND */

.background{
    position:fixed;
    inset:0;
    z-index:-5;
    background:
    radial-gradient(circle at 10% 15%,rgba(117,103,255,.18),transparent 30%),
    radial-gradient(circle at 90% 20%,rgba(41,216,196,.12),transparent 27%),
    radial-gradient(circle at 50% 100%,rgba(117,103,255,.08),transparent 35%),
    linear-gradient(135deg,#06101d,#0a1728 60%,#07111f);
}

.background:before{
    content:"";
    position:absolute;
    width:500px;
    height:500px;
    border-radius:50%;
    background:rgba(117,103,255,.08);
    filter:blur(80px);
    left:-180px;
    bottom:-180px;
}

.background:after{
    content:"";
    position:absolute;
    width:450px;
    height:450px;
    border-radius:50%;
    background:rgba(41,216,196,.06);
    filter:blur(90px);
    right:-150px;
    top:-150px;
}

/* COMMON */

button{
    cursor:pointer;
}

.btn{
    border:none;
    padding:11px 17px;
    border-radius:9px;
    background:var(--purple);
    color:white;
    font-weight:700;
    transition:.2s;
}

.btn:hover{
    transform:translateY(-2px);
    filter:brightness(1.1);
}

.btn-outline{
    background:transparent;
    border:1px solid var(--border);
}

.btn-green{
    background:#159c73;
}

.badge{
    display:inline-block;
    padding:5px 10px;
    border-radius:30px;
    font-size:11px;
    font-weight:700;
    background:#20334c;
    color:#c5d4e7;
}

.badge.green{
    background:rgba(53,211,155,.13);
    color:#62e2b5;
}

.badge.yellow{
    background:rgba(244,189,82,.13);
    color:#f5cc73;
}

.badge.red{
    background:rgba(255,104,123,.13);
    color:#ff9ca8;
}

.card{
    background:linear-gradient(
        145deg,
        rgba(19,36,58,.96),
        rgba(11,25,42,.96)
    );
    border:1px solid rgba(110,140,175,.18);
    border-radius:17px;
    padding:22px;
    box-shadow:0 15px 45px rgba(0,0,0,.22);
}

.muted{
    color:var(--muted);
    font-size:13px;
    line-height:1.6;
}

.grid{
    display:grid;
    gap:18px;
}

.grid2{
    grid-template-columns:repeat(2,1fr);
}

.grid3{
    grid-template-columns:repeat(3,1fr);
}

.grid4{
    grid-template-columns:repeat(4,1fr);
}

/* LOGIN */

.login-page{
    min-height:100vh;
    display:grid;
    grid-template-columns:1.15fr .85fr;
    align-items:center;
    gap:70px;
    padding:50px 8%;
}

.brand{
    font-size:27px;
    font-weight:900;
}

.brand span{
    color:var(--cyan);
}

.login-left h1{
    font-size:58px;
    line-height:1.05;
    margin:25px 0 20px;
}

.gradient{
    background:linear-gradient(
        90deg,
        #9189ff,
        #42dfce
    );
    -webkit-background-clip:text;
    color:transparent;
}

.login-left p{
    max-width:650px;
    color:var(--muted);
    line-height:1.8;
    font-size:17px;
}

.feature-pills{
    display:flex;
    gap:10px;
    flex-wrap:wrap;
    margin-top:28px;
}

.feature-pills span{
    padding:9px 13px;
    border:1px solid var(--border);
    border-radius:30px;
    color:#bdcce0;
    background:rgba(255,255,255,.025);
    font-size:12px;
}

.login-card{
    background:rgba(13,27,46,.94);
    border:1px solid #263d59;
    border-radius:22px;
    padding:30px;
    box-shadow:0 20px 70px rgba(0,0,0,.35);
}

.login-card h2{
    margin-bottom:7px;
}

.tabs{
    display:flex;
    background:#091625;
    padding:4px;
    border-radius:9px;
    margin-bottom:25px;
}

.tabs button{
    flex:1;
    padding:10px;
    border:none;
    background:transparent;
    color:var(--muted);
    border-radius:7px;
}

.tabs button.active{
    background:#223650;
    color:white;
}

.input-group{
    margin-bottom:15px;
}

.input-group label{
    display:block;
    font-size:12px;
    font-weight:700;
    margin-bottom:7px;
    color:#c8d5e6;
}

.input-group input,
.input-group select,
.input-group textarea{
    width:100%;
    background:#091625;
    border:1px solid #263d58;
    color:white;
    padding:12px;
    border-radius:8px;
    outline:none;
}

.input-group textarea{
    min-height:100px;
}

.hidden{
    display:none!important;
}

/* APP */

.app{
    min-height:100vh;
}

.sidebar{
    position:fixed;
    width:245px;
    left:0;
    top:0;
    bottom:0;
    background:rgba(7,16,29,.95);
    border-right:1px solid #1d3048;
    padding:22px 14px;
    z-index:50;
}

.sidebar-brand{
    font-size:23px;
    font-weight:900;
    padding:0 12px 25px;
}

.sidebar-brand span{
    color:var(--cyan);
}

.portal-label{
    background:#111f33;
    padding:9px 12px;
    border-radius:9px;
    color:#8ea1ba;
    font-size:10px;
    font-weight:800;
    margin-bottom:15px;
}

.nav{
    display:grid;
    gap:4px;
}

.nav button{
    border:none;
    background:transparent;
    color:#92a5bd;
    text-align:left;
    padding:11px 12px;
    border-radius:9px;
    font-size:13px;
}

.nav button:hover,
.nav button.active{
    background:#182c46;
    color:white;
}

.nav button.active{
    box-shadow:inset 3px 0 var(--purple);
}

.logout{
    position:absolute;
    bottom:20px;
    left:14px;
    right:14px;
}

.main{
    margin-left:245px;
}

.topbar{
    height:72px;
    border-bottom:1px solid #1d3047;
    background:rgba(7,17,31,.82);
    backdrop-filter:blur(14px);
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 30px;
    position:sticky;
    top:0;
    z-index:30;
}

.search{
    width:300px;
    background:#0e1d30;
    border:1px solid #263d58;
    border-radius:9px;
    padding:10px 14px;
    color:white;
}

.user{
    display:flex;
    align-items:center;
    gap:10px;
    color:#b6c5d8;
    font-size:13px;
}

.avatar{
    width:38px;
    height:38px;
    border-radius:50%;
    display:grid;
    place-items:center;
    font-weight:900;
    background:linear-gradient(
        135deg,
        var(--purple),
        var(--cyan)
    );
}

.content{
    padding:30px;
    max-width:1500px;
    margin:auto;
}

.page{
    display:none;
}

.page.active{
    display:block;
}

.page-header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:22px;
}

.page-header h1{
    font-size:27px;
}

.page-header p{
    color:var(--muted);
    font-size:13px;
    margin-top:5px;
}

/* DASHBOARD */

.welcome{
    padding:26px;
    border-radius:19px;
    background:
    linear-gradient(
        110deg,
        rgba(117,103,255,.19),
        rgba(41,216,196,.06)
    );
    border:1px solid rgba(117,103,255,.25);
    margin-bottom:20px;
}

.welcome h1{
    font-size:28px;
}

.welcome p{
    color:var(--muted);
    font-size:13px;
    margin-top:7px;
}

.stat{
    min-height:130px;
}

.stat-icon{
    float:right;
    background:#192d46;
    padding:9px;
    border-radius:9px;
}

.stat-title{
    color:var(--muted);
    font-size:12px;
}

.stat-number{
    font-size:29px;
    font-weight:900;
    margin:8px 0;
}

/* PROGRESS */

.progress{
    height:8px;
    background:#20344c;
    border-radius:20px;
    overflow:hidden;
}

.progress span{
    display:block;
    height:100%;
    border-radius:20px;
    background:linear-gradient(
        90deg,
        var(--purple),
        var(--cyan)
    );
}

.skill{
    margin:17px 0;
}

.skill-top{
    display:flex;
    justify-content:space-between;
    font-size:12px;
    margin-bottom:7px;
}

/* RESUME */

.upload-area{
    border:1px dashed #3c5878;
    background:#091625;
    border-radius:15px;
    padding:45px;
    text-align:center;
}

.upload-area .icon{
    font-size:42px;
    margin-bottom:10px;
}

.file{
    display:none;
}

.resume-result{
    margin-top:18px;
}

.extracted-skills{
    display:flex;
    flex-wrap:wrap;
    gap:7px;
    margin-top:12px;
}

.skill-tag{
    padding:7px 10px;
    background:#182c46;
    border:1px solid #2b4563;
    border-radius:30px;
    font-size:11px;
    color:#d4e0ee;
}

/* ASSESSMENT */

.question{
    background:#0b1829;
    border:1px solid #233a55;
    border-radius:13px;
    padding:18px;
    margin-bottom:14px;
}

.question h4{
    font-size:14px;
    margin-bottom:12px;
}

.option{
    display:block;
    padding:10px;
    border:1px solid #263d58;
    border-radius:8px;
    margin:7px 0;
    color:#c5d3e3;
    font-size:12px;
}

/* ANALYSIS */

.analysis-row{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:13px 0;
    border-bottom:1px solid #20344c;
}

.score-circle{
    width:130px;
    height:130px;
    border-radius:50%;
    background:conic-gradient(
        var(--cyan) 0 82%,
        #21364f 82%
    );
    display:grid;
    place-items:center;
    position:relative;
    margin:auto;
}

.score-circle:after{
    content:"";
    width:94px;
    height:94px;
    background:#102039;
    border-radius:50%;
    position:absolute;
}

.score-circle strong{
    position:relative;
    z-index:2;
    font-size:27px;
}

/* SKILL MAP */

.skill-map{
    min-height:480px;
    display:grid;
    place-items:center;
    position:relative;
    overflow:hidden;
}

.map-center{
    padding:22px 30px;
    border-radius:16px;
    background:linear-gradient(
        135deg,
        var(--purple),
        #4b82ff
    );
    font-weight:900;
    text-align:center;
    z-index:2;
}

.map-node{
    position:absolute;
    width:190px;
    padding:17px;
    border-radius:13px;
    background:#11263e;
    border:1px solid #31506f;
}

.map-node strong{
    display:block;
    margin-bottom:6px;
}

.node1{
    left:8%;
    top:12%;
}

.node2{
    right:8%;
    top:12%;
}

.node3{
    left:8%;
    bottom:12%;
}

.node4{
    right:8%;
    bottom:12%;
}

/* ROADMAP */

.roadmap{
    display:grid;
    gap:13px;
}

.road-step{
    display:grid;
    grid-template-columns:45px 1fr auto;
    gap:15px;
    align-items:center;
    padding:18px;
    background:#0d1b2d;
    border:1px solid #213852;
    border-radius:13px;
}

.step-number{
    width:38px;
    height:38px;
    border-radius:50%;
    background:#203651;
    display:grid;
    place-items:center;
    font-weight:800;
}

.completed .step-number{
    background:#159c73;
}

/* OPPORTUNITIES */

.opportunity{
    position:relative;
}

.match{
    font-size:24px;
    font-weight:900;
    color:var(--cyan);
}

.company{
    color:#b5c5d8;
    font-size:12px;
    margin:5px 0 14px;
}

.tags{
    display:flex;
    flex-wrap:wrap;
    gap:6px;
    margin:15px 0;
}

.actions{
    display:flex;
    gap:8px;
}

/* TABLE */

.table-wrap{
    overflow:auto;
}

table{
    width:100%;
    border-collapse:collapse;
}

th,
td{
    padding:14px;
    text-align:left;
    border-bottom:1px solid #20344c;
    font-size:12px;
}

th{
    color:#8fa3bb;
}

/* TIMELINE */

.timeline{
    display:flex;
    align-items:center;
    margin:30px 0;
}

.timeline-item{
    flex:1;
    text-align:center;
    position:relative;
}

.timeline-item:before{
    content:"";
    height:2px;
    background:#29405c;
    position:absolute;
    top:15px;
    left:50%;
    width:100%;
}

.timeline-item:last-child:before{
    width:50%;
}

.timeline-item:first-child:before{
    left:50%;
    width:50%;
}

.timeline-dot{
    width:30px;
    height:30px;
    border-radius:50%;
    background:#233a57;
    display:grid;
    place-items:center;
    margin:auto;
    position:relative;
    z-index:2;
}

.timeline-item.done .timeline-dot{
    background:var(--green);
}

.timeline-item small{
    display:block;
    color:#9dafc4;
    margin-top:8px;
    font-size:10px;
}

/* MODAL */

.modal{
    position:fixed;
    inset:0;
    background:rgba(0,0,0,.72);
    z-index:100;
    display:none;
    align-items:center;
    justify-content:center;
    padding:20px;
}

.modal.show{
    display:flex;
}

.modal-box{
    width:min(600px,100%);
    background:#102039;
    border:1px solid #2c4664;
    border-radius:18px;
    padding:25px;
}

.modal-header{
    display:flex;
    justify-content:space-between;
    margin-bottom:20px;
}

.close{
    border:none;
    background:transparent;
    color:#9eb1c8;
    font-size:25px;
}

/* TOAST */

.toast{
    position:fixed;
    right:25px;
    bottom:25px;
    background:#162a43;
    border:1px solid #31506f;
    padding:14px 18px;
    border-radius:10px;
    transform:translateY(120px);
    opacity:0;
    transition:.3s;
    z-index:200;
}

.toast.show{
    transform:translateY(0);
    opacity:1;
}

/* RESPONSIVE */

@media(max-width:1000px){

    .login-page{
        grid-template-columns:1fr;
    }

    .login-left{
        display:none;
    }

    .sidebar{
        width:75px;
    }

    .sidebar-brand{
        font-size:0;
    }

    .sidebar-brand span{
        font-size:20px;
    }

    .portal-label{
        display:none;
    }

    .nav button{
        font-size:18px;
        text-align:center;
    }

    .nav button span{
        display:none;
    }

    .main{
        margin-left:75px;
    }

    .grid4{
        grid-template-columns:repeat(2,1fr);
    }

    .grid3{
        grid-template-columns:1fr 1fr;
    }
}

@media(max-width:700px){

    .content{
        padding:18px;
    }

    .topbar{
        padding:0 18px;
    }

    .search{
        display:none;
    }

    .grid2,
    .grid3,
    .grid4{
        grid-template-columns:1fr;
    }

    .map-node{
        position:static;
        margin:8px;
    }

    .skill-map{
        display:flex;
        flex-direction:column;
        gap:10px;
    }

    .road-step{
        grid-template-columns:40px 1fr;
    }

    .road-step .btn,
    .road-step .badge{
        grid-column:2;
        width:max-content;
    }

}

</style>
</head>

<body>

<div class="background"></div>

<!-- ================= LOGIN ================= -->

<section id="loginPage" class="login-page">

<div class="login-left">

<div class="brand">
Skill<span>Bridge</span>
</div>

<h1>
Connect Skills.<br>
<span class="gradient">Build Careers.</span>
</h1>

<p>
SkillBridge connects students, educational institutions and industry
through AI-powered skill mapping, personalized learning,
internships and placement opportunities.
</p>

<div class="feature-pills">
<span>AI Skill Mapping</span>
<span>Resume Intelligence</span>
<span>Skill Gap Analysis</span>
<span>Industry Matching</span>
<span>Internships</span>
<span>Placements</span>
</div>

</div>


<div class="login-card">

<div class="tabs">

<button class="active"
onclick="switchAuth('login',this)">
Login
</button>

<button
onclick="switchAuth('signup',this)">
Sign Up
</button>

</div>


<div id="loginForm">

<h2>Welcome Back</h2>

<p class="muted">
Continue your career journey.
</p>

<br>

<div class="input-group">

<label>Email</label>

<input
id="email"
type="email"
placeholder="student@example.com">

</div>


<div class="input-group">

<label>Password</label>

<input
type="password"
placeholder="••••••••">

</div>


<div class="input-group">

<label>Login As</label>

<select id="loginRole">

<option value="student">
Student
</option>

<option value="faculty">
Faculty
</option>

<option value="industry">
Industry
</option>

</select>

</div>


<button
class="btn"
style="width:100%"
onclick="login()">

Login to SkillBridge

</button>

<p
class="muted"
style="text-align:center;margin-top:15px">

Demo login — choose a role.

</p>

</div>


<div id="signupForm" class="hidden">

<h2>Create Account</h2>

<p class="muted">
Join the SkillBridge ecosystem.
</p>

<br>

<div class="input-group">

<label>Full Name</label>

<input
id="signupName"
placeholder="Your name">

</div>

<div class="input-group">

<label>Email</label>

<input
placeholder="you@example.com">

</div>

<div class="input-group">

<label>Role</label>

<select>

<option>Student</option>
<option>Faculty</option>
<option>Industry</option>

</select>

</div>

<button
class="btn"
style="width:100%"
onclick="login()">

Create Account

</button>

</div>

</div>

</section>


<!-- ================= APPLICATION ================= -->

<section id="app" class="app hidden">


<!-- SIDEBAR -->

<aside class="sidebar">

<div class="sidebar-brand">
Skill<span>Bridge</span>
</div>

<div id="portalLabel" class="portal-label">
STUDENT PORTAL
</div>


<div id="studentNav" class="nav">

<button class="active"
onclick="showPage('dashboard',this)">
🏠 <span>Dashboard</span>
</button>

<button onclick="showPage('profile',this)">
👤 <span>Profile</span>
</button>

<button onclick="showPage('resume',this)">
📄 <span>Resume</span>
</button>

<button onclick="showPage('assessment',this)">
📝 <span>Assessment</span>
</button>

<button onclick="showPage('analysis',this)">
🧠 <span>AI Analysis</span>
</button>

<button onclick="showPage('skillmap',this)">
🗺️ <span>Skill Map</span>
</button>

<button onclick="showPage('gaps',this)">
⚠️ <span>Skill Gaps</span>
</button>

<button onclick="showPage('roadmap',this)">
📚 <span>Roadmap</span>
</button>

<button onclick="showPage('learning',this)">
🎓 <span>Learning</span>
</button>

<button onclick="showPage('matching',this)">
🤝 <span>Industry Match</span>
</button>

<button onclick="showPage('internships',this)">
💼 <span>Internships</span>
</button>

<button onclick="showPage('jobs',this)">
🎯 <span>Jobs</span>
</button>

<button onclick="showPage('applications',this)">
📊 <span>Applications</span>
</button>

<button onclick="showPage('interview',this)">
🎤 <span>Interview</span>
</button>

<button onclick="showPage('internship',this)">
🚀 <span>My Internship</span>
</button>

<button onclick="showPage('feedback',this)">
⭐ <span>Industry Feedback</span>
</button>

<button onclick="showPage('readiness',this)">
🏆 <span>Placement Readiness</span>
</button>

</div>


<div id="facultyNav" class="nav hidden">

<button class="active"
onclick="showPage('facultyDashboard',this)">
🏠 <span>Dashboard</span>
</button>

<button onclick="showPage('students',this)">
👥 <span>Students</span>
</button>

<button onclick="showPage('facultyAnalytics',this)">
📈 <span>Skill Analytics</span>
</button>

<button onclick="showPage('facultyReports',this)">
📑 <span>Reports</span>
</button>

</div>


<div id="industryNav" class="nav hidden">

<button class="active"
onclick="showPage('industryDashboard',this)">
🏠 <span>Dashboard</span>
</button>

<button onclick="showPage('requirements',this)">
🧩 <span>Requirements</span>
</button>

<button onclick="showPage('talent',this)">
🔎 <span>Find Talent</span>
</button>

<button onclick="showPage('postings',this)">
💼 <span>Opportunities</span>
</button>

<button onclick="showPage('industryFeedback',this)">
⭐ <span>Feedback</span>
</button>

</div>


<div class="logout">

<button
class="btn btn-outline"
style="width:100%"
onclick="logout()">

↪ Logout

</button>

</div>

</aside>


<!-- MAIN -->

<main class="main">


<header class="topbar">

<input
class="search"
placeholder="Search skills, jobs, internships...">

<div class="user">

<span id="roleName">
Student
</span>

<div id="avatar" class="avatar">
S
</div>

</div>

</header>


<div class="content">


<!-- ================= STUDENT DASHBOARD ================= -->

<div id="page-dashboard" class="page active">

<div class="welcome">

<h1>
Good Evening, <span id="welcomeName">Student</span> 👋
</h1>

<p>
Your current placement readiness is
<strong>82%</strong>.
Complete your priority skill gaps to improve your industry match.
</p>

</div>


<div class="grid grid4">

<div class="card stat">

<div class="stat-icon">🧠</div>

<div class="stat-title">
Overall Skill Score
</div>

<div class="stat-number">
82%
</div>

<span class="badge green">
+7% this month
</span>

</div>


<div class="card stat">

<div class="stat-icon">🤝</div>

<div class="stat-title">
Industry Match
</div>

<div class="stat-number">
87%
</div>

<span class="badge green">
3 new matches
</span>

</div>


<div class="card stat">

<div class="stat-icon">⚠️</div>

<div class="stat-title">
Skill Gaps
</div>

<div class="stat-number">
5
</div>

<span class="badge yellow">
2 high priority
</span>

</div>


<div class="card stat">

<div class="stat-icon">📨</div>

<div class="stat-title">
Applications
</div>

<div class="stat-number" id="applicationCount">
4
</div>

<span class="badge">
2 under review
</span>

</div>

</div>


<br>


<div class="grid grid2">


<div class="card">

<div class="page-header">

<div>

<h3>Skill Progress</h3>

<p class="muted">
Resume + assessment verified skills
</p>

</div>

<button
class="btn btn-outline"
onclick="showPage('skillmap')">

View Map

</button>

</div>


<div class="skill">

<div class="skill-top">
<span>Java</span>
<b>85%</b>
</div>

<div class="progress">
<span style="width:85%"></span>
</div>

</div>


<div class="skill">

<div class="skill-top">
<span>SQL</span>
<b>72%</b>
</div>

<div class="progress">
<span style="width:72%"></span>
</div>

</div>


<div class="skill">

<div class="skill-top">
<span>JavaScript</span>
<b>68%</b>
</div>

<div class="progress">
<span style="width:68%"></span>
</div>

</div>


<div class="skill">

<div class="skill-top">
<span>React</span>
<b>48%</b>
</div>

<div class="progress">
<span style="width:48%"></span>
</div>

</div>

</div>


<div class="card">

<h3>Career Journey</h3>

<br>

<div class="analysis-row">

<div>
<strong>Resume</strong>
<p class="muted">
Skills extracted
</p>
</div>

<span class="badge green">
Completed
</span>

</div>


<div class="analysis-row">

<div>
<strong>Assessment</strong>
<p class="muted">
Technical baseline
</p>
</div>

<span class="badge green">
Completed
</span>

</div>


<div class="analysis-row">

<div>
<strong>AI Skill Analysis</strong>
<p class="muted">
Profile generated
</p>
</div>

<span class="badge green">
Completed
</span>

</div>


<div class="analysis-row">

<div>
<strong>Industry Matching</strong>
<p class="muted">
3 opportunities found
</p>
</div>

<span class="badge green">
Active
</span>

</div>

</div>

</div>


<br>


<div class="card">

<div class="page-header">

<div>

<h3>AI Recommended Action</h3>

<p class="muted">
Based on your current skill gaps.
</p>

</div>

<button
class="btn"
onclick="showPage('roadmap')">

Open Roadmap →

</button>

</div>

<strong>
Improve React + REST API
</strong>

<p class="muted">

These are currently your highest-priority technical gaps
for the selected Full Stack Developer role.

</p>

</div>

</div>


<!-- ================= PROFILE ================= -->

<div id="page-profile" class="page">

<div class="page-header">

<div>

<h1>Student Profile</h1>

<p>
Your academic and career identity.
</p>

</div>

<button class="btn"
onclick="saveProfile()">

Save Changes

</button>

</div>


<div class="grid grid2">

<div class="card">

<h3>Personal Information</h3>

<br>

<div class="input-group">

<label>Full Name</label>

<input
id="profileName"
value="Student">

</div>

<div class="input-group">

<label>Email</label>

<input value="student@college.edu">

</div>

<div class="input-group">

<label>Phone</label>

<input value="+91 98765 43210">

</div>

<div class="input-group">

<label>Location</label>

<input value="Chennai, India">

</div>

</div>


<div class="card">

<h3>Academic Information</h3>

<br>

<div class="input-group">

<label>Degree</label>

<input
value="B.E. Computer Science & Engineering">

</div>

<div class="input-group">

<label>College</label>

<input
value="ABC Institute of Technology">

</div>

<div class="input-group">

<label>Graduation Year</label>

<input value="2027">

</div>

<div class="input-group">

<label>Target Career</label>

<select>

<option>
Full Stack Developer
</option>

<option>
Java Developer
</option>

<option>
Software Engineer
</option>

</select>

</div>

</div>

</div>

</div>


<!-- ================= RESUME ================= -->

<div id="page-resume" class="page">

<div class="page-header">

<div>

<h1>Resume Upload</h1>

<p>
Upload your latest resume for AI skill extraction.
</p>

</div>

<span class="badge">
PDF / DOC / DOCX
</span>

</div>


<div class="grid grid2">

<div class="card">

<h3>Upload Resume</h3>

<p class="muted">
Maximum file size: 5 MB
</p>

<br>

<label
class="upload-area"
for="resumeInput">

<div class="icon">
📄
</div>

<h3>
Upload your resume
</h3>

<p class="muted">
Click here to browse your device
</p>

<br>

<span class="btn">
Choose Resume
</span>

</label>

<input
id="resumeInput"
class="file"
type="file"
accept=".pdf,.doc,.docx"
onchange="uploadResume(this)">

<div id="resumeResult"></div>

</div>


<div class="card">

<h3>AI Resume Processing</h3>

<br>

<div class="analysis-row">

<div>
<strong>Education</strong>
<p class="muted">
Degree, college, graduation
</p>
</div>

<span>✓</span>

</div>


<div class="analysis-row">

<div>
<strong>Technical Skills</strong>
<p class="muted">
Languages and frameworks
</p>
</div>

<span>✓</span>

</div>


<div class="analysis-row">

<div>
<strong>Projects</strong>
<p class="muted">
Project technologies
</p>
</div>

<span>✓</span>

</div>


<div class="analysis-row">

<div>
<strong>Experience</strong>
<p class="muted">
Internships and work
</p>
</div>

<span>✓</span>

</div>


<div class="analysis-row">

<div>
<strong>Certifications</strong>
<p class="muted">
Relevant certifications
</p>
</div>

<span>✓</span>

</div>

</div>

</div>

</div>


<!-- ================= ASSESSMENT ================= -->

<div id="page-assessment" class="page">

<div class="page-header">

<div>

<h1>Initial Assessment</h1>

<p>
Validate the skills detected from your resume.
</p>

</div>

<span class="badge">
5 Questions
</span>

</div>


<div class="card">


<div class="question">

<h4>
1. Which data structure follows LIFO?
</h4>

<label class="option">
<input type="radio" name="q1" value="1">
Stack
</label>

<label class="option">
<input type="radio" name="q1" value="0">
Queue
</label>

<label class="option">
<input type="radio" name="q1" value="0">
Array
</label>

</div>


<div class="question">

<h4>
2. Which SQL clause filters grouped records?
</h4>

<label class="option">
<input type="radio" name="q2" value="0">
WHERE
</label>

<label class="option">
<input type="radio" name="q2" value="1">
HAVING
</label>

<label class="option">
<input type="radio" name="q2" value="0">
ORDER BY
</label>

</div>


<div class="question">

<h4>
3. Which HTTP method is normally used to update a resource?
</h4>

<label class="option">
<input type="radio" name="q3" value="1">
PUT
</label>

<label class="option">
<input type="radio" name="q3" value="0">
GET
</label>

<label class="option">
<input type="radio" name="q3" value="0">
OPTIONS
</label>

</div>


<div class="question">

<h4>
4. Which React hook is used for component state?
</h4>

<label class="option">
<input type="radio" name="q4" value="1">
useState
</label>

<label class="option">
<input type="radio" name="q4" value="0">
useClass
</label>

<label class="option">
<input type="radio" name="q4" value="0">
useRoute
</label>

</div>


<div class="question">

<h4>
5. Which Git command downloads a repository?
</h4>

<label class="option">
<input type="radio" name="q5" value="1">
git clone
</label>

<label class="option">
<input type="radio" name="q5" value="0">
git push
</label>

<label class="option">
<input type="radio" name="q5" value="0">
git merge
</label>

</div>


<button
class="btn"
onclick="submitAssessment()">

Submit Assessment & Analyze

</button>

</div>

</div>


<!-- ================= AI ANALYSIS ================= -->

<div id="page-analysis" class="page">

<div class="page-header">

<div>

<h1>AI Skill Analysis</h1>

<p>
AI combines resume evidence and assessment performance.
</p>

</div>

<span class="badge green">
Analysis Complete
</span>

</div>


<div class="grid grid3">


<div class="card"
style="text-align:center">

<div class="score-circle">

<strong>
82%
</strong>

</div>

<br>

<h3>
Overall Skill Score
</h3>

<p class="muted">
Current industry readiness
</p>

</div>


<div class="card">

<h3>Strengths</h3>

<br>

<div class="analysis-row">
<span>Java</span>
<strong>85%</strong>
</div>

<div class="analysis-row">
<span>SQL</span>
<strong>72%</strong>
</div>

<div class="analysis-row">
<span>DSA</span>
<strong>76%</strong>
</div>

<div class="analysis-row">
<span>Git</span>
<strong>70%</strong>
</div>

</div>


<div class="card">

<h3>Improvement Areas</h3>

<br>

<div class="analysis-row">
<span>React</span>
<span class="badge red">48%</span>
</div>

<div class="analysis-row">
<span>REST API</span>
<span class="badge red">52%</span>
</div>

<div class="analysis-row">
<span>Spring Boot</span>
<span class="badge yellow">57%</span>
</div>

<div class="analysis-row">
<span>Communication</span>
<span class="badge yellow">61%</span>
</div>

</div>

</div>


<br>


<div class="card">

<h3>AI Analysis</h3>

<br>

<p class="muted">

Your profile shows a strong foundation in Java, SQL and
problem solving. Based on the selected Full Stack Developer
career path, React, REST API and Spring Boot are prioritized
as skill gaps. These skills are used to generate your
personalized learning roadmap and industry matches.

</p>

</div>

</div>


<!-- ================= SKILL MAP ================= -->

<div id="page-skillmap" class="page">

<div class="page-header">

<div>

<h1>Skill Map</h1>

<p>
Visual representation of your career skill ecosystem.
</p>

</div>

<span class="badge green">
82% Industry Ready
</span>

</div>


<div class="card skill-map">

<div class="map-center">

FULL STACK<br>
DEVELOPER

</div>


<div class="map-node node1">

<strong>
Frontend
</strong>

<span class="muted">
HTML ✓<br>
CSS ✓<br>
JavaScript ✓<br>
React ⚠
</span>

</div>


<div class="map-node node2">

<strong>
Backend
</strong>

<span class="muted">
Java ✓<br>
REST API ⚠<br>
Spring Boot ⚠
</span>

</div>


<div class="map-node node3">

<strong>
Database
</strong>

<span class="muted">
SQL ✓<br>
DBMS ✓<br>
MongoDB ⚠
</span>

</div>


<div class="map-node node4">

<strong>
Professional
</strong>

<span class="muted">
Git ✓<br>
DSA ✓<br>
Communication ⚠
</span>

</div>

</div>

</div>


<!-- ================= SKILL GAPS ================= -->

<div id="page-gaps" class="page">

<div class="page-header">

<div>

<h1>Skill Gap Analysis</h1>

<p>
Compare your current skills with industry requirements.
</p>

</div>

</div>


<div class="grid grid3">

<div class="card">

<h3>High Priority</h3>

<br>

<div class="analysis-row">
<span>React</span>
<span class="badge red">
48%
</span>
</div>

<div class="analysis-row">
<span>REST API</span>
<span class="badge red">
52%
</span>
</div>

</div>


<div class="card">

<h3>Medium Priority</h3>

<br>

<div class="analysis-row">
<span>Spring Boot</span>
<span class="badge yellow">
57%
</span>
</div>

<div class="analysis-row">
<span>Communication</span>
<span class="badge yellow">
61%
</span>
</div>

</div>


<div class="card">

<h3>Industry Requirement</h3>

<br>

<div class="analysis-row">
<span>Java</span>
<span class="badge green">
Required ✓
</span>
</div>

<div class="analysis-row">
<span>SQL</span>
<span class="badge green">
Required ✓
</span>
</div>

<div class="analysis-row">
<span>React</span>
<span class="badge red">
Gap
</span>
</div>

</div>

</div>

</div>


<!-- ================= ROADMAP ================= -->

<div id="page-roadmap" class="page">

<div class="page-header">

<div>

<h1>Personalized Roadmap</h1>

<p>
AI-generated learning sequence based on your skill gaps.
</p>

</div>

<button class="btn"
onclick="toast('Roadmap progress saved')">

Save Progress

</button>

</div>


<div class="roadmap">

<div class="road-step completed">

<div class="step-number">✓</div>

<div>

<strong>
Resume & Profile
</strong>

<p class="muted">
Resume uploaded and skills extracted.
</p>

</div>

<span class="badge green">
Completed
</span>

</div>


<div class="road-step completed">

<div class="step-number">✓</div>

<div>

<strong>
Initial Assessment
</strong>

<p class="muted">
Technical baseline established.
</p>

</div>

<span class="badge green">
Completed
</span>

</div>


<div class="road-step">

<div class="step-number">
3
</div>

<div>

<strong>
React Fundamentals
</strong>

<p class="muted">
Components, props, state, hooks and routing.
</p>

</div>

<button class="btn"
onclick="toast('React learning module opened')">

Start

</button>

</div>


<div class="road-step">

<div class="step-number">
4
</div>

<div>

<strong>
REST API Development
</strong>

<p class="muted">
HTTP, API integration and authentication.
</p>

</div>

<button class="btn"
onclick="toast('REST API module opened')">

Start

</button>

</div>


<div class="road-step">

<div class="step-number">
5
</div>

<div>

<strong>
Industry Project
</strong>

<p class="muted">
Build a complete full-stack application.
</p>

</div>

<span class="badge">
Locked
</span>

</div>


<div class="road-step">

<div class="step-number">
6
</div>

<div>

<strong>
Reassessment
</strong>

<p class="muted">
Measure your improvement.
</p>

</div>

<span class="badge">
Locked
</span>

</div>

</div>

</div>


<!-- ================= LEARNING ================= -->

<div id="page-learning" class="page">

<div class="page-header">

<div>

<h1>Learning & Projects</h1>

<p>
Complete recommended learning activities and practical projects.
</p>

</div>

</div>


<div class="grid grid3">

<div class="card">

<span class="badge">
Module 01
</span>

<br><br>

<h3>React Fundamentals</h3>

<p class="muted">
Components, props, state and hooks.
</p>

<br>

<div class="progress">
<span style="width:65%"></span>
</div>

<br>

<span class="badge yellow">
65% Complete
</span>

<br><br>

<button class="btn"
onclick="toast('Module opened')">

Continue

</button>

</div>


<div class="card">

<span class="badge">
Project
</span>

<br><br>

<h3>Student Management System</h3>

<p class="muted">
Build a CRUD application using frontend,
backend and database technologies.
</p>

<br>

<button class="btn"
onclick="toast('Project workspace opened')">

Open Project

</button>

</div>


<div class="card">

<span class="badge">
Challenge
</span>

<br><br>

<h3>REST API Challenge</h3>

<p class="muted">
Create and test REST endpoints.
</p>

<br>

<button class="btn"
onclick="toast('Challenge started')">

Start Challenge

</button>

</div>

</div>

</div>


<!-- ================= INDUSTRY MATCHING ================= -->

<div id="page-matching" class="page">

<div class="page-header">

<div>

<h1>AI Industry Matching</h1>

<p>
Your profile is matched against industry skill requirements.
</p>

</div>

<span class="badge green">
AI Matching Active
</span>

</div>


<div class="grid grid2">


<div class="card opportunity">

<div class="page-header">

<div>

<h3>
Java Developer
</h3>

<p class="company">
CodeSphere Technologies
</p>

</div>

<div class="match">
91%
</div>

</div>

<p class="muted">
Strong match based on Java, SQL, DSA and REST skills.
</p>

<br>

<button
class="btn"
onclick="showPage('internships')">

View Opportunity

</button>

</div>


<div class="card opportunity">

<div class="page-header">

<div>

<h3>
Full Stack Developer
</h3>

<p class="company">
TechNova Solutions
</p>

</div>

<div class="match">
87%
</div>

</div>

<p class="muted">
Good match with React as the main remaining gap.
</p>

<br>

<button
class="btn"
onclick="showPage('internships')">

View Opportunity

</button>

</div>

</div>

</div>


<!-- ================= INTERNSHIPS ================= -->

<div id="page-internships" class="page">

<div class="page-header">

<div>

<h1>Internship Opportunities</h1>

<p>
Internships matched to your verified skill profile.
</p>

</div>

</div>


<div class="grid grid2">


<div class="card opportunity">

<div class="page-header">

<div>

<h3>
Java Developer Intern
</h3>

<p class="company">
CodeSphere Technologies • Remote
</p>

</div>

<div class="match">
91%
</div>

</div>

<p class="muted">

Work with Java services, SQL databases and REST APIs.

</p>

<div class="tags">

<span class="skill-tag">Java</span>
<span class="skill-tag">SQL</span>
<span class="skill-tag">REST</span>
<span class="skill-tag">Git</span>

</div>

<div class="actions">

<button
class="btn"
onclick="applyJob('Java Developer Intern','CodeSphere Technologies')">

Apply Now

</button>

<button
class="btn btn-outline"
onclick="toast('Opportunity details opened')">

Details

</button>

</div>

</div>


<div class="card opportunity">

<div class="page-header">

<div>

<h3>
Full Stack Developer Intern
</h3>

<p class="company">
TechNova Solutions • Chennai
</p>

</div>

<div class="match">
87%
</div>

</div>

<p class="muted">

Develop web applications across frontend and backend.

</p>

<div class="tags">

<span class="skill-tag">React</span>
<span class="skill-tag">Node.js</span>
<span class="skill-tag">SQL</span>

</div>

<div class="actions">

<button
class="btn"
onclick="applyJob('Full Stack Developer Intern','TechNova Solutions')">

Apply Now

</button>

<button
class="btn btn-outline"
onclick="toast('Opportunity details opened')">

Details

</button>

</div>

</div>

</div>

</div>


<!-- ================= JOBS ================= -->

<div id="page-jobs" class="page">

<div class="page-header">

<div>

<h1>Placement Jobs</h1>

<p>
Placement opportunities based on your skill profile.
</p>

</div>

</div>


<div class="grid grid2">


<div class="card opportunity">

<div class="page-header">

<div>

<h3>
Graduate Software Engineer
</h3>

<p class="company">
TechNova Solutions
</p>

</div>

<div class="match">
88%
</div>

</div>

<p class="muted">
Entry-level software engineering position.
</p>

<div class="tags">
<span class="skill-tag">Java</span>
<span class="skill-tag">SQL</span>
<span class="skill-tag">DSA</span>
</div>

<button
class="btn"
onclick="applyJob('Graduate Software Engineer','TechNova Solutions')">

Apply

</button>

</div>


<div class="card opportunity">

<div class="page-header">

<div>

<h3>
Junior Full Stack Developer
</h3>

<p class="company">
DigitalWorks
</p>

</div>

<div class="match">
81%
</div>

</div>

<p class="muted">
Build and maintain web products.
</p>

<div class="tags">
<span class="skill-tag">React</span>
<span class="skill-tag">Node.js</span>
<span class="skill-tag">MongoDB</span>
</div>

<button
class="btn"
onclick="applyJob('Junior Full Stack Developer','DigitalWorks')">

Apply

</button>

</div>

</div>

</div>


<!-- ================= APPLICATIONS ================= -->

<div id="page-applications" class="page">

<div class="page-header">

<div>

<h1>Application Tracking</h1>

<p>
Track internships, jobs, interviews and selection status.
</p>

</div>

</div>


<div class="card table-wrap">

<table>

<thead>

<tr>

<th>Opportunity</th>
<th>Company</th>
<th>Match</th>
<th>Status</th>
<th>Updated</th>

</tr>

</thead>

<tbody id="applicationTable">

<tr>

<td>Java Developer Intern</td>
<td>CodeSphere</td>
<td>91%</td>

<td>
<span class="badge green">
Shortlisted
</span>
</td>

<td>Today</td>

</tr>


<tr>

<td>Full Stack Developer Intern</td>
<td>TechNova</td>
<td>87%</td>

<td>
<span class="badge yellow">
Under Review
</span>
</td>

<td>Yesterday</td>

</tr>


<tr>

<td>Graduate Software Engineer</td>
<td>TechNova</td>
<td>88%</td>

<td>
<span class="badge">
Applied
</span>
</td>

<td>2 days ago</td>

</tr>

</tbody>

</table>

</div>


<br>


<div class="card">

<h3>
Application Journey
</h3>


<div class="timeline">

<div class="timeline-item done">

<div class="timeline-dot">
✓
</div>

<small>
Applied
</small>

</div>


<div class="timeline-item done">

<div class="timeline-dot">
✓
</div>

<small>
Screening
</small>

</div>


<div class="timeline-item done">

<div class="timeline-dot">
✓
</div>

<small>
Interview
</small>

</div>


<div class="timeline-item">

<div class="timeline-dot">
4
</div>

<small>
Selection
</small>

</div>


<div class="timeline-item">

<div class="timeline-dot">
5
</div>

<small>
Joined
</small>

</div>

</div>

</div>

</div>


<!-- ================= INTERVIEW ================= -->

<div id="page-interview" class="page">

<div class="page-header">

<div>

<h1>Interview & Selection</h1>

<p>
Prepare for and track your industry interview.
</p>

</div>

<span class="badge green">
Interview Scheduled
</span>

</div>


<div class="grid grid2">

<div class="card">

<h3>
Technical Interview
</h3>

<br>

<div class="analysis-row">
<span>Date</span>
<strong>24 Sep 2026</strong>
</div>

<div class="analysis-row">
<span>Mode</span>
<strong>Online</strong>
</div>

<div class="analysis-row">
<span>Round</span>
<strong>Technical Round</strong>
</div>

<br>

<button
class="btn"
onclick="toast('Interview preparation opened')">

Practice Interview

</button>

</div>


<div class="card">

<h3>
AI Interview Preparation
</h3>

<br>

<div class="skill">

<div class="skill-top">
<span>DSA</span>
<b>80%</b>
</div>

<div class="progress">
<span style="width:80%"></span>
</div>

</div>


<div class="skill">

<div class="skill-top">
<span>Java</span>
<b>85%</b>
</div>

<div class="progress">
<span style="width:85%"></span>
</div>

</div>


<div class="skill">

<div class="skill-top">
<span>Communication</span>
<b>61%</b>
</div>

<div class="progress">
<span style="width:61%"></span>
</div>

</div>

</div>

</div>

</div>


<!-- ================= INTERNSHIP ================= -->

<div id="page-internship" class="page">

<div class="page-header">

<div>

<h1>My Internship</h1>

<p>
Track your active industry experience.
</p>

</div>

<span class="badge green">
Active
</span>

</div>


<div class="card">

<h3>
Java Developer Intern
</h3>

<p class="company">
CodeSphere Technologies
</p>

<br>

<div class="progress">
<span style="width:65%"></span>
</div>

<br>

<p class="muted">
65% of internship completed
</p>

<br>


<div class="grid grid3">

<div>

<strong>
12
</strong>

<p class="muted">
Tasks Completed
</p>

</div>

<div>

<strong>
3
</strong>

<p class="muted">
Projects / Modules
</p>

</div>

<div>

<strong>
2
</strong>

<p class="muted">
Weeks Remaining
</p>

</div>

</div>

</div>

</div>


<!-- ================= FEEDBACK ================= -->

<div id="page-feedback" class="page">

<div class="page-header">

<div>

<h1>Industry Feedback</h1>

<p>
Feedback received from your internship supervisor.
</p>

</div>

</div>


<div class="grid grid2">


<div class="card">

<h3>
Latest Evaluation
</h3>

<br>

<div class="analysis-row">
<span>Technical Skills</span>
<span class="badge green">
Excellent
</span>
</div>

<div class="analysis-row">
<span>Problem Solving</span>
<span class="badge green">
Good
</span>
</div>

<div class="analysis-row">
<span>Teamwork</span>
<span class="badge green">
Good
</span>
</div>

<div class="analysis-row">
<span>Communication</span>
<span class="badge yellow">
Needs Improvement
</span>
</div>

</div>


<div class="card">

<h3>
Updated Skill Profile
</h3>

<br>

<div class="skill">

<div class="skill-top">
<span>Java</span>
<b>88%</b>
</div>

<div class="progress">
<span style="width:88%"></span>
</div>

</div>


<div class="skill">

<div class="skill-top">
<span>Problem Solving</span>
<b>82%</b>
</div>

<div class="progress">
<span style="width:82%"></span>
</div>

</div>


<div class="skill">

<div class="skill-top">
<span>Communication</span>
<b>68%</b>
</div>

<div class="progress">
<span style="width:68%"></span>
</div>

</div>

</div>

</div>

</div>


<!-- ================= PLACEMENT READINESS ================= -->

<div id="page-readiness" class="page">

<div class="page-header">

<div>

<h1>Placement Readiness</h1>

<p>
Your complete journey converted into a placement readiness profile.
</p>

</div>

<span class="badge green">
Industry Ready
</span>

</div>


<div class="grid grid3">


<div class="card"
style="text-align:center">

<div class="score-circle">

<strong>
82%
</strong>

</div>

<br>

<h3>
Overall Readiness
</h3>

</div>


<div class="card">

<h3>
Technical Readiness
</h3>

<br>

<div class="skill">

<div class="skill-top">
<span>Technical Skills</span>
<b>84%</b>
</div>

<div class="progress">
<span style="width:84%"></span>
</div>

</div>

<div class="skill">

<div class="skill-top">
<span>DSA</span>
<b>76%</b>
</div>

<div class="progress">
<span style="width:76%"></span>
</div>

</div>

</div>


<div class="card">

<h3>
Career Readiness
</h3>

<br>

<div class="analysis-row">
<span>Resume</span>
<span class="badge green">Ready</span>
</div>

<div class="analysis-row">
<span>Projects</span>
<span class="badge green">Ready</span>
</div>

<div class="analysis-row">
<span>Interview</span>
<span class="badge yellow">Improve</span>
</div>

<div class="analysis-row">
<span>Communication</span>
<span class="badge yellow">Improve</span>
</div>

</div>

</div>


<br>


<div class="card">

<h3>
Placement Checklist
</h3>

<br>

<div class="analysis-row">
<span>Resume Verified</span>
<span class="badge green">✓</span>
</div>

<div class="analysis-row">
<span>Skill Assessment</span>
<span class="badge green">✓</span>
</div>

<div class="analysis-row">
<span>Skill Gap Analysis</span>
<span class="badge green">✓</span>
</div>

<div class="analysis-row">
<span>Industry Project</span>
<span class="badge green">✓</span>
</div>

<div class="analysis-row">
<span>Internship Experience</span>
<span class="badge green">✓</span>
</div>

<div class="analysis-row">
<span>Industry Feedback</span>
<span class="badge green">✓</span>
</div>

</div>

</div>


<!-- ================= FACULTY ================= -->

<div id="page-facultyDashboard" class="page">

<div class="welcome">

<h1>
Faculty Dashboard
</h1>

<p>
Monitor student skills, industry requirements and placement readiness.
</p>

</div>


<div class="grid grid4">

<div class="card stat">

<div class="stat-title">
Students
</div>

<div class="stat-number">
520
</div>

</div>


<div class="card stat">

<div class="stat-title">
Industry Ready
</div>

<div class="stat-number">
318
</div>

</div>


<div class="card stat">

<div class="stat-title">
Skill Gaps
</div>

<div class="stat-number">
202
</div>

</div>


<div class="card stat">

<div class="stat-title">
Placement Rate
</div>

<div class="stat-number">
74%
</div>

</div>

</div>


<br>


<div class="grid grid2">

<div class="card">

<h3>
Department Skill Overview
</h3>

<br>

<div class="skill">

<div class="skill-top">
<span>Java</span>
<b>82%</b>
</div>

<div class="progress">
<span style="width:82%"></span>
</div>

</div>

<div class="skill">

<div class="skill-top">
<span>SQL</span>
<b>76%</b>
</div>

<div class="progress">
<span style="width:76%"></span>
</div>

</div>

<div class="skill">

<div class="skill-top">
<span>Web Development</span>
<b>63%</b>
</div>

<div class="progress">
<span style="width:63%"></span>
</div>

</div>

</div>


<div class="card">

<h3>
Industry Demand
</h3>

<br>

<div class="analysis-row">
<span>Java + Spring</span>
<span class="badge green">High</span>
</div>

<div class="analysis-row">
<span>React</span>
<span class="badge green">High</span>
</div>

<div class="analysis-row">
<span>Cloud</span>
<span class="badge yellow">Growing</span>
</div>

</div>

</div>

</div>


<!-- FACULTY STUDENTS -->

<div id="page-students" class="page">

<div class="page-header">

<div>

<h1>Students</h1>

<p>
Student skill and placement readiness.
</p>

</div>

</div>


<div class="card table-wrap">

<table>

<thead>

<tr>
<th>Student</th>
<th>Target Role</th>
<th>Skill Score</th>
<th>Industry Match</th>
<th>Status</th>
</tr>

</thead>

<tbody>

<tr>
<td>Student A</td>
<td>Full Stack Developer</td>
<td>89%</td>
<td>94%</td>
<td>
<span class="badge green">
Ready
</span>
</td>
</tr>

<tr>
<td>Student B</td>
<td>Java Developer</td>
<td>82%</td>
<td>88%</td>
<td>
<span class="badge green">
Ready
</span>
</td>
</tr>

<tr>
<td>Student C</td>
<td>Data Analyst</td>
<td>68%</td>
<td>73%</td>
<td>
<span class="badge yellow">
Upskill
</span>
</td>
</tr>

</tbody>

</table>

</div>

</div>


<!-- FACULTY ANALYTICS -->

<div id="page-facultyAnalytics" class="page">

<div class="page-header">

<div>

<h1>
Skill Analytics
</h1>

<p>
Identify institutional skill gaps.
</p>

</div>

</div>


<div class="grid grid3">

<div class="card">

<h3>
Technical Skills
</h3>

<br>

<span class="badge green">
Java 82%
</span>

<span class="badge green">
SQL 76%
</span>

</div>


<div class="card">

<h3>
Priority Gaps
</h3>

<br>

<span class="badge red">
React
</span>

<span class="badge red">
REST API
</span>

</div>


<div class="card">

<h3>
Placement Readiness
</h3>

<br>

<div class="stat-number">
61%
</div>

<div class="progress">

<span style="width:61%"></span>

</div>

</div>

</div>

</div>


<!-- FACULTY REPORTS -->

<div id="page-facultyReports" class="page">

<div class="page-header">

<div>

<h1>
Reports
</h1>

<p>
Academic and industry analytics.
</p>

</div>

</div>


<div class="card">

<div class="analysis-row">

<span>
Department Skill Gap Report
</span>

<button
class="btn btn-outline"
onclick="toast('Report opened')">

View

</button>

</div>


<div class="analysis-row">

<span>
Internship Outcome Report
</span>

<button
class="btn btn-outline"
onclick="toast('Report opened')">

View

</button>

</div>


<div class="analysis-row">

<span>
Placement Readiness Report
</span>

<button
class="btn btn-outline"
onclick="toast('Report opened')">

View

</button>

</div>

</div>

</div>


<!-- ================= INDUSTRY ================= -->

<div id="page-industryDashboard" class="page">

<div class="welcome">

<h1>
Industry Dashboard
</h1>

<p>
Find verified talent using skill-based matching.
</p>

</div>


<div class="grid grid4">

<div class="card stat">

<div class="stat-title">
Active Internships
</div>

<div class="stat-number">
12
</div>

</div>

<div class="card stat">

<div class="stat-title">
Job Openings
</div>

<div class="stat-number">
8
</div>

</div>

<div class="card stat">

<div class="stat-title">
Matched Students
</div>

<div class="stat-number">
146
</div>

</div>

<div class="card stat">

<div class="stat-title">
Applications
</div>

<div class="stat-number">
82
</div>

</div>

</div>


<br>


<div class="grid grid2">

<div class="card">

<h3>
Quick Actions
</h3>

<br>

<button
class="btn"
onclick="showPage('requirements')">

Create Requirement

</button>

<button
class="btn btn-outline"
onclick="showPage('talent')">

Find Students

</button>

</div>


<div class="card">

<h3>
Recent Activity
</h3>

<br>

<div class="analysis-row">

<span>
14 students matched
</span>

<span class="badge green">
New
</span>

</div>

<div class="analysis-row">

<span>
6 new applications
</span>

<span class="badge">
Today
</span>

</div>

</div>

</div>

</div>


<!-- REQUIREMENTS -->

<div id="page-requirements" class="page">

<div class="page-header">

<div>

<h1>
Industry Skill Requirements
</h1>

<p>
Define skills required for your roles.
</p>

</div>

<button
class="btn"
onclick="openRequirementModal()">

+ New Requirement

</button>

</div>


<div class="grid grid2">

<div class="card">

<h3>
Software Developer
</h3>

<p class="muted">
Required skills
</p>

<div class="tags">

<span class="skill-tag">
Java • Advanced
</span>

<span class="skill-tag">
SQL • Intermediate
</span>

<span class="skill-tag">
DSA • Intermediate
</span>

<span class="skill-tag">
REST API • Intermediate
</span>

</div>

</div>


<div class="card">

<h3>
Full Stack Intern
</h3>

<p class="muted">
Required skills
</p>

<div class="tags">

<span class="skill-tag">
React • Intermediate
</span>

<span class="skill-tag">
Node.js • Intermediate
</span>

<span class="skill-tag">
SQL • Intermediate
</span>

</div>

</div>

</div>

</div>


<!-- TALENT -->

<div id="page-talent" class="page">

<div class="page-header">

<div>

<h1>
Find Talent
</h1>

<p>
Students matched against your skill requirements.
</p>

</div>

<span class="badge green">
146 Matches
</span>

</div>


<div class="card table-wrap">

<table>

<thead>

<tr>

<th>Student</th>
<th>Role</th>
<th>Match</th>
<th>Verified Skills</th>
<th>Action</th>

</tr>

</thead>

<tbody>

<tr>

<td>
Student A
</td>

<td>
Full Stack
</td>

<td>
<strong>
94%
</strong>
</td>

<td>
Java, React, SQL, Git
</td>

<td>

<button
class="btn btn-outline"
onclick="toast('Student profile opened')">

View

</button>

</td>

</tr>


<tr>

<td>
Student B
</td>

<td>
Java Developer
</td>

<td>
<strong>
89%
</strong>
</td>

<td>
Java, SQL, DSA, REST
</td>

<td>

<button
class="btn btn-outline"
onclick="toast('Student profile opened')">

View

</button>

</td>

</tr>


<tr>

<td>
Student C
</td>

<td>
Software Engineer
</td>

<td>
<strong>
83%
</strong>
</td>

<td>
Java, SQL, Git
</td>

<td>

<button
class="btn btn-outline"
onclick="toast('Student profile opened')">

View

</button>

</td>

</tr>

</tbody>

</table>

</div>

</div>


<!-- POSTINGS -->

<div id="page-postings" class="page">

<div class="page-header">

<div>

<h1>
Industry Opportunities
</h1>

<p>
Manage internships and placement openings.
</p>

</div>

<button
class="btn"
onclick="openRequirementModal()">

+ New Opportunity

</button>

</div>


<div class="grid grid2">

<div class="card">

<h3>
Full Stack Developer Intern
</h3>

<p class="company">
12 applicants • Active
</p>

<span class="badge green">
Internship
</span>

<span class="badge">
87% Avg Match
</span>

</div>


<div class="card">

<h3>
Graduate Software Engineer
</h3>

<p class="company">
31 applicants • Active
</p>

<span class="badge green">
Placement
</span>

<span class="badge">
82% Avg Match
</span>

</div>

</div>

</div>


<!-- INDUSTRY FEEDBACK -->

<div id="page-industryFeedback" class="page">

<div class="page-header">

<div>

<h1>
Industry Evaluation
</h1>

<p>
Provide feedback after an internship or project.
</p>

</div>

</div>


<div class="card">

<div class="input-group">

<label>
Student
</label>

<select>

<option>
Student A — Full Stack Intern
</option>

<option>
Student B — Java Intern
</option>

</select>

</div>


<div class="grid grid2">

<div class="input-group">

<label>
Technical Skills
</label>

<select>

<option>Excellent</option>
<option>Good</option>
<option>Needs Improvement</option>

</select>

</div>


<div class="input-group">

<label>
Problem Solving
</label>

<select>

<option>Excellent</option>
<option>Good</option>
<option>Needs Improvement</option>

</select>

</div>


<div class="input-group">

<label>
Communication
</label>

<select>

<option>Excellent</option>
<option>Good</option>
<option>Needs Improvement</option>

</select>

</div>


<div class="input-group">

<label>
Teamwork
</label>

<select>

<option>Excellent</option>
<option>Good</option>
<option>Needs Improvement</option>

</select>

</div>

</div>


<div class="input-group">

<label>
Comments
</label>

<textarea
placeholder="Enter practical feedback...">
</textarea>

</div>


<button
class="btn btn-green"
onclick="toast('Feedback submitted. Student profile updated.')">

Submit Evaluation

</button>

</div>

</div>


</div>
</main>
</section>


<!-- ================= MODAL ================= -->

<div id="modal" class="modal">

<div class="modal-box">

<div class="modal-header">

<h2>
Create Opportunity
</h2>

<button
class="close"
onclick="closeModal()">

×

</button>

</div>


<div class="input-group">

<label>
Opportunity Title
</label>

<input
id="newOpportunity"
placeholder="Java Developer Intern">

</div>


<div class="input-group">

<label>
Type
</label>

<select>

<option>
Internship
</option>

<option>
Placement
</option>

</select>

</div>


<div class="input-group">

<label>
Required Skills
</label>

<input
placeholder="Java, SQL, React, Git">

</div>


<button
class="btn"
onclick="createOpportunity()">

Publish Opportunity

</button>

</div>

</div>


<div id="toast" class="toast"></div>


<!-- ================= JAVASCRIPT ================= -->

<script>

let currentRole="student";

let applications=4;


/* AUTH */

function switchAuth(type,button){

document
.querySelectorAll(".tabs button")
.forEach(btn=>{
btn.classList.remove("active");
});

button.classList.add("active");

document
.getElementById("loginForm")
.classList.toggle(
"hidden",
type!=="login"
);

document
.getElementById("signupForm")
.classList.toggle(
"hidden",
type!=="signup"
);

}


function login(){

currentRole=
document.getElementById("loginRole").value;

let name=
document.getElementById("signupName")?.value ||
"Student";

document
.getElementById("loginPage")
.classList.add("hidden");

document
.getElementById("app")
.classList.remove("hidden");

setupRole(name);

toast(
"Welcome to SkillBridge"
);

}


function setupRole(name){

document
.getElementById("studentNav")
.classList.add("hidden");

document
.getElementById("facultyNav")
.classList.add("hidden");

document
.getElementById("industryNav")
.classList.add("hidden");


let roleText="Student";

let nav;


if(currentRole==="student"){

roleText="Student";

nav="studentNav";

showPage("dashboard");

}

else if(currentRole==="faculty"){

roleText="Faculty";

nav="facultyNav";

showPage("facultyDashboard");

}

else{

roleText="Industry";

nav="industryNav";

showPage("industryDashboard");

}


document
.getElementById(nav)
.classList.remove("hidden");

document
.getElementById("roleName")
.textContent=roleText;

document
.getElementById("avatar")
.textContent=roleText[0];

document
.getElementById("portalLabel")
.textContent=
roleText.toUpperCase()+" PORTAL";

document
.getElementById("welcomeName")
.textContent=name||"Student";

}


function logout(){

document
.getElementById("app")
.classList.add("hidden");

document
.getElementById("loginPage")
.classList.remove("hidden");

toast("Logged out");

}


/* NAVIGATION */

function showPage(page,button){

document
.querySelectorAll(".page")
.forEach(page=>{
page.classList.remove("active");
});


let target=
document.getElementById("page-"+page);

if(target){
target.classList.add("active");
}


document
.querySelectorAll(".nav button")
.forEach(btn=>{
btn.classList.remove("active");
});


if(button){

button.classList.add("active");

}

else{

let navButton=
document.querySelector(
'[onclick*="showPage(\''+page+'\'"]'
);

if(navButton){
navButton.classList.add("active");
}

}


window.scrollTo({
top:0,
behavior:"smooth"
});

}


/* PROFILE */

function saveProfile(){

let name=
document
.getElementById("profileName")
.value;

document
.getElementById("welcomeName")
.textContent=name;

document
.getElementById("avatar")
.textContent=
name.charAt(0).toUpperCase();

toast(
"Profile saved successfully"
);

}


/* RESUME */

function uploadResume(input){

if(!input.files.length)
return;

let file=input.files[0];

if(file.size>5*1024*1024){

toast(
"Resume must be under 5 MB"
);

return;

}


document
.getElementById("resumeResult")
.innerHTML=`

<div class="card"
style="margin-top:18px">

<div class="page-header">

<div>

<strong>
📄 ${file.name}
</strong>

<p class="muted">
Resume uploaded successfully
</p>

</div>

<span class="badge green">
Verified
</span>

</div>


<h3>
AI Extracted Skills
</h3>

<div class="extracted-skills">

<span class="skill-tag">
Java
</span>

<span class="skill-tag">
SQL
</span>

<span class="skill-tag">
HTML
</span>

<span class="skill-tag">
CSS
</span>

<span class="skill-tag">
JavaScript
</span>

<span class="skill-tag">
Git
</span>

<span class="skill-tag">
REST API
</span>

</div>

<br>

<button
class="btn"
onclick="showPage('assessment')">

Continue to Assessment →

</button>

</div>

`;

toast(
"Resume uploaded successfully"
);

}


/* ASSESSMENT */

function submitAssessment(){

let score=0;

for(let i=1;i<=5;i++){

let answer=
document.querySelector(
'input[name="q'+i+'"]:checked'
);

if(answer){

score+=
Number(answer.value);

}

}


let percentage=
Math.round(score/5*100);

toast(
"Assessment completed — AI analysis updated"
);

setTimeout(()=>{

showPage("analysis");

},700);

}


/* APPLICATION */

function applyJob(title,company){

applications++;

document
.getElementById("applicationCount")
.textContent=applications;


let table=
document.getElementById(
"applicationTable"
);


if(table){

let row=
document.createElement("tr");

row.innerHTML=`

<td>
${title}
</td>

<td>
${company}
</td>

<td>
Matched
</td>

<td>

<span class="badge">
Applied
</span>

</td>

<td>
Just now
</td>

`;

table.prepend(row);

}


toast(
"Application submitted successfully"
);

}


/* MODAL */

function openRequirementModal(){

document
.getElementById("modal")
.classList.add("show");

}


function closeModal(){

document
.getElementById("modal")
.classList.remove("show");

}


function createOpportunity(){

let title=
document
.getElementById("newOpportunity")
.value ||
"New Opportunity";

closeModal();

toast(
title+" published successfully"
);

}


/* TOAST */

function toast(message){

let element=
document.getElementById("toast");

element.textContent=message;

element.classList.add("show");

clearTimeout(window.toastTimer);

window.toastTimer=
setTimeout(()=>{

element.classList.remove("show");

},2500);

}


/* CLOSE MODAL */

window.onclick=function(event){

let modal=
document.getElementById("modal");

if(event.target===modal){

closeModal();

}

}

</script>

</body>
</html>
