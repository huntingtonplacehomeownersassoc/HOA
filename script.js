/* ===========================================================================
   BOARD MEMBERS: EDIT HERE
   ---------------------------------------------------------------------------
   This is the ONLY part of the website you need to touch to manage documents.

   HOW TO UPDATE DOCUMENTS:
     • Each category below holds a list of documents.
     • Each document is ONE line:  { title: "Name shown on site", url: "LINK" }
     • TO ADD a document:    copy a line, change the title and url.
     • TO REMOVE a document: delete that one line.
     • TO RENAME:            change the text inside the title quotes.
     • Paste the real PDF link in place of "PASTE_PDF_URL_HERE".

   That's it. Do not change anything below the marked END line.
   =========================================================================== */

const DOCUMENT_LIBRARY = [
  {
    category: "Governing Documents",
    documents: [
      {
        title: "Huntington Bylaws.pdf",
        url: "https://drive.google.com/file/d/1_j1q9L91I65iMkE8YJ4X0QP_SDG0L1-Q/view?usp=sharing"
      },
      {
        title: "HPHOA Covenants and Restrictions.pdf",
        url: "https://thepossiblecompany.sharepoint.com/contentstorage/CSP_21747852-c485-4213-b774-81fd56419e5d/_layouts/15/Embed.aspx?UniqueId=8fe0313a-ef1b-4f01-b8bb-9d0d1bc6634b&EntityRepresentationId=35cf7e15-dc0c-42b9-a4cb-09b3a161d7e4"
      }
    ]
  },
  {
    category: "Financials (Budget vs Actual)",
    documents: [
      { title: "2020 Financials.pdf", url: "PASTE_PDF_URL_HERE" },
      { title: "2021 Financials.pdf", url: "PASTE_PDF_URL_HERE" },
      { title: "2022 Financials.pdf", url: "PASTE_PDF_URL_HERE" },
      { title: "2023 Financials.pdf", url: "PASTE_PDF_URL_HERE" },
      { title: "2024 Financials.pdf", url: "PASTE_PDF_URL_HERE" },
      { title: "2025 Financials.pdf", url: "PASTE_PDF_URL_HERE" }
    ]
  },
  {
    category: "Pond / Commons Agreements & Cost Sharing",
    documents: [
      { title: "2004 HP II Agreement.pdf", url: "PASTE_PDF_URL_HERE" },
      { title: "2020 HP I Share of pond Expense.pdf", url: "PASTE_PDF_URL_HERE" },
      { title: "2021 HP Share of pond expense.pdf", url: "PASTE_PDF_URL_HERE" },
      { title: "2023 HO I Share of Pond Expense.pdf", url: "PASTE_PDF_URL_HERE" }
    ]
  },
  {
    category: "Notices & Member Letters",
    documents: [
      {
        title: "Special Meeting 12.4.25.pdf",
        url: "https://thepossiblecompany.sharepoint.com/contentstorage/CSP_21747852-c485-4213-b774-81fd56419e5d/_layouts/15/Embed.aspx?UniqueId=e7c3f51d-88bd-4ea2-aa93-e5acd4a12039&EntityRepresentationId=9b8d4e00-8da6-4a8d-a490-5ef994b44847"
      },
      {
        title: "NoticeToMembersAboutRightToTransparency.txt",
        url: "https://aka.ms/spe-openfilelocation?EntityRepresentationId=e9ea557f-2f78-4ab9-8be0-d7259741adc3"
      },
      {
        title: "LetterToPresidentOfHOA.txt",
        url: "https://aka.ms/spe-openfilelocation?EntityRepresentationId=2ee94113-e293-4a8a-920b-277b98e84bc0"
      }
    ]
  },
  {
    category: "Michigan Law Reference",
    documents: [
      { title: "mcl-Act-162-of-1982.pdf", url: "PASTE_PDF_URL_HERE" }
    ]
  }
];

/* ===========================================================================
   END OF BOARD-MEMBER EDITABLE SECTION
   Do not change anything below this line.
   =========================================================================== */

(function () {
  "use strict";

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---------- Mobile nav toggle ---------- */
  var navToggle = document.getElementById("navToggle");
  var navMenu = document.getElementById("navMenu");
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      var open = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // Close the menu after a link is tapped (mobile)
    navMenu.addEventListener("click", function (e) {
      if (e.target.classList.contains("nav__link")) {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Documents: dropdown + dynamic list ---------- */
  var select = document.getElementById("categorySelect");
  var list = document.getElementById("documentsList");

  function renderDocuments(index) {
    list.innerHTML = "";
    var entry = DOCUMENT_LIBRARY[index];
    if (!entry || !entry.documents.length) {
      var empty = document.createElement("li");
      empty.className = "documents__empty";
      empty.textContent = "No documents in this category yet.";
      list.appendChild(empty);
      return;
    }

    entry.documents.forEach(function (doc) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.textContent = doc.title;
      a.href = doc.url;
      a.target = "_blank";
      a.rel = "noopener";
      li.appendChild(a);
      list.appendChild(li);
    });
  }

  if (select && list) {
    DOCUMENT_LIBRARY.forEach(function (entry, i) {
      var opt = document.createElement("option");
      opt.value = String(i);
      opt.textContent = entry.category;
      select.appendChild(opt);
    });

    select.addEventListener("change", function () {
      renderDocuments(parseInt(select.value, 10));
    });

    renderDocuments(0); // show first category on load
  }

  /* ---------- Highlight active nav section on scroll ---------- */
  var sections = document.querySelectorAll("main section[id]");
  var links = document.querySelectorAll(".nav__link");

  function setActiveLink() {
    var pos = window.scrollY + 90;
    var currentId = "";
    sections.forEach(function (sec) {
      if (sec.offsetTop <= pos) {
        currentId = sec.id;
      }
    });
    links.forEach(function (link) {
      var isActive = link.getAttribute("href") === "#" + currentId;
      link.classList.toggle("is-active", isActive);
    });
  }

  window.addEventListener("scroll", setActiveLink, { passive: true });
  setActiveLink();
})();
