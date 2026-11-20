// スマホメニュー
    const menuBtn = document.getElementById('menuBtn');
    const gnav = document.getElementById('gnav');
    menuBtn.addEventListener('click', () => {
      const open = gnav.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', open);
    });
    gnav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      gnav.classList.remove('is-open'); menuBtn.setAttribute('aria-expanded', false);
    }));
    // スクロールで表示
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { threshold: .12 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
