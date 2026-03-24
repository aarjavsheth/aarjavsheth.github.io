import "./styles.css";
import {
  about,
  contact,
  coursework,
  education,
  experience,
  hero,
  nav,
  projects,
  skillGroups,
  testimonials,
} from "./content";

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function externalLink(href: string, text: string): HTMLAnchorElement {
  const a = document.createElement("a");
  a.href = href;
  a.textContent = text;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  return a;
}

function sectionIndex(num: string, title: string, headingId: string): HTMLElement {
  const wrap = document.createElement("div");
  wrap.className = "section-head";
  const mono = document.createElement("span");
  mono.className = "section-index";
  mono.textContent = num;
  const h = document.createElement("h2");
  h.className = "section-title";
  h.id = headingId;
  h.textContent = title;
  wrap.append(mono, h);
  return wrap;
}

function heroConstellation(): string {
  return `
<svg class="hero-graphic" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path class="hero-graphic-line" d="M20 160 L90 120 L160 140 L240 80 L320 100 L380 40" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" />
  <path class="hero-graphic-line hero-graphic-line--delayed" d="M40 40 L100 90 L180 50 L260 130 L340 70" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" opacity="0.5" />
  <circle cx="90" cy="120" r="2" fill="currentColor" opacity="0.35" />
  <circle cx="240" cy="80" r="2" fill="currentColor" opacity="0.35" />
  <circle cx="320" cy="100" r="2" fill="currentColor" opacity="0.35" />
  <circle cx="180" cy="50" r="1.5" fill="currentColor" opacity="0.25" />
  <circle cx="260" cy="130" r="1.5" fill="currentColor" opacity="0.25" />
</svg>`.trim();
}

