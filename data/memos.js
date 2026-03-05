/**
 * KBHCCD Master Plan – Weekly Memo Data
 *
 * HOW TO ADD A NEW WEEKLY MEMO:
 * 1. Copy the last object in the MEMOS array
 * 2. Update the date, title, summary, and component details
 * 3. Add any new photos to assets/photos/ and reference them below
 * 4. The dashboard automatically shows the latest memo
 *
 * STATUS VALUES: "on-track", "advancing", "underway", "paused"
 */

const MEMOS = [
  {
    id: "2026-02-27",
    date: "February 27, 2026",
    title: "KBHCCD Master Plan Overall Update",
    summary:
      "Major milestones achieved this week: Hall D demolition and Omni bridge separation completed, GMP 2 approved by City Council, FIFA punch list finished at 100%, and WFAA parking lot acquisition secured. The Convention Center expansion continues to gain momentum with truck ramp construction underway and training facility permits advancing.",

    overallStatus: "on-track",
    overallProgress: 18,

    components: [
      {
        id: "comp1",
        number: 1,
        name: "Convention Center Expansion, Demolition & Greenspace over I-30",
        shortName: "Convention Center",
        status: "on-track",
        progress: 22,
        trend: "up",
        headline: "Hall D separation complete. GMP 2 approved. FIFA punch list 100% done.",
        highlights: [
          "State Infrastructure Bank loan application with all required documentation completed",
          "Hall D / Omni bridge demolition and separation successfully completed",
          "GMP 2 approved by City Council",
          "WFAA parking lot acquisition approved by City Council",
          "Arena / Hall A separation wall construction commenced",
          "FIFA punch list achieved 100% completion with lightning protection fully certified",
          "First truck ramp concrete pour completed",
          "FAA antennae low-voltage cable commissioning completed",
          "Chairman Ridley and Mayor Pro Tem Moreno update meetings conducted",
        ],
        nextSteps: [
          "UPRR blue area usage approval and green area city ownership validation",
          "UPRR Construction and Maintenance agreement",
          "Oncor Direct Service Agreement (DSA) signoff",
          "ID/CES team to review/issue Schematic Design-related Design Directives",
          "100% SD / Early Design Development package review and approval",
          "New truck ramp target completion by end of April",
          "Long-term materials testing contracts pending specification development",
          "Central Utility Plant RFI package under review by financial advisors",
          "New FAA antennae installation pending change order issuance",
        ],
        additionalProgress: [
          "30% engineering drawings draft package complete and pending DART review",
          "Design documents revised and resubmitted to FAA for review",
          "Asbestos abatement inside the TXCN Building completed",
          "TXCN building interior soft demolition commenced",
          "Lot E soils testing report received",
          "Reviewed alternate viaduct options with Councilman West",
          "Enabling Architect's Supplemental Instructions (ASI) #2 permit issued",
          "Interior Design client meeting conducted",
        ],
        photos: [
          { src: "assets/photos/hall-d-separation.jpeg", caption: "Separation of Hall D – Omni Bridge" },
          { src: "assets/photos/penthouse-demolition.jpeg", caption: "Penthouse Demolition – Roof / Hall D" },
          { src: "assets/photos/reunion-garage-cleanup.jpeg", caption: "Clean-up – Reunion Garage" },
          { src: "assets/photos/rebar-truck-ramp.jpeg", caption: "Re-bar Installation – Truck Ramp" },
          { src: "assets/photos/concrete-pour-1.jpg", caption: "Concrete Pour – Truck Ramp" },
          { src: "assets/photos/concrete-pour-2.jpeg", caption: "Aerial View – Convention Center Site" },
        ],
      },
      {
        id: "comp2",
        number: 2,
        name: "Transportation Related Alternatives",
        shortName: "Transportation",
        status: "paused",
        progress: 0,
        trend: "flat",
        headline: "Awaiting procurement award.",
        highlights: [],
        nextSteps: [],
        additionalProgress: [],
        photos: [],
        note: "Paused — awaiting procurement award",
      },
      {
        id: "comp3",
        number: 3,
        name: "Dallas Memorial Auditorium (Arena) & Secondary Facility",
        shortName: "Arena & Training Facility",
        status: "on-track",
        progress: 12,
        trend: "up",
        headline: "GMP-1 submitted. Demolition procurement published. Design advancing to Construction Documents.",
        highlights: [
          "Arena Phase 1 GMP-1 rev 6 submitted to the City",
          "Demolition procurement advertisement published",
          "Component 1 coordination: phasing and interface discussions initiated to align shared areas",
          "Training Facility SWPPP coordination meeting held with City and Freese & Nichols",
          "Training Facility GMP-1 package received and under review for City Council",
        ],
        nextSteps: [
          "GMP #1 City Council review and determination",
          "CMAR scope leveling of early award packages (PEMB, Plumbing, HVAC, Electrical)",
          "Advancing additional early procurement packages",
          "Design team preparing to advance into Construction Documents",
          "Demolition contract posting period, bidding, and contract award",
          "Investigating feasibility of connecting to existing 12-inch sanitary line for enhanced service",
        ],
        additionalProgress: [],
        photos: [],
      },
      {
        id: "comp4",
        number: 4,
        name: "TBAAL & The Women's Museum (TWM) Relocation",
        shortName: "TBAAL & TWM",
        status: "on-track",
        progress: 65,
        trend: "up",
        headline: "TWM approaching occupancy — Temporary Certificate of Occupancy on track for April 11.",
        highlights: [
          "TWM Temporary Certificate of Occupancy (TCO) on track for April 11",
          "Phoenix 1 provided scope, cost, and schedule for HVAC solutions",
          "Dikita coordinating with Phoenix 1 to address all identified HVAC items",
          "Exterior areas ADA-compliance report received",
        ],
        nextSteps: [
          "TWM final punch list items being addressed",
          "Fire final inspection upon resolution of outstanding items (actuators, doors, boxes)",
          "Expedited inspections requested for Muse and Auditorium",
          "TBAAL schematic design package approval to resume design efforts",
        ],
        additionalProgress: [],
        photos: [],
      },
      {
        id: "comp5",
        number: 5,
        name: "Pioneer Park / Plaza / Cemetery",
        shortName: "Pioneer Park",
        status: "on-track",
        progress: 8,
        trend: "flat",
        headline: "Positive THC engagement. Cemetery plat and design RFQ advancing.",
        highlights: [
          "Archeologists had positive Texas Historical Commission discussion regarding amended application",
          "Meeting with Planning and Development regarding THC comments and cemetery boundaries",
        ],
        nextSteps: [
          "Submission of Texas Historical Commission amended application",
          "Two soil borings near abandoned RR tunnel pending THC approval",
          "Issuance of Architectural Engineering and Design RFQ",
          "Submission of Cemetery Plat application",
          "Resolution of THC Pioneer Cemetery boundary determination",
        ],
        additionalProgress: [],
        photos: [],
      },
      {
        id: "comp6",
        number: 6,
        name: "Eddie Bernice Johnson Union Station",
        shortName: "Union Station",
        status: "paused",
        progress: 0,
        trend: "flat",
        headline: "Awaiting procurement award.",
        highlights: [],
        nextSteps: [],
        additionalProgress: [],
        photos: [],
        note: "Paused — awaiting procurement award",
      },
      {
        id: "comp7",
        number: 7,
        name: "Development of 30 Acres",
        shortName: "30-Acre Development",
        status: "paused",
        progress: 0,
        trend: "flat",
        headline: "Awaiting procurement award.",
        highlights: [],
        nextSteps: [],
        additionalProgress: [],
        photos: [],
        note: "Paused — awaiting procurement award",
      },
    ],

    keyMilestones: [
      { label: "Hall D / Omni Bridge Separation", status: "complete", date: "Feb 2026" },
      { label: "GMP 2 City Council Approval", status: "complete", date: "Feb 2026" },
      { label: "FIFA Punch List 100%", status: "complete", date: "Feb 2026" },
      { label: "Truck Ramp Completion", status: "in-progress", date: "Apr 2026" },
      { label: "TWM Certificate of Occupancy", status: "in-progress", date: "Apr 11, 2026" },
      { label: "Arena GMP #1 Council Review", status: "upcoming", date: "TBD" },
      { label: "Arena Demolition Contract Award", status: "upcoming", date: "TBD" },
      { label: "Pioneer Park THC Application", status: "in-progress", date: "TBD" },
    ],
  },
];

function getLatestMemo() {
  return MEMOS[MEMOS.length - 1];
}
function getMemoById(id) {
  return MEMOS.find(function (m) { return m.id === id; });
}
