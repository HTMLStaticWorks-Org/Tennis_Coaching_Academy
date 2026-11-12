/**
 * Vantage Tennis Academy - Court & Coaching Slot Booking Flow
 */

document.addEventListener('DOMContentLoaded', () => {
  const wizardContainer = document.getElementById('booking-wizard');
  if (!wizardContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const stayId = urlParams.get('id') || 'syl-01';
  const stay = SYLVAN_DATA.stays.find(s => s.id === stayId) || SYLVAN_DATA.stays[0];

  // Wizard state
  let currentStep = 1;
  const totalSteps = 5;

  let bookingState = {
    stayId: stay.id,
    stayName: stay.name,
    stayImage: stay.images[0],
    location: stay.location,
    checkIn: urlParams.get('in') || '2026-11-20',
    timeSlot: '08:00 AM - 10:00 AM',
    hours: parseInt(urlParams.get('adults') || '2', 10),
    guestInfo: {
      firstName: 'Alex',
      lastName: 'Morgan',
      email: 'alex.morgan@example.com',
      phone: '+1 (760) 555-0194',
      specialRequests: ''
    },
    addOns: {
      balls: false,
      ballMachine: false,
      masterCoach: false
    },
    discountPercent: 0,
    discountCode: '',
    paymentMethod: 'card',
    paymentDetails: {},
    confirmedBookingId: ''
  };

  // Populate Court Info Card in Sidebar & Step 1
  function populateStayOverview() {
    document.querySelectorAll('.checkout-stay-title').forEach(el => el.textContent = stay.name);
    document.querySelectorAll('.checkout-stay-location').forEach(el => el.textContent = stay.location);
    document.querySelectorAll('.checkout-stay-img').forEach(el => {
      el.src = stay.images[0];
      el.alt = stay.name;
    });
    document.querySelectorAll('.checkout-stay-price').forEach(el => el.textContent = `$${stay.price}`);
    document.querySelectorAll('.checkout-stay-rating').forEach(el => el.textContent = `${stay.rating.toFixed(2)} (${stay.reviewsCount} reviews)`);
  }

  function calculateTotals() {
    const hours = bookingState.hours || 2;
    const baseCost = stay.price * hours;
    const maintenanceFee = 20;
    const serviceFee = Math.round(baseCost * 0.10);
    const taxes = Math.round(baseCost * 0.05);

    let addOnsTotal = 0;
    if (bookingState.addOns.balls) addOnsTotal += 25;
    if (bookingState.addOns.ballMachine) addOnsTotal += 45;
    if (bookingState.addOns.masterCoach) addOnsTotal += 95;

    let subTotalWithExtras = baseCost + maintenanceFee + serviceFee + taxes + addOnsTotal;
    let discountAmount = 0;
    if (bookingState.discountPercent > 0) {
      discountAmount = Math.round(subTotalWithExtras * (bookingState.discountPercent / 100));
    }
    const finalTotal = subTotalWithExtras - discountAmount;

    // Update UI elements
    const nightsEl = document.getElementById('summary-nights');
    if (nightsEl) nightsEl.textContent = `${hours} Hours`;

    const baseEl = document.getElementById('summary-base-rate');
    if (baseEl) baseEl.textContent = `$${baseCost}`;

    const cleanEl = document.getElementById('summary-cleaning');
    if (cleanEl) cleanEl.textContent = `$${maintenanceFee}`;

    const serviceEl = document.getElementById('summary-service');
    if (serviceEl) serviceEl.textContent = `$${serviceFee}`;

    const taxesEl = document.getElementById('summary-taxes');
    if (taxesEl) taxesEl.textContent = `$${taxes}`;

    // Add-ons row
    const extrasRow = document.getElementById('summary-extras-row');
    const extrasAmount = document.getElementById('summary-extras-amount');
    if (extrasRow && extrasAmount) {
      if (addOnsTotal > 0) {
        extrasRow.classList.remove('hidden');
        extrasAmount.textContent = `+$${addOnsTotal}`;
      } else {
        extrasRow.classList.add('hidden');
      }
    }

    // Discount row
    const discountRow = document.getElementById('summary-discount-row');
    const discountAmountEl = document.getElementById('summary-discount-amount');
    if (discountRow && discountAmountEl) {
      if (discountAmount > 0) {
        discountRow.classList.remove('hidden');
        discountAmountEl.textContent = `-$${discountAmount} (${bookingState.discountPercent}%)`;
      } else {
        discountRow.classList.add('hidden');
      }
    }

    const grandTotalEl = document.getElementById('summary-final-total');
    if (grandTotalEl) grandTotalEl.textContent = `$${finalTotal.toFixed(2)}`;

    return { baseCost, maintenanceFee, serviceFee, taxes, addOnsTotal, discountAmount, finalTotal };
  }

  // Step Navigation
  function goToStep(step) {
    if (step < 1 || step > totalSteps) return;
    currentStep = step;

    // Toggle step panels
    for (let i = 1; i <= totalSteps; i++) {
      const panel = document.getElementById(`step-${i}-panel`);
      if (panel) {
        if (i === currentStep) {
          panel.classList.remove('hidden');
          panel.classList.add('animate-fade-up');
        } else {
          panel.classList.add('hidden');
        }
      }
    }

    // Update progress step dots
    document.querySelectorAll('.wizard-step-indicator').forEach(ind => {
      const s = parseInt(ind.getAttribute('data-step'), 10);
      const circle = ind.querySelector('.step-circle');
      const label = ind.querySelector('.step-label');

      if (s < currentStep) {
        ind.classList.remove('opacity-40');
        circle.classList.remove('bg-amber-500', 'text-stone-950', 'ring-4', 'ring-amber-500/20', 'bg-stone-200', 'dark:bg-stone-700', 'text-stone-600', 'dark:text-stone-300');
        circle.classList.add('bg-emerald-800', 'text-white');
        circle.innerHTML = '&#10003;';
        if (label) label.className = 'step-label text-[11px] font-bold text-emerald-800 dark:text-emerald-400';
      } else if (s === currentStep) {
        ind.classList.remove('opacity-40');
        circle.classList.remove('bg-emerald-800', 'text-white', 'bg-stone-200', 'dark:bg-stone-700', 'text-stone-600', 'dark:text-stone-300');
        circle.classList.add('bg-amber-500', 'text-stone-950', 'ring-4', 'ring-amber-500/20');
        circle.textContent = s;
        if (label) label.className = 'step-label text-[11px] font-bold text-stone-900 dark:text-stone-100';
      } else {
        ind.classList.add('opacity-40');
        circle.classList.remove('bg-emerald-800', 'text-white', 'bg-amber-500', 'text-stone-950', 'ring-4', 'ring-amber-500/20');
        circle.classList.add('bg-stone-200', 'dark:bg-stone-700', 'text-stone-600', 'dark:text-stone-300');
        circle.textContent = s;
        if (label) label.className = 'step-label text-[11px] font-bold text-stone-500';
      }
    });

    window.scrollTo({ top: wizardContainer.offsetTop - 80, behavior: 'smooth' });
    if (window.lucide) lucide.createIcons();
  }

  // Event Listeners for Next & Prev Buttons
  document.querySelectorAll('[data-next-step]').forEach(btn => {
    btn.addEventListener('click', () => {
      // Validation per step
      if (currentStep === 1) {
        const inDate = document.getElementById('step1-checkin').value;
        const hours = parseInt(document.getElementById('step1-adults').value, 10);
        if (inDate) bookingState.checkIn = inDate;
        bookingState.hours = hours;
        calculateTotals();
      }

      if (currentStep === 2) {
        const fname = document.getElementById('guest-fname').value.trim();
        const lname = document.getElementById('guest-lname').value.trim();
        const email = document.getElementById('guest-email').value.trim();
        const phone = document.getElementById('guest-phone').value.trim();

        if (!fname || !lname || !email) {
          SylvanToast.show('Incomplete Fields', 'Please provide player name and valid email.', 'warning');
          return;
        }

        bookingState.guestInfo.firstName = fname;
        bookingState.guestInfo.lastName = lname;
        bookingState.guestInfo.email = email;
        bookingState.guestInfo.phone = phone;
        bookingState.guestInfo.specialRequests = document.getElementById('guest-requests')?.value || '';
      }

      if (currentStep === 4) {
        // Complete checkout and save to store
        completeBooking();
        return;
      }

      goToStep(currentStep + 1);
    });
  });

  document.querySelectorAll('[data-prev-step]').forEach(btn => {
    btn.addEventListener('click', () => {
      goToStep(currentStep - 1);
    });
  });

  // Step 3 Add-ons toggles
  document.querySelectorAll('.addon-checkbox').forEach(cb => {
    cb.addEventListener('change', () => {
      const addonKey = cb.getAttribute('data-addon');
      if (addonKey === 'breakfastHamper') bookingState.addOns.balls = cb.checked;
      if (addonKey === 'orchardTasting') bookingState.addOns.ballMachine = cb.checked;
      if (addonKey === 'firewoodBundle') bookingState.addOns.masterCoach = cb.checked;
      calculateTotals();
    });
  });

  // Step 3 Voucher Code
  document.getElementById('coupon-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('coupon-input');
    const code = input ? input.value.trim().toUpperCase() : '';

    if (code === 'ACE10' || code === 'NATURE10' || code === 'VANTAGE10') {
      bookingState.discountPercent = 10;
      bookingState.discountCode = code;
      calculateTotals();
      SylvanToast.show('Voucher Applied', '10% discount applied to your court slot!', 'success');
    } else {
      SylvanToast.show('Invalid Code', 'Try voucher code ACE10 for 10% off.', 'warning');
    }
  });

  // Step 4 Payment method switcher
  document.querySelectorAll('.payment-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const method = btn.getAttribute('data-method');
      bookingState.paymentMethod = method;

      document.querySelectorAll('.payment-tab-btn').forEach(b => {
        b.classList.remove('border-2', 'border-emerald-800', 'bg-emerald-50/50', 'dark:bg-emerald-950/30', 'text-emerald-900', 'dark:text-emerald-300');
        b.classList.add('border', 'border-stone-200', 'dark:border-stone-700', 'text-stone-600', 'dark:text-stone-300');
      });
      btn.classList.add('border-2', 'border-emerald-800', 'bg-emerald-50/50', 'dark:bg-emerald-950/30', 'text-emerald-900', 'dark:text-emerald-300');
      btn.classList.remove('border', 'border-stone-200', 'dark:border-stone-700', 'text-stone-600', 'dark:text-stone-300');

      document.querySelectorAll('.payment-panel').forEach(p => p.classList.add('hidden'));
      const activePanel = document.getElementById(`payment-${method}-panel`);
      if (activePanel) activePanel.classList.remove('hidden');
    });
  });

  // Complete Booking Action
  function completeBooking() {
    const totals = calculateTotals();
    const newId = `VAN-${Math.floor(10000 + Math.random() * 90000)}`;
    bookingState.confirmedBookingId = newId;

    const newBookingRecord = {
      id: newId,
      stayId: stay.id,
      stayName: stay.name,
      stayImage: stay.images[0],
      location: stay.location,
      checkIn: bookingState.checkIn,
      checkOut: bookingState.checkIn,
      nights: bookingState.hours,
      guests: 2,
      totalPrice: totals.finalTotal,
      status: 'Confirmed',
      isUpcoming: true,
      createdAt: new Date().toISOString()
    };

    // Save into SylvanStore
    SylvanStore.addBooking(newBookingRecord);

    // Populate confirmation screen
    const refEl = document.getElementById('conf-booking-ref');
    if (refEl) refEl.textContent = `#${newId}`;

    const confNameEl = document.getElementById('conf-stay-name');
    if (confNameEl) confNameEl.textContent = stay.name;

    const confTotalEl = document.getElementById('conf-total-paid');
    if (confTotalEl) confTotalEl.textContent = `$${totals.finalTotal.toFixed(2)}`;

    const confDatesEl = document.getElementById('conf-dates');
    if (confDatesEl) confDatesEl.textContent = `${bookingState.checkIn} (${bookingState.timeSlot})`;

    const confGuestsEl = document.getElementById('conf-guests');
    if (confGuestsEl) confGuestsEl.textContent = `${bookingState.hours} Hours`;

    const confGuestNameEl = document.getElementById('conf-guest-name');
    if (confGuestNameEl) confGuestNameEl.textContent = `${bookingState.guestInfo.firstName} ${bookingState.guestInfo.lastName}`;

    const confGuestEmailEl = document.getElementById('conf-guest-email');
    if (confGuestEmailEl) confGuestEmailEl.textContent = bookingState.guestInfo.email;

    goToStep(5);
    SylvanToast.show('Court Slot Confirmed', `Booking #${newId} is confirmed. Added to your student dashboard!`, 'success');
  }

  // Print receipt trigger
  document.getElementById('btn-print-receipt')?.addEventListener('click', () => {
    window.print();
  });

  // Initialize
  populateStayOverview();
  calculateTotals();

  // Populate default dates
  const checkinInput = document.getElementById('step1-checkin');
  if (checkinInput) checkinInput.value = bookingState.checkIn;
});