function buildHeader(): HTMLElement {
  const header = document.createElement("header");
  header.className = "site-header";

  const inner = document.createElement("div");
  inner.className = "site-header__inner";

  const brand = document.createElement("a");
  brand.className = "brand";
  brand.href = "#top";
  brand.textContent = hero.name;

  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "nav-toggle";
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-controls", "site-nav");
  toggle.innerHTML =
    '<span class="nav-toggle__bar"></span><span class="nav-toggle__bar"></span><span class="visually-hidden">Menu</span>';

  const navEl = document.createElement("nav");
  navEl.id = "site-nav";
  navEl.className = "site-nav";
  navEl.setAttribute("aria-label", "Primary");

  const ul = document.createElement("ul");
  ul.className = "site-nav__list";
  for (const item of nav) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${item.id}`;
    a.textContent = item.label;
    li.append(a);
    ul.append(li);
  }
  navEl.append(ul);

  toggle.addEventListener("click", () => {
    const open = navEl.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  navEl.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navEl.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  inner.append(brand, toggle, navEl);
  header.append(inner);
  return header;
}

function buildHero(): HTMLElement {
  const section = document.createElement("section");
  section.className = "hero reveal";
  section.id = "top";

  const grid = document.createElement("div");
  grid.className = "hero__grid";

  const copy = document.createElement("div");
  copy.className = "hero__copy";

  const role = document.createElement("p");
  role.className = "hero__role";
  role.textContent = hero.role;

  const h1 = document.createElement("h1");
  h1.className = "hero__name";
  h1.textContent = hero.name;

  const lede = document.createElement("p");
  lede.className = "hero__lede";
  lede.textContent = hero.lede;

  const actions = document.createElement("div");
  actions.className = "hero__actions";
  const resume = document.createElement("a");
  resume.className = "btn btn--primary";
  resume.href = contact.resumeUrl;
  resume.target = "_blank";
  resume.rel = "noopener noreferrer";
  resume.textContent = "Download resume";
  const mail = document.createElement("a");
  mail.className = "btn btn--ghost";
  mail.href = `mailto:${contact.email}`;
  mail.textContent = "Email";
  actions.append(resume, mail);

  copy.append(role, h1, lede, actions);

  const visual = document.createElement("div");
  visual.className = "hero__visual";
  visual.innerHTML = heroConstellation();

  grid.append(copy, visual);
  section.append(grid);
  return section;
}

function buildAbout(): HTMLElement {
  const section = document.createElement("section");
  section.className = "section section--tight reveal";
  section.id = "about";
  section.setAttribute("aria-labelledby", "about-heading");

  const head = sectionIndex("01", "About", "about-heading");

  const p = document.createElement("p");
  p.className = "prose";
  p.textContent = about.body;

  section.append(head, p);
  return section;
}

function buildExperience(): HTMLElement {
  const section = document.createElement("section");
  section.className = "section reveal";
  section.id = "experience";
  section.setAttribute("aria-labelledby", "experience-heading");

  section.append(sectionIndex("02", "Experience", "experience-heading"));

  const list = document.createElement("ol");
  list.className = "timeline";

  for (const job of experience) {
    const li = document.createElement("li");
    li.className = "timeline__item";

    const card = document.createElement("article");
    card.className = "card timeline__card";

    const top = document.createElement("div");
    top.className = "timeline__top";
    const h3 = document.createElement("h3");
    h3.className = "card__title";
    h3.textContent = job.title;
    const org = document.createElement("p");
    org.className = "card__meta";
    org.textContent = `${job.org} · ${job.location}`;
    top.append(h3, org);

    if (job.stack) {
      const stack = document.createElement("p");
      stack.className = "card__stack";
      stack.textContent = job.stack;
      card.append(top, stack);
    } else {
      card.append(top);
    }

    const desc = document.createElement("p");
    desc.className = "card__body";
    desc.textContent = job.description;
    card.append(desc);
    li.append(card);
    list.append(li);
  }

  section.append(list);
  return section;
}

function buildProjects(): HTMLElement {
  const section = document.createElement("section");
  section.className = "section reveal";
  section.id = "projects";
  section.setAttribute("aria-labelledby", "projects-heading");

  section.append(sectionIndex("03", "Projects", "projects-heading"));

  const grid = document.createElement("div");
  grid.className = "card-grid";

  for (const proj of projects) {
    const article = document.createElement("article");
    article.className = "card card--project";

    const titleRow = document.createElement("div");
    titleRow.className = "card--project__head";
    const link = externalLink(proj.url, proj.title);
    link.className = "card__link";
    titleRow.append(link);
    article.append(titleRow);

    const sum = document.createElement("p");
    sum.className = "card__body";
    sum.textContent = proj.summary;
    article.append(sum);

    if (proj.tech?.length) {
      const tags = document.createElement("ul");
      tags.className = "tag-list";
      for (const t of proj.tech) {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.className = "tag";
        span.textContent = t;
        li.append(span);
        tags.append(li);
      }
      article.append(tags);
    }

    grid.append(article);
  }

  section.append(grid);
  return section;
}

function buildSkills(): HTMLElement {
  const section = document.createElement("section");
  section.className = "section reveal";
  section.id = "skills";
  section.setAttribute("aria-labelledby", "skills-heading");

  section.append(sectionIndex("04", "Skills", "skills-heading"));

  const wrap = document.createElement("div");
  wrap.className = "skill-groups";

  for (const group of skillGroups) {
    const block = document.createElement("div");
    block.className = "skill-group";
    const h = document.createElement("h3");
    h.className = "skill-group__heading";
    h.textContent = group.heading;
    const ul = document.createElement("ul");
    ul.className = "tag-list tag-list--wrap";
    for (const item of group.items) {
      const li = document.createElement("li");
      const span = document.createElement("span");
      span.className = "tag tag--muted";
      span.textContent = item;
      li.append(span);
      ul.append(li);
    }
    block.append(h, ul);
    wrap.append(block);
  }

  section.append(wrap);
  return section;
}

function buildEducation(): HTMLElement {
  const section = document.createElement("section");
  section.className = "section reveal";
  section.id = "education";
  section.setAttribute("aria-labelledby", "education-heading");

  section.append(sectionIndex("05", "Education", "education-heading"));

  const list = document.createElement("div");
  list.className = "edu-list";

  for (const deg of education) {
    const block = document.createElement("div");
    block.className = "edu-card card";
    const h = document.createElement("h3");
    h.className = "card__title";
    h.textContent = deg.school;
    const d = document.createElement("p");
    d.className = "card__meta";
    d.textContent = [deg.degree, deg.detail].filter(Boolean).join(" · ");
    block.append(h, d);
    list.append(block);
  }

  const cw = document.createElement("div");
  cw.className = "coursework";
  const cwLabel = document.createElement("h3");
  cwLabel.className = "coursework__label";
  cwLabel.textContent = "Relevant coursework";
  const cwBody = document.createElement("p");
  cwBody.className = "coursework__body prose prose--compact";
  cwBody.textContent = coursework;
  cw.append(cwLabel, cwBody);

  section.append(list, cw);
  return section;
}

function buildTestimonials(): HTMLElement {
  const section = document.createElement("section");
  section.className = "section reveal";
  section.id = "testimonials";
  section.setAttribute("aria-labelledby", "testimonials-heading");

  section.append(sectionIndex("06", "Testimonials", "testimonials-heading"));

  const list = document.createElement("div");
  list.className = "testimonial-list";

  for (const t of testimonials) {
    const bq = document.createElement("blockquote");
    bq.className = "testimonial card";
    const p = document.createElement("p");
    p.className = "testimonial__quote";
    p.textContent = `“${t.quote}”`;
    const cite = document.createElement("cite");
    cite.className = "testimonial__cite";
    cite.textContent = t.attribution;
    bq.append(p, cite);
    list.append(bq);
  }

  section.append(list);
  return section;
}

function buildFooter(): HTMLElement {
  const footer = document.createElement("footer");
  footer.className = "site-footer reveal";
  footer.id = "contact";
  footer.setAttribute("aria-labelledby", "contact-heading");

  const inner = document.createElement("div");
  inner.className = "site-footer__inner";

  const head = sectionIndex("07", "Contact", "contact-heading");
  inner.append(head);

  const details = document.createElement("div");
  details.className = "contact-block";
  const name = document.createElement("p");
  name.className = "contact-block__name";
  name.textContent = contact.name;
  const loc = document.createElement("p");
  loc.className = "contact-block__line";
  loc.textContent = contact.location;
  const emailP = document.createElement("p");
  emailP.className = "contact-block__line";
  emailP.append(externalLink(`mailto:${contact.email}`, contact.email));

  const resume = document.createElement("p");
  resume.className = "contact-block__line";
  resume.append(externalLink(contact.resumeUrl, "Resume (PDF)"));

  details.append(name, loc, emailP, resume);
  inner.append(details);

  const copy = document.createElement("p");
  copy.className = "site-footer__copy";
  copy.textContent = `© ${new Date().getFullYear()} ${contact.name}`;

  footer.append(inner, copy);
  return footer;
}

function initReveals(): void {
  if (prefersReducedMotion()) {
    document.querySelectorAll(".reveal").forEach((el) => {
      el.classList.add("reveal--visible");
    });
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("reveal--visible");
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );

  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}

function mount(): void {
  const app = document.getElementById("app");
  if (!app) return;

  const main = document.createElement("main");
  main.id = "main";

  main.append(
    buildHero(),
    buildAbout(),
    buildExperience(),
    buildProjects(),
    buildSkills(),
    buildEducation(),
    buildTestimonials(),
  );

  app.append(buildHeader(), main, buildFooter());
  initReveals();
}

mount();
