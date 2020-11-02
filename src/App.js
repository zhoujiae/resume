import React from 'react';
import { education, skill1, skill2, workExperience, projectExperience } from './data';
import './App.scss';

function Work(props) {
  const listItems = props.list.map(item => (
    <div className="work-item" key={item.time}>
      <div className="left">
        <img src={item.img} alt="" />
      </div>
      <div className="right">
        <p>公司：{item.company}</p>
        <p>时间：{item.time}</p>
        <p>岗位：{item.position}</p>
        <p>职责：{item.content}</p>
      </div>
    </div>
  ));
  return listItems;
}
function ProjectsLeft(props) {
  const listItems = props.list.map(item => (
    <div className="project-item" key={item.name}>
      <img className="project-img" src={item.img} alt="" />
      <div className="content">
        <p className="name">{item.name}</p>
        <p className="link">{item.link}</p>
        <p className="des">{item.des}</p>
      </div>
    </div>
  ));
  return listItems;
}
function ProjectsRight(props) {
  const listItems = props.list.map(item => (
    <div className="project-item" key={item.name}>
      <img className="project-img" src={item.img} alt="" />
      <div className="content">
        <p className="name">{item.name}</p>
        <p className="link">{item.link}</p>
        <p className="des">{item.des}</p>
      </div>
    </div>
  ));
  return listItems;
}
function CanvasBg(props) {
  var c = document.getElementById('canvas');
  var w = (c.width = window.innerWidth),
    h = (c.height = window.innerHeight),
    ctx = c.getContext('2d'),
    opts = {
      len: 20,
      count: 50,
      baseTime: 10,
      addedTime: 10,
      dieChance: 0.05,
      spawnChance: 1,
      sparkChance: 0.1,
      sparkDist: 10,
      sparkSize: 2,

      color: 'hsl(hue,100%,light%)',
      baseLight: 50,
      addedLight: 10, // [50-10,50+10]
      shadowToTimePropMult: 6,
      baseLightInputMultiplier: 0.01,
      addedLightInputMultiplier: 0.02,

      cx: w / 2,
      cy: h / 2,
      repaintAlpha: 0.04,
      hueChange: 0.1
    },
    tick = 0,
    lines = [],
    dieX = w / 2 / opts.len,
    dieY = h / 2 / opts.len,
    baseRad = (Math.PI * 2) / 6;

  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, w, h);

  function loop() {
    window.requestAnimationFrame(loop);

    ++tick;

    ctx.globalCompositeOperation = 'source-over';
    ctx.shadowBlur = 0;
    ctx.fillStyle = 'rgba(0,0,0,alp)'.replace('alp', opts.repaintAlpha);
    ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'lighter';

    if (lines.length < opts.count && Math.random() < opts.spawnChance) lines.push(new Line());

    lines.map(function(line) {
      line.step();
    });
  }
  function Line() {
    this.reset();
  }
  Line.prototype.reset = function() {
    this.x = 0;
    this.y = 0;
    this.addedX = 0;
    this.addedY = 0;

    this.rad = 0;

    this.lightInputMultiplier = opts.baseLightInputMultiplier + opts.addedLightInputMultiplier * Math.random();

    this.color = opts.color.replace('hue', tick * opts.hueChange);
    this.cumulativeTime = 0;

    this.beginPhase();
  };
  Line.prototype.beginPhase = function() {
    this.x += this.addedX;
    this.y += this.addedY;

    this.time = 0;
    this.targetTime = (opts.baseTime + opts.addedTime * Math.random()) | 0;

    this.rad += baseRad * (Math.random() < 0.5 ? 1 : -1);
    this.addedX = Math.cos(this.rad);
    this.addedY = Math.sin(this.rad);

    if (Math.random() < opts.dieChance || this.x > dieX || this.x < -dieX || this.y > dieY || this.y < -dieY) this.reset();
  };
  Line.prototype.step = function() {
    ++this.time;
    ++this.cumulativeTime;

    if (this.time >= this.targetTime) this.beginPhase();

    var prop = this.time / this.targetTime,
      wave = Math.sin((prop * Math.PI) / 2),
      x = this.addedX * wave,
      y = this.addedY * wave;

    ctx.shadowBlur = prop * opts.shadowToTimePropMult;
    ctx.fillStyle = ctx.shadowColor = this.color.replace(
      'light',
      opts.baseLight + opts.addedLight * Math.sin(this.cumulativeTime * this.lightInputMultiplier)
    );
    ctx.fillRect(opts.cx + (this.x + x) * opts.len, opts.cy + (this.y + y) * opts.len, 2, 2);

    if (Math.random() < opts.sparkChance)
      ctx.fillRect(
        opts.cx + (this.x + x) * opts.len + Math.random() * opts.sparkDist * (Math.random() < 0.5 ? 1 : -1) - opts.sparkSize / 2,
        opts.cy + (this.y + y) * opts.len + Math.random() * opts.sparkDist * (Math.random() < 0.5 ? 1 : -1) - opts.sparkSize / 2,
        opts.sparkSize,
        opts.sparkSize
      );
  };
  loop();

  window.addEventListener('resize', function() {
    w = c.width = window.innerWidth;
    h = c.height = window.innerHeight;
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, w, h);

    opts.cx = w / 2;
    opts.cy = h / 2;

    dieX = w / 2 / opts.len;
    dieY = h / 2 / opts.len;
  });
}
function Title(props) {
  return <p className="title">{props.title.toUpperCase()}</p>;
}
class App extends React.Component {
  componentDidMount() {
    CanvasBg();
  }
  render() {
    return (
      <div className="App">
        <div className="person">
          <canvas id="canvas"></canvas>
          <div className="content">
            <div className="icon-div">
              <img className="icon" src={require('./img/my.jpg')} alt="" />
            </div>
            <div className="des">{skill1}</div>
            <div className="des2">{skill2}</div>
          </div>
        </div>
        <Title title="EDUCATION" />
        <div className="education">
          <div className="left">
            <img src={require('./img/timg.jpeg')} alt="" />
          </div>
          <div className="right">
            <p>院校：{education.university}</p>
            <p>学历：{education.level}</p>
            <p>时间：{education.time}</p>
            <p>专业：{education.major}</p>
          </div>
        </div>
        <Title title="work Experience" />
        <div className="workExperience">
          <Work list={workExperience} />
        </div>
        <Title title="Project Experience" />
        <div className="projectExperience">
          <div className="projectExperience-left projectExperience-public">
            <ProjectsLeft list={projectExperience.left}></ProjectsLeft>
          </div>
          <div className="projectExperience-right projectExperience-public">
            <ProjectsRight list={projectExperience.right}></ProjectsRight>
          </div>
        </div>
        {/* <div className="interesting"></div> */}
        <div className="footer">
          <p>
            <img src={require('./img/phone.svg')} alt="" />
            <span>: 17521020251</span>
          </p>
          <p>
            <img src={require('./img/wx.svg')} alt="" />
            <span>: Adoration-Z</span>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
