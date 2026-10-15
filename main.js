/* ============================================================
   RETRO FUTURE · main.js
   粒子背景 / 打字机 / 滚动渐显 / 技能雷达 / Lightbox
   ============================================================ */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ============================================================
     1. 粒子背景（跟随光标轻微流动）
     ============================================================ */
  (function particles() {
    // JS 可用时用粒子替换静态星点兜底
    var stars = document.querySelector('.no-js-stars');
    if (stars) stars.remove();

    var canvas = document.getElementById('particles');
    if (!canvas || reduceMotion) { if (canvas) canvas.remove(); return; }

    var ctx = canvas.getContext('2d');
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var W = 0, H = 0, dots = [];
    var mouse = { x: -9999, y: -9999 };
    var COLORS = ['34,211,238', '255,46,136', '139,92,246', '255,184,107'];

    function resize() {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = W + 'px';
      canvas.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var count = Math.min(110, Math.floor(W * H / 14000));
      dots = [];
      for (var i = 0; i < count; i++) {
        dots.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
          r: Math.random() * 1.6 + 0.6,
          c: COLORS[i % COLORS.length]
        });
      }
    }

    function tick() {
      ctx.clearRect(0, 0, W, H);
      var i, j, d, dx, dy;

      for (i = 0; i < dots.length; i++) {
        d = dots[i];
        // 光标附近的粒子被轻轻吸引（轻微流动）
        dx = mouse.x - d.x;
        dy = mouse.y - d.y;
        var md = Math.sqrt(dx * dx + dy * dy);
        if (md < 180 && md > 0.01) {
          d.vx += (dx / md) * 0.012;
          d.vy += (dy / md) * 0.012;
        }
        // 限速
        var sp = Math.sqrt(d.vx * d.vx + d.vy * d.vy);
        if (sp > 0.9) { d.vx = d.vx / sp * 0.9; d.vy = d.vy / sp * 0.9; }

        d.x += d.vx;
        d.y += d.vy;
        if (d.x < -10) d.x = W + 10; else if (d.x > W + 10) d.x = -10;
        if (d.y < -10) d.y = H + 10; else if (d.y > H + 10) d.y = -10;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + d.c + ',0.55)';
        ctx.fill();
      }

      // 邻近连线
      for (i = 0; i < dots.length; i++) {
        for (j = i + 1; j < dots.length; j++) {
          dx = dots[i].x - dots[j].x;
          dy = dots[i].y - dots[j].y;
          var dd = dx * dx + dy * dy;
          if (dd < 12100) {
            var a = (1 - Math.sqrt(dd) / 110) * 0.22;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = 'rgba(34,211,238,' + a.toFixed(3) + ')';
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(tick);
    }

    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('pointermove', function (e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }, { passive: true });
    window.addEventListener('pointerleave', function () {
      mouse.x = -9999; mouse.y = -9999;
    }, { passive: true });

    var running = true;
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) { running = false; }
      else if (!running) { running = true; requestAnimationFrame(tick); }
    });
    var origTick = tick;
    tick = function () { if (running) origTick(); };

    resize();
    requestAnimationFrame(tick);
  })();

  /* ============================================================
     2. 打字机（首屏身份轮换）
     ============================================================ */
  (function typing() {
    var el = document.getElementById('typed');
    if (!el) return;
    var roles = ['年级长', '宣传撰稿人', 'AI 训练师', '摄影爱好者', '跨领域学习者'];
    if (reduceMotion) { el.textContent = roles.join(' · '); return; }

    var ri = 0, ci = roles[0].length, deleting = false;
    function step() {
      var word = roles[ri];
      if (!deleting) {
        ci++;
        if (ci >= word.length) { ci = word.length; deleting = true; setTimeout(step, 1600); el.textContent = word; return; }
      } else {
        ci--;
        if (ci <= 0) { ci = 0; deleting = false; ri = (ri + 1) % roles.length; }
      }
      el.textContent = roles[ri].slice(0, ci);
      setTimeout(step, deleting ? 55 : 110);
    }
    setTimeout(step, 1800);
  })();

  /* ============================================================
     3. 滚动渐显
     ============================================================ */
  (function reveals() {
    var els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('shown'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('shown');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.15 });
    els.forEach(function (el) { io.observe(el); });
  })();

  /* ============================================================
     4. 技能雷达（SVG 互动星图）
     ============================================================ */
  (function radar() {
    var svg = document.getElementById('radar');
    if (!svg) return;

    var DATA = [
      { name: '文案写作', val: 92, desc: '公众号推文 / 新闻通讯稿 / 广播稿，成稿规范、可直接发布；院学生会宣传部现役写手。' },
      { name: '组织统筹', val: 88, desc: '2026级年级长：通知传达、信息汇总、活动组织，多任务并行下的协调与执行。' },
      { name: 'AI 应用', val: 85, desc: '阿里巴巴达摩院 AI 训练师持证；用 AI 搭建七语言个人网站、辅助写作与数据处理。' },
      { name: '设计影像', val: 80, desc: '摄影与基础修图、排版；活动拍摄与宣传物料制作，画廊里都是实拍作品。' },
      { name: '办公应用', val: 82, desc: 'Word / Excel / PowerPoint 熟练，文档排版、基础数据统计与汇报演示。' },
      { name: '双语能力', val: 78, desc: '中外合作办学项目在读，中法双语物流课程，斯特拉斯堡大学联合培养双学位。' }
    ];

    var NS = 'http://www.w3.org/2000/svg';
    var CX = 230, CY = 230, R = 150;
    var n = DATA.length;

    function pt(i, ratio) {
      var ang = -Math.PI / 2 + i * 2 * Math.PI / n;
      return [CX + Math.cos(ang) * R * ratio, CY + Math.sin(ang) * R * ratio];
    }
    function el(tag, attrs) {
      var e = document.createElementNS(NS, tag);
      for (var k in attrs) e.setAttribute(k, attrs[k]);
      return e;
    }
    function polygon(points, attrs) {
      return el('polygon', Object.assign({
        points: points.map(function (p) { return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' ')
      }, attrs));
    }

    //  defs：数据多边形渐变 + 发光
    var defs = el('defs', {});
    var grad = el('linearGradient', { id: 'radarGrad', x1: '0', y1: '0', x2: '1', y2: '1' });
    grad.appendChild(el('stop', { offset: '0%', 'stop-color': '#22d3ee', 'stop-opacity': '0.45' }));
    grad.appendChild(el('stop', { offset: '100%', 'stop-color': '#ff2e88', 'stop-opacity': '0.45' }));
    defs.appendChild(grad);
    var filt = el('filter', { id: 'radarGlow', x: '-40%', y: '-40%', width: '180%', height: '180%' });
    filt.appendChild(el('feGaussianBlur', { stdDeviation: '4', result: 'b' }));
    var merge = el('feMerge', {});
    merge.appendChild(el('feMergeNode', { in: 'b' }));
    merge.appendChild(el('feMergeNode', { in: 'SourceGraphic' }));
    filt.appendChild(merge);
    defs.appendChild(filt);
    svg.appendChild(defs);

    // 环（25/50/75/100%）
    [0.25, 0.5, 0.75, 1].forEach(function (r) {
      var pts = [];
      for (var i = 0; i < n; i++) pts.push(pt(i, r));
      svg.appendChild(polygon(pts, {
        fill: 'none', stroke: 'rgba(255,255,255,0.10)', 'stroke-width': '1'
      }));
    });

    // 轴线 + 标签
    for (var i = 0; i < n; i++) {
      var p = pt(i, 1);
      svg.appendChild(el('line', {
        x1: CX, y1: CY, x2: p[0], y2: p[1],
        stroke: 'rgba(255,255,255,0.10)', 'stroke-width': '1'
      }));
      var lp = pt(i, 1.22);
      var t = el('text', {
        x: lp[0], y: lp[1],
        'text-anchor': 'middle', 'dominant-baseline': 'middle',
        fill: '#9a9ab0', 'font-size': '13', 'letter-spacing': '1',
        'font-family': "'Space Mono', ui-monospace, monospace"
      });
      t.textContent = DATA[i].name;
      svg.appendChild(t);
    }

    // 数据多边形
    var dataPts = DATA.map(function (d, i) { return pt(i, d.val / 100); });
    var poly = polygon(dataPts, {
      fill: 'url(#radarGrad)', stroke: '#22d3ee', 'stroke-width': '2',
      'stroke-linejoin': 'round', filter: 'url(#radarGlow)',
      'class': 'radar-poly'
    });
    svg.appendChild(poly);

    // 顶点（可交互）
    var detail = {
      name: document.getElementById('sdName'),
      bar: document.getElementById('sdBar'),
      value: document.getElementById('sdValue'),
      desc: document.getElementById('sdDesc')
    };
    var vertices = [];

    function select(i) {
      vertices.forEach(function (v, j) {
        v.setAttribute('class', 'radar-vertex' + (j === i ? ' active' : ''));
      });
      detail.name.textContent = DATA[i].name;
      detail.value.textContent = DATA[i].val;
      detail.desc.textContent = DATA[i].desc;
      detail.bar.style.width = DATA[i].val + '%';
    }

    DATA.forEach(function (d, i) {
      var g = el('g', {
        'class': 'radar-vertex', tabindex: '0', role: 'button',
        'aria-label': d.name + ' ' + d.val + ' 分'
      });
      g.appendChild(el('circle', {
        cx: dataPts[i][0], cy: dataPts[i][1], r: 5.5,
        fill: '#ffffff', stroke: '#22d3ee', 'stroke-width': '2'
      }));
      g.addEventListener('mouseenter', function () { select(i); });
      g.addEventListener('focus', function () { select(i); });
      g.addEventListener('click', function () { select(i); });
      g.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(i); }
      });
      svg.appendChild(g);
      vertices.push(g);
    });

    // 进入视口时展开多边形
    if ('IntersectionObserver' in window && !reduceMotion) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            poly.setAttribute('class', 'radar-poly on');
            io.disconnect();
          }
        });
      }, { threshold: 0.35 });
      io.observe(svg);
    } else {
      poly.setAttribute('class', 'radar-poly on');
    }

    // 无 JS 兜底列表已不需要
    var fb = document.getElementById('skillListFallback');
    if (fb) fb.remove();
  })();

  /* ============================================================
     5. Lightbox
     ============================================================ */
  (function lightbox() {
    var box = document.getElementById('lightbox');
    if (!box) return;
    var img = box.querySelector('.lb-img');
    var closeBtn = box.querySelector('.lb-close');

    function open(src) {
      img.src = src;
      box.hidden = false;
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    }
    function close() {
      box.hidden = true;
      img.src = '';
      document.body.style.overflow = '';
    }
    document.querySelectorAll('.g-item img').forEach(function (im) {
      im.addEventListener('click', function () { open(im.src); });
    });
    closeBtn.addEventListener('click', close);
    box.addEventListener('click', function (e) { if (e.target === box) close(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !box.hidden) close();
    });
  })();

})();
