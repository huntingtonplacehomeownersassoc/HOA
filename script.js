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
      { title: "Huntington Place Bylaws.pdf", url: "https://drive.google.com/file/d/1dzc-nJ6lKAqQKcqOaQ-ShW1jWpxZKV3Z/view?usp=drivesdk" },
      { title: "HPHOA Covenants and Restrictions.pdf", url: "https://drive.google.com/file/d/1luXDCqQNsMN1vWYtRray1UoYQ0N7Z_o1/view?usp=drivesdk" }
    ]
  },
  {
    category: "Ponds, Roads, and Maintenance",
    documents: [
      { title: "Pond Maintenance Guidelines.pdf", url: "https://drive.google.com/file/d/1aBcDeFgHiJkLmNoPqRsTuVwXyZ12345/view?usp=drivesdk" },
      { title: "2004 HP II Retention Pond Agreement.pdf", url: "https://drive.google.com/file/d/1nT9gedeViWDJ7JRV2cc3opsw1t6hPOVp/view?usp=drivesdk" },
      { title: "Road Work Local Match FAQs_20220823.pdf", url: "https://drive.google.com/file/d/1eXq9m-iPFeIpbn_3mKDJFwODJR5b8m1H/view?usp=drivesdk" }
      
    ]
  },
  {
    category: "Financial Documents",
    documents: [
      { title: "HP1 2023 Financials.pdf", url: "https://drive.google.com/file/d/11gdJpZn_oHf2L1Jllehly7M-LWuqcAq0/view?usp=drivesdk" },
      { title: "HP1 2022 Financials.pdf", url: "https://drive.google.com/file/d/141U2L1LAYTzWlZndwmz7rGvq8FkOYP5H/view?usp=drivesdk" },
      { title: "HP1 2024 Financials.pdf", url: "https://drive.google.com/file/d/1NoRgaHIRUJZeYvmqnKctPJ6HDe9hSY9V/view?usp=drivesdk" },
      { title: "HP1 2020 Financials.pdf", url: "https://drive.google.com/file/d/1RJKhlHGShkcFQ2XLVlCQbZc4wfaKiDrK/view?usp=drivesdk" },
      { title: "HP1 2025 Financials.pdf", url: "https://drive.google.com/file/d/1h97jqFVwMILVTG-kskye_wzb-hyZQFPf/view?usp=drivesdk" },
      { title: "HP1 2021 Financials.pdf", url: "https://drive.google.com/file/d/1rxIqerkQV75CABAO8aIH8icYWswsm6bg/view?usp=drivesdk" },
      { title: "HP1 2025 Financials.pdf", url: "https://drive.google.com/file/d/1h97jqFVwMILVTG-kskye_wzb-hyZQFPf/view?usp=drivesdk" },
      { title: "HP1 2021 Financials.pdf", url: "https://drive.google.com/file/d/1rxIqerkQV75CABAO8aIH8icYWswsm6bg/view?usp=drivesdk" }
    ]
  },
  {
    category: "Meeting Minutes",
    documents: [
      { title: "2025 Annual Meeting Minutes.pdf", url: "https://drive.google.com/file/d/1-rzx4bsNSojU_3R_G-d8b67Ggv5MPbyC/view?usp=drivesdk" },
      { title: "2022 Annual Meeting Minutes.pdf", url: "https://drive.google.com/file/d/14EkTCJEdkoPUxxZaaOc-BEA7_0_EA8tc/view?usp=drivesdk" },
      { title: "2020 Homeowners info Minutes.pdf", url: "https://drive.google.com/file/d/15YMiJOSzcSs5hCrtBUzoJ9-Po1OyVEuC/view?usp=drivesdk" },
      { title: "2024 Annual Meeting Minutes.pdf", url: "https://drive.google.com/file/d/1B1FvT689UtsSV7UiHOr6OLt3UP4bUyqt/view?usp=drivesdk" },
      { title: "2021 Annual Meeting Minutes.pdf", url: "https://drive.google.com/file/d/1FLVZOtiXQdBIzzciwIk8hIuu4QNWku8T/view?usp=drivesdk" },
      { title: "2023 Annual Meeting Minutes.pdf", url: "https://drive.google.com/file/d/1ciqGKoyqQtnkPMm_XfsxR3sAc0IXsr_7/view?usp=drivesdk" }
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
