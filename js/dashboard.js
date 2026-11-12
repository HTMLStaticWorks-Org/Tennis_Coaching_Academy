/**
 * Vantage Tennis Academy - Student Dashboard Controller
 * Multi-view sidebar navigation, court & coaching booking operations,
 * player progress analytics, fees & payment settlement, and official receipts.
 */

document.addEventListener('DOMContentLoaded', () => {
  const dashboardRoot = document.getElementById('dashboard-wrapper');
  if (!dashboardRoot) return;

  // Active User State
  let currentUser = SylvanStore.getUser();

  // Tab switching logic
  const navLinks = document.querySelectorAll('.dash-nav-link');
  const viewPanels = document.querySelectorAll('.dash-view-panel');
  const pageTitleEl = document.getElementById('dash-header-title');

  const tabTitles = {
    'overview': 'Student Dashboard Overview',
    'book-slots': 'Book Coaching & Court Slots',
    'bookings': 'My Bookings & Reservations',
    'progress': 'Player Progress & Skill Tracking',
    'upcoming': 'Upcoming Sessions & Court Passes',
    'past': 'Match & Session History',
    'saved': 'Saved Courts & Surfaces',
    'payments': 'Academy Tuition & Court Fees',
    'profile': 'Player Profile & Racket Specs',
    'support': 'Direct Coach Desk Support'
  };

  function switchTab(tabId) {
    if (!tabTitles[tabId]) tabId = 'overview';

    // Update nav links
    navLinks.forEach(link => {
      const linkTab = link.getAttribute('data-tab');
      if (linkTab === tabId) {
        link.classList.add('bg-emerald-800', 'text-white', 'shadow-sm');
        link.classList.remove('text-stone-600', 'dark:text-stone-400', 'hover:bg-stone-100', 'dark:hover:bg-stone-800/80');
      } else {
        link.classList.remove('bg-emerald-800', 'text-white', 'shadow-sm');
        link.classList.add('text-stone-600', 'dark:text-stone-400', 'hover:bg-stone-100', 'dark:hover:bg-stone-800/80');
      }
    });

    // Update panels
    viewPanels.forEach(panel => {
      if (panel.id === `dash-panel-${tabId}`) {
        panel.classList.remove('hidden');
        panel.classList.add('animate-fade-up');
      } else {
        panel.classList.add('hidden');
      }
    });

    // Update title
    if (pageTitleEl) pageTitleEl.textContent = tabTitles[tabId];

    // Close mobile sidebar if open
    const sidebar = document.getElementById('dash-sidebar');
    if (sidebar && window.innerWidth < 1280) {
      sidebar.classList.add('-translate-x-full');
    }

    // Refresh tab-specific data
    if (tabId === 'overview') renderOverview();
    if (tabId === 'book-slots') renderBookSlots('all');
    if (tabId === 'bookings') renderBookingsTable('all');
    if (tabId === 'upcoming') renderUpcomingSessions();
    if (tabId === 'past') renderPastSessions();
    if (tabId === 'saved') renderSavedCourts();
    if (tabId === 'payments') renderPayments();
    if (tabId === 'profile') populateProfileFields();

    window.location.hash = tabId;
    if (window.lucide) lucide.createIcons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Handle Tab Click
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = link.getAttribute('data-tab');
      switchTab(targetTab);
    });
  });

  // Mobile sidebar drawer
  const sidebarToggle = document.getElementById('dash-sidebar-toggle');
  const sidebar = document.getElementById('dash-sidebar');
  const sidebarClose = document.getElementById('dash-sidebar-close');

  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('-translate-x-full');
    });
  }
  if (sidebarClose && sidebar) {
    sidebarClose.addEventListener('click', () => {
      sidebar.classList.add('-translate-x-full');
    });
  }

  // ==========================================
  // VIEW: Overview
  // ==========================================
  function renderOverview() {
    const bookings = SylvanStore.getBookings();
    const upcoming = bookings.filter(b => b.status === 'Confirmed' && b.isUpcoming);
    const completed = bookings.filter(b => b.status === 'Completed');

    // Stats
    const upcomingCountEl = document.getElementById('stat-upcoming-trips');
    if (upcomingCountEl) upcomingCountEl.textContent = upcoming.length;

    const completedCountEl = document.getElementById('stat-completed-stays');
    if (completedCountEl) completedCountEl.textContent = (completed.length * 12) + 24; // Hours logged

    // Next upcoming session card
    const nextTripBox = document.getElementById('overview-next-trip-card');
    if (nextTripBox) {
      if (upcoming.length > 0) {
        const next = upcoming[0];
        nextTripBox.innerHTML = `
          <div class="relative bg-gradient-to-r rtl:bg-gradient-to-l from-emerald-950 via-emerald-900 to-[#072317] text-white rounded-3xl p-6 sm:p-8 overflow-hidden shadow-xl border border-emerald-800/40">
            <div class="next-trip-bg-img absolute right-0 rtl:right-auto rtl:left-0 top-0 w-1/2 h-full opacity-20 pointer-events-none">
              <img src="${next.stayImage}" alt="${next.stayName}" class="w-full h-full object-cover">
            </div>
            <div class="relative z-10 max-w-xl">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 border border-emerald-600/40 text-amber-300 text-xs font-semibold mb-4">
                <i data-lucide="award" class="w-3.5 h-3.5"></i> Next Scheduled Training Session
              </div>
              <h3 class="font-serif text-2xl sm:text-3xl font-bold mb-2">${next.stayName}</h3>
              <p class="text-emerald-200 text-sm mb-4 flex items-center gap-2">
                <i data-lucide="map-pin" class="w-4 h-4 text-amber-300"></i> ${next.location}
              </p>
              
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-emerald-800/80 text-xs text-emerald-100 mb-6">
                <div>
                  <span class="text-emerald-300 block text-[11px]">Date</span>
                  <span class="font-bold text-sm text-white">${next.checkIn}</span>
                </div>
                <div>
                  <span class="text-emerald-300 block text-[11px]">Time Window</span>
                  <span class="font-bold text-sm text-white">09:00 - 11:00 AM</span>
                </div>
                <div>
                  <span class="text-emerald-300 block text-[11px]">Surface</span>
                  <span class="font-bold text-sm text-white">Championship Grass</span>
                </div>
                <div>
                  <span class="text-emerald-300 block text-[11px]">Status</span>
                  <span class="font-bold text-sm text-emerald-400 flex items-center gap-1">
                    <i data-lucide="check-circle" class="w-3 h-3"></i> Confirmed
                  </span>
                </div>
              </div>

              <div class="flex flex-col sm:flex-row sm:items-center gap-3">
                <button class="btn-amber text-xs px-5 py-2.5 justify-center" onclick="window.showTripPassModal('${next.id}')">
                  <i data-lucide="ticket" class="w-4 h-4"></i> View Court Pass & QR
                </button>
                <button class="px-4 py-2.5 rounded-full border border-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold transition-all inline-flex items-center justify-center gap-1.5" onclick="window.showInvoiceModal('${next.id}')">
                  <i data-lucide="receipt" class="w-4 h-4"></i> <span>Official Receipt</span>
                </button>
              </div>
            </div>
          </div>
        `;
      } else {
        nextTripBox.innerHTML = `
          <div class="bg-stone-50 dark:bg-stone-800/50 rounded-3xl p-8 text-center border border-dashed border-stone-300 dark:border-stone-700">
            <div class="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 flex items-center justify-center mx-auto mb-3">
              <i data-lucide="calendar" class="w-6 h-6"></i>
            </div>
            <h4 class="font-serif text-lg font-bold mb-1">No Upcoming Court Sessions</h4>
            <p class="text-xs text-stone-500 dark:text-stone-400 mb-4">Book Grand Slam grass, imported clay, or indoor dome slots for practice.</p>
            <button class="btn-primary text-xs" onclick="document.querySelector('[data-tab=\\'book-slots\\']')?.click()">
              <i data-lucide="calendar-plus" class="w-4 h-4"></i> Book Court Slot
            </button>
          </div>
        `;
      }
    }

    // Recent Activity Table
    const recentTable = document.getElementById('overview-recent-bookings');
    if (recentTable) {
      recentTable.innerHTML = bookings.slice(0, 4).map(b => `
        <tr class="border-b border-stone-100 dark:border-stone-800 hover:bg-stone-50/50 dark:hover:bg-stone-800/30 transition-colors">
          <td class="py-4 px-4 font-mono text-xs font-bold text-stone-700 dark:text-stone-300 whitespace-nowrap text-start">#${b.id}</td>
          <td class="py-4 px-4 min-w-[200px] text-start">
            <div class="flex items-center gap-3">
              <img src="${b.stayImage}" alt="" class="w-10 h-10 rounded-xl object-cover shrink-0">
              <div class="min-w-0">
                <span class="font-bold text-xs text-stone-900 dark:text-stone-100 block leading-snug">${b.stayName}</span>
                <span class="text-[11px] text-stone-500 block leading-tight mt-0.5">${b.location}</span>
              </div>
            </div>
          </td>
          <td class="py-4 px-4 text-xs text-stone-600 dark:text-stone-400 whitespace-nowrap text-start">${b.checkIn}</td>
          <td class="py-4 px-4 text-xs font-bold text-stone-900 dark:text-stone-100 whitespace-nowrap text-start">$${b.totalPrice.toFixed(2)}</td>
          <td class="py-4 px-4 whitespace-nowrap text-start">
            ${renderStatusBadge(b.status)}
          </td>
          <td class="py-4 px-4 text-end whitespace-nowrap">
            <button class="text-xs text-emerald-800 dark:text-emerald-400 hover:underline font-semibold" onclick="window.showInvoiceModal('${b.id}')">
              View
            </button>
          </td>
        </tr>
      `).join('');
    }
  }

  // Status badge helper
  function renderStatusBadge(status) {
    if (status === 'Confirmed') {
      return `<span class="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">Confirmed</span>`;
    } else if (status === 'Completed') {
      return `<span class="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300">Completed</span>`;
    } else if (status === 'Cancelled') {
      return `<span class="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300">Cancelled</span>`;
    } else {
      return `<span class="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300">Pending</span>`;
    }
  }

  // ==========================================
  // VIEW: Book Coaching & Court Slots
  // ==========================================
  function renderBookSlots(filterCategory = 'all') {
    const grid = document.getElementById('dash-explore-grid');
    if (!grid) return;

    let courts = [...SYLVAN_DATA.stays];
    if (filterCategory !== 'all') {
      if (filterCategory === 'Coaching') {
        courts = courts.filter(c => c.category === 'Coaching Suites' || c.specs?.includes('Telemetry') || c.name.includes('Master'));
      } else {
        courts = courts.filter(c => c.surface?.toLowerCase().includes(filterCategory.toLowerCase()) || c.category?.toLowerCase().includes(filterCategory.toLowerCase()));
      }
    }

    grid.innerHTML = courts.map(court => `
      <div class="bg-white dark:bg-[#15221D] rounded-3xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all duration-300">
        <div class="relative aspect-[16/10] overflow-hidden">
          <img src="${court.images[0]}" alt="${court.name}" class="w-full h-full object-cover">
          <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/90 dark:bg-stone-900/90 text-stone-800 dark:text-stone-200 backdrop-blur-md">
            ${court.surface || court.category}
          </span>
          <span class="absolute bottom-3 right-3 px-2 py-0.5 rounded-full text-[11px] font-bold bg-stone-900/80 text-white backdrop-blur-md flex items-center gap-1">
            <i data-lucide="star" class="w-3 h-3 text-amber-400 fill-amber-400"></i> ${court.rating}
          </span>
        </div>
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <span class="text-[11px] text-stone-500 flex items-center gap-1 mb-1">
              <i data-lucide="map-pin" class="w-3 h-3 text-amber-600"></i> ${court.location}
            </span>
            <h4 class="font-serif font-bold text-base text-stone-900 dark:text-stone-100 mb-2">${court.name}</h4>
            <p class="text-xs text-stone-500 line-clamp-2 mb-3">${court.description}</p>
          </div>
          <div class="flex items-center justify-between pt-3 border-t border-stone-100 dark:border-stone-800">
            <div>
              <span class="font-serif text-lg font-bold text-emerald-950 dark:text-emerald-300">$${court.price}</span>
              <span class="text-[11px] text-stone-500"> / hour</span>
            </div>
            <a href="booking.html?id=${court.id}" class="px-4 py-2 rounded-full text-xs font-semibold bg-emerald-800 hover:bg-emerald-900 text-white transition-all shadow-xs flex items-center gap-1.5">
              <i data-lucide="calendar" class="w-3.5 h-3.5 text-amberAccent"></i>
              <span>Book Slot</span>
            </a>
          </div>
        </div>
      </div>
    `).join('');

    if (window.lucide) lucide.createIcons();
  }

  // Hook up slot filter pills
  document.querySelectorAll('.slot-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.slot-filter-btn').forEach(b => {
        b.classList.remove('bg-emerald-800', 'text-white');
        b.classList.add('bg-white', 'dark:bg-stone-800', 'text-stone-700', 'dark:text-stone-300');
      });
      btn.classList.add('bg-emerald-800', 'text-white');
      btn.classList.remove('bg-white', 'dark:bg-stone-800', 'text-stone-700', 'dark:text-stone-300');
      const filter = btn.getAttribute('data-slot-filter');
      renderBookSlots(filter);
    });
  });

  // ==========================================
  // VIEW: My Bookings
  // ==========================================
  function renderBookingsTable(filterStatus = 'all') {
    const listContainer = document.getElementById('dash-bookings-table-body');
    if (!listContainer) return;

    let bookings = SylvanStore.getBookings();
    if (filterStatus !== 'all') {
      bookings = bookings.filter(b => b.status.toLowerCase() === filterStatus.toLowerCase());
    }

    if (bookings.length === 0) {
      listContainer.innerHTML = `
        <tr>
          <td colspan="6" class="py-12 text-center text-stone-500 text-xs">
            No court reservations found under this filter.
          </td>
        </tr>
      `;
      return;
    }

    listContainer.innerHTML = bookings.map(b => `
      <tr class="border-b border-stone-100 dark:border-stone-800 hover:bg-stone-50/50 dark:hover:bg-stone-800/30 transition-colors">
        <td class="py-4 px-4 font-mono text-xs font-bold text-stone-700 dark:text-stone-300 whitespace-nowrap text-start">#${b.id}</td>
        <td class="py-4 px-4 min-w-[220px] text-start">
          <div class="flex items-center gap-3">
            <img src="${b.stayImage}" alt="" class="w-10 h-10 rounded-xl object-cover shrink-0">
            <div class="min-w-0">
              <span class="font-bold text-xs text-stone-900 dark:text-stone-100 block leading-snug">${b.stayName}</span>
              <span class="text-[11px] text-stone-500 block leading-tight mt-0.5">${b.location}</span>
            </div>
          </div>
        </td>
        <td class="py-4 px-4 text-xs text-stone-600 dark:text-stone-400 whitespace-nowrap text-start">
          <span class="block font-semibold">${b.checkIn}</span>
          <span class="text-[11px] text-stone-400">2-Hour Session</span>
        </td>
        <td class="py-4 px-4 text-xs font-bold text-stone-900 dark:text-stone-100 whitespace-nowrap text-start">$${b.totalPrice.toFixed(2)}</td>
        <td class="py-4 px-4 whitespace-nowrap text-start">
          ${renderStatusBadge(b.status)}
        </td>
        <td class="py-4 px-4 text-end whitespace-nowrap space-x-2">
          <button class="text-xs text-emerald-800 dark:text-emerald-400 hover:underline font-semibold" onclick="window.showTripPassModal('${b.id}')">
            Pass
          </button>
          <span class="text-stone-300">&bull;</span>
          <button class="text-xs text-stone-600 dark:text-stone-400 hover:underline" onclick="window.showInvoiceModal('${b.id}')">
            Receipt
          </button>
          ${b.status === 'Confirmed' ? `
            <span class="text-stone-300">&bull;</span>
            <button class="text-xs text-rose-600 hover:underline" onclick="window.cancelBookingAction('${b.id}')">
              Cancel
            </button>
          ` : ''}
        </td>
      </tr>
    `).join('');
  }

  // Hook up booking filter pills
  document.querySelectorAll('.booking-filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.booking-filter-pill').forEach(b => {
        b.classList.remove('bg-emerald-800', 'text-white');
        b.classList.add('bg-stone-100', 'dark:bg-stone-800', 'text-stone-600', 'dark:text-stone-300');
      });
      btn.classList.add('bg-emerald-800', 'text-white');
      btn.classList.remove('bg-stone-100', 'dark:bg-stone-800', 'text-stone-600', 'dark:text-stone-300');
      const status = btn.getAttribute('data-status-filter');
      renderBookingsTable(status);
    });
  });

  // ==========================================
  // VIEW: Upcoming Sessions
  // ==========================================
  function renderUpcomingSessions() {
    const container = document.getElementById('dash-upcoming-trips-container');
    if (!container) return;

    const upcoming = SylvanStore.getBookings().filter(b => b.status === 'Confirmed' && b.isUpcoming);

    if (upcoming.length === 0) {
      container.innerHTML = `
        <div class="bg-white dark:bg-[#15221D] rounded-3xl p-12 text-center border border-stone-200 dark:border-stone-800">
          <i data-lucide="calendar" class="w-12 h-12 text-stone-400 mx-auto mb-3"></i>
          <h3 class="font-serif font-bold text-lg mb-1">No Upcoming Court Sessions</h3>
          <p class="text-xs text-stone-500 mb-4">Book court time or schedule private biomechanics coaching to keep your game sharp.</p>
          <button class="btn-primary text-xs" onclick="document.querySelector('[data-tab=\\'book-slots\\']')?.click()">Book Slot Now</button>
        </div>
      `;
      return;
    }

    container.innerHTML = upcoming.map(b => `
      <div class="p-6 rounded-3xl bg-white dark:bg-[#15221D] border border-stone-200 dark:border-stone-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-5 w-full md:w-auto">
          <img src="${b.stayImage}" alt="" class="w-24 h-24 rounded-2xl object-cover shrink-0 shadow-md">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="font-mono text-xs font-bold text-emerald-800 dark:text-emerald-400">#${b.id}</span>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">Confirmed Slot</span>
            </div>
            <h3 class="font-serif font-bold text-xl text-stone-900 dark:text-stone-100">${b.stayName}</h3>
            <p class="text-xs text-stone-500 flex items-center gap-1 mt-0.5">
              <i data-lucide="map-pin" class="w-3.5 h-3.5 text-amber-500"></i> ${b.location}
            </p>
            <p class="text-xs text-stone-600 dark:text-stone-400 mt-2">
              <strong>Slot:</strong> ${b.checkIn} &bull; 09:00 AM - 11:00 AM (2 Hours)
            </p>
          </div>
        </div>

        <div class="flex items-center gap-3 w-full md:w-auto justify-end">
          <button class="btn-primary text-xs px-5 py-2.5" onclick="window.showTripPassModal('${b.id}')">
            <i data-lucide="ticket" class="w-3.5 h-3.5 text-amberAccent"></i> View Gate Pass
          </button>
          <button class="btn-secondary text-xs px-4 py-2.5" onclick="window.showInvoiceModal('${b.id}')">
            Receipt
          </button>
        </div>
      </div>
    `).join('');

    if (window.lucide) lucide.createIcons();
  }

  // ==========================================
  // VIEW: Past Sessions
  // ==========================================
  function renderPastSessions() {
    const container = document.getElementById('dash-past-trips-container');
    if (!container) return;

    const completed = SylvanStore.getBookings().filter(b => b.status === 'Completed');

    container.innerHTML = completed.map(b => `
      <div class="p-6 rounded-3xl bg-white dark:bg-[#15221D] border border-stone-200 dark:border-stone-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-4">
          <img src="${b.stayImage}" alt="" class="w-16 h-16 rounded-xl object-cover shrink-0">
          <div>
            <h4 class="font-serif font-bold text-base text-stone-900 dark:text-stone-100">${b.stayName}</h4>
            <p class="text-xs text-stone-500">Completed on ${b.checkIn} &bull; Verified UTR Match Session (6-4, 7-5 Win)</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-xs font-bold text-emerald-700 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full">+0.08 UTR Rating</span>
          <button class="btn-secondary text-xs px-4 py-2" onclick="window.showInvoiceModal('${b.id}')">Receipt</button>
        </div>
      </div>
    `).join('');
  }

  // ==========================================
  // VIEW: Saved Courts
  // ==========================================
  function renderSavedCourts() {
    const grid = document.getElementById('dash-saved-properties-grid');
    if (!grid) return;

    const savedIds = SylvanStore.getSavedStayIds();
    const savedCourts = SYLVAN_DATA.stays.filter(s => savedIds.includes(s.id));

    if (savedCourts.length === 0) {
      grid.innerHTML = `
        <div class="col-span-3 bg-white dark:bg-[#15221D] rounded-3xl p-12 text-center border border-stone-200 dark:border-stone-800">
          <i data-lucide="heart" class="w-10 h-10 text-stone-300 mx-auto mb-2"></i>
          <h4 class="font-serif font-bold text-base mb-1">No Saved Courts Yet</h4>
          <p class="text-xs text-stone-500 mb-4">Click the bookmark icon on any court card to save your favorite surfaces.</p>
          <a href="courts.html" class="btn-primary text-xs">Explore Courts</a>
        </div>
      `;
      return;
    }

    grid.innerHTML = savedCourts.map(court => `
      <div class="bg-white dark:bg-[#15221D] rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-sm flex flex-col justify-between">
        <div class="relative aspect-[16/10] overflow-hidden">
          <img src="${court.images[0]}" alt="${court.name}" class="w-full h-full object-cover">
          <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/90 dark:bg-stone-900/90 text-stone-800 dark:text-stone-200">
            ${court.surface || court.category}
          </span>
        </div>
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <h4 class="font-serif font-bold text-base text-stone-900 dark:text-stone-100 mb-1">${court.name}</h4>
            <span class="text-xs font-serif font-bold text-emerald-800 dark:text-emerald-300">$${court.price} / hr</span>
          </div>
          <div class="pt-3 border-t border-stone-100 dark:border-stone-800 mt-3 flex justify-between items-center">
            <a href="booking.html?id=${court.id}" class="btn-primary text-xs px-3.5 py-1.5">Book Slot</a>
            <button class="text-xs text-rose-600 hover:underline" onclick="window.removeSavedCourt('${court.id}')">Remove</button>
          </div>
        </div>
      </div>
    `).join('');

    if (window.lucide) lucide.createIcons();
  }

  window.removeSavedCourt = function(id) {
    SylvanStore.toggleSaveStay(id);
    renderSavedCourts();
    SylvanToast.show('Court Removed', 'Removed court from your saved list.', 'info');
  };

  // ==========================================
  // VIEW: Payments & Fees (CORE USER REQUIREMENT)
  // ==========================================
  function renderPayments() {
    const ledgerBody = document.getElementById('dash-transactions-body');
    if (!ledgerBody) return;

    const transactions = [
      { id: 'INV-2026-10', date: '2026-10-15', desc: 'October High-Performance Squad Tuition', method: 'Visa •••• 4242', amount: 450.00, status: 'PAID' },
      { id: 'INV-2026-09', date: '2026-09-28', desc: 'Centre Court Grass Slot (2 Hours) + Balls', method: 'Visa •••• 4242', amount: 280.00, status: 'PAID' },
      { id: 'INV-2026-08', date: '2026-09-12', desc: 'Private 1-on-1 Biomechanics Telemetry (Marcus)', method: 'Apple Pay', amount: 160.00, status: 'PAID' },
      { id: 'INV-2026-07', date: '2026-08-20', desc: 'Vantage Summer Junior Grand Slam Tournament Entry', method: 'MasterCard •••• 8821', amount: 85.00, status: 'PAID' },
      { id: 'INV-2026-06', date: '2026-08-01', desc: 'Clay Court Chatrier Practice Slot (2 Hours)', method: 'Visa •••• 4242', amount: 170.00, status: 'PAID' }
    ];

    ledgerBody.innerHTML = transactions.map(t => `
      <tr class="border-b border-stone-100 dark:border-stone-800 hover:bg-stone-50/50 dark:hover:bg-stone-800/30 transition-colors">
        <td class="py-3 px-4 font-mono font-bold text-xs text-stone-700 dark:text-stone-300">#${t.id}</td>
        <td class="py-3 px-4 text-xs text-stone-500">${t.date}</td>
        <td class="py-3 px-4 text-xs font-semibold text-stone-900 dark:text-stone-100">${t.desc}</td>
        <td class="py-3 px-4 text-xs text-stone-500">${t.method}</td>
        <td class="py-3 px-4 text-xs font-bold text-stone-900 dark:text-stone-100">$${t.amount.toFixed(2)}</td>
        <td class="py-3 px-4">
          <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">${t.status}</span>
        </td>
        <td class="py-3 px-4 text-right">
          <button onclick="window.showFeeReceipt('${t.id}', '${t.desc}', ${t.amount})" class="text-xs text-emerald-800 dark:text-emerald-400 hover:underline font-semibold">
            Receipt
          </button>
        </td>
      </tr>
    `).join('');
  }

  // ==========================================
  // PROFILE SETTINGS
  // ==========================================
  function populateProfileFields() {
    currentUser = SylvanStore.getUser();
    const nameInput = document.getElementById('profile-name-input');
    const emailInput = document.getElementById('profile-email-input');
    const phoneInput = document.getElementById('profile-phone-input');

    if (nameInput) nameInput.value = currentUser.name;
    if (emailInput) emailInput.value = currentUser.email;
    if (phoneInput) phoneInput.value = currentUser.phone;
  }

  document.getElementById('dash-profile-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('profile-name-input').value;
    const email = document.getElementById('profile-email-input').value;
    const phone = document.getElementById('profile-phone-input').value;

    SylvanStore.saveUser({ name, email, phone });
    document.getElementById('dash-user-name').textContent = name;
    SylvanToast.show('Profile Updated', 'Player details and equipment specifications saved successfully.', 'success');
  });

  document.getElementById('dash-password-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    SylvanToast.show('Password Changed', 'Your security password has been updated.', 'success');
    e.target.reset();
  });

  document.getElementById('dash-support-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    SylvanToast.show('Message Dispatched', 'Coach desk received your inquiry. We will reply within 2 hours.', 'success');
    e.target.reset();
  });

  // ==========================================
  // MODALS: Invoice, Trip Pass, Pay Fee
  // ==========================================
  window.showInvoiceModal = function(bookingId) {
    const modal = document.getElementById('invoice-receipt-modal');
    if (!modal) return;

    const bookings = SylvanStore.getBookings();
    const booking = bookings.find(b => b.id === bookingId) || bookings[0];

    document.getElementById('inv-ref-number').textContent = `#VAN-${booking.id}`;
    document.getElementById('inv-date').textContent = booking.checkIn;
    document.getElementById('inv-guest-name').textContent = currentUser.name;
    document.getElementById('inv-guest-email').textContent = currentUser.email;
    document.getElementById('inv-stay-title').textContent = booking.stayName;
    document.getElementById('inv-stay-location').textContent = booking.location;
    document.getElementById('inv-total-paid').textContent = `$${booking.totalPrice.toFixed(2)}`;
    document.getElementById('inv-dates').textContent = `${booking.checkIn} (2-Hour Reserved Slot)`;
    document.getElementById('inv-guests').textContent = `Balls, Racket Demo & Telemetry Included`;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
  };

  window.closeInvoiceModal = function() {
    const modal = document.getElementById('invoice-receipt-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  };

  window.showFeeReceipt = function(invId, desc, amount) {
    const modal = document.getElementById('invoice-receipt-modal');
    if (!modal) return;

    document.getElementById('inv-ref-number').textContent = `#${invId}`;
    document.getElementById('inv-date').textContent = '2026-11-12';
    document.getElementById('inv-guest-name').textContent = currentUser.name;
    document.getElementById('inv-guest-email').textContent = currentUser.email;
    document.getElementById('inv-stay-title').textContent = desc;
    document.getElementById('inv-stay-location').textContent = 'Vantage Tennis Academy Campus';
    document.getElementById('inv-total-paid').textContent = `$${amount.toFixed(2)}`;
    document.getElementById('inv-dates').textContent = 'Paid in Full via Stored Payment Method';
    document.getElementById('inv-guests').textContent = 'High-Performance Junior Training Squad';

    modal.classList.remove('hidden');
    modal.classList.add('flex');
  };

  window.showTripPassModal = function(bookingId) {
    const modal = document.getElementById('trip-pass-modal');
    if (!modal) return;

    const bookings = SylvanStore.getBookings();
    const booking = bookings.find(b => b.id === bookingId) || bookings[0];

    document.getElementById('pass-booking-ref').textContent = `#VAN-${booking.id}`;
    document.getElementById('pass-stay-title').textContent = booking.stayName;
    document.getElementById('pass-stay-location').textContent = booking.location;
    document.getElementById('pass-stay-img').src = booking.stayImage;
    document.getElementById('pass-checkin-time').textContent = `${booking.checkIn} (09:00 AM)`;
    document.getElementById('pass-checkout-time').textContent = 'Grand Slam Court Gate 2';
    document.getElementById('pass-host-contact').textContent = 'Head Coach Marcus Sterling';

    modal.classList.remove('hidden');
    modal.classList.add('flex');
  };

  window.closeTripPassModal = function() {
    const modal = document.getElementById('trip-pass-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  };

  // Interactive Pay Fee Modal
  window.showPayFeeModal = function(title, amount) {
    const modal = document.getElementById('pay-fee-modal');
    if (!modal) return;

    document.getElementById('pay-fee-title').textContent = title;
    document.getElementById('pay-fee-amount').textContent = `$${amount.toFixed(2)}`;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  };

  window.closePayFeeModal = function() {
    const modal = document.getElementById('pay-fee-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  };

  document.getElementById('dash-pay-fee-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    window.closePayFeeModal();
    
    // Update dues in UI
    const pendingDuesEl = document.getElementById('stat-pending-dues');
    if (pendingDuesEl) {
      pendingDuesEl.textContent = '$0.00';
      pendingDuesEl.classList.remove('text-amber-600');
      pendingDuesEl.classList.add('text-emerald-700');
    }

    const totalSpentEl = document.getElementById('stat-total-spent');
    if (totalSpentEl) totalSpentEl.textContent = '$2,595.00';

    SylvanToast.show('Tuition Fee Paid', 'Payment of $450.00 processed successfully. Official receipt issued.', 'success');

    setTimeout(() => {
      window.showFeeReceipt('INV-2026-11', 'November Squad Training Tuition', 450.00);
    }, 600);
  });

  window.cancelBookingAction = function(bookingId) {
    if (confirm(`Are you sure you want to cancel court session #${bookingId}? Slot credit will be applied to your account.`)) {
      SylvanStore.cancelBooking(bookingId);
      renderOverview();
      renderBookingsTable('all');
      SylvanToast.show('Session Cancelled', `Court booking #${bookingId} has been cancelled.`, 'info');
    }
  };

  // Initial tab load check based on URL hash
  const initialHash = window.location.hash.replace('#', '') || 'overview';
  switchTab(initialHash);
});
