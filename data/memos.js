/**
 * KBHCCD Master Plan - Weekly Memo Data
 *
 * HOW TO ADD A NEW WEEKLY MEMO:
 * 1. Copy the template object at the bottom of the MEMOS array
 * 2. Fill in the date, title, and update each component
 * 3. The dashboard will automatically pick up the latest memo
 *
 * STATUS VALUES: "on-track", "at-risk", "paused", "complete"
 * TREND VALUES:  "up", "flat", "down"
 */

const MEMOS = [
  {
    id: "2026-02-27",
    date: "February 27, 2026",
    title: "KBHCCD Master Plan Overall Update",
    summary:
      "Significant progress on Component 1 with Hall D demolition complete, GMP 2 approved, and FIFA punch list finished. TWM nearing occupancy with TCO expected April 11. Arena GMP-1 submitted and demolition procurement advertised.",

    // Overall project health
    overallStatus: "on-track",
    overallProgress: 18, // percent complete across entire master plan

    components: [
      {
        id: "comp1",
        number: 1,
        name: "Convention Center Expansion / Demolition / Greenspace over I-30",
        shortName: "Convention Center",
        status: "on-track",
        progress: 22,
        trend: "up",
        successes: [
          "State Infrastructure Bank loan application with required documentation completed",
          "Demolition and separation of Hall D from the Omni bridge completed",
          "GMP 2 approved by City Council",
          "WFAA parking lot acquisition approved by City Council",
          "Arena / Hall A separation wall construction commenced",
          "FIFA punch list 100% complete and lightning protection fully certified",
          "First truck ramp concrete pour completed",
          "FAA antennae low-voltage cable commissioning completed",
          "Chairman Ridley and Mayor Pro Tem Moreno update meetings conducted",
        ],
        criticalPath: [
          "UPRR blue area usage approval and green area city ownership validation",
          "UPRR Construction and Maintenance agreement needed",
          "Oncor Direct Service Agreement (DSA) signoff needed",
          "ID/CES team to review/issue Schematic Design (SD)-related Design Directives",
          "100% SD / Early Design Development (DD) package to be reviewed, updated as needed, and approved",
          "New truck ramp target completion end of April",
          "Long-term materials testing contracts needed pending specification development",
          "Central Utility Plant RFI package drafted and under review by financial advisors",
          "New FAA antennae installation pending issuance of change order",
        ],
        otherActivity: [
          "30% engineering drawings draft package complete and pending DART review",
          "Design documents revised and resubmitted to FAA for review",
          "Asbestos abatement inside the TXCN Building completed",
          "TXCN building interior soft demolition commenced",
          "Lot E soils testing report received",
          "Reviewed alternate viaduct options with Councilman West",
          "Enabling Architect's Supplemental Instructions (ASI) #2 permit issued",
          "Interior Design client meeting conducted",
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
        successes: [],
        criticalPath: [],
        otherActivity: [],
        note: "Paused and unawarded",
      },
      {
        id: "comp3",
        number: 3,
        name: "Dallas Memorial Auditorium (Arena) & Secondary Facility",
        shortName: "Arena & Training Facility",
        status: "on-track",
        progress: 12,
        trend: "up",
        successes: [],
        criticalPath: [
          "GMP #1 City Council review and determination",
          "CMAR scope leveling of early award packages (PEMB, Plumbing, HVAC, Electrical) and advancing additional early procurement packages",
          "Design team preparing to advance into Construction Documents (CDs)",
          "Demolition contract posting period, bidding, and contract award",
        ],
        otherActivity: [
          "Arena Phase 1 - GMP-1 rev 6 submitted to the City",
          "Demolition procurement advertisement published",
          "Component 1 coordination: phasing and interface discussions initiated",
          "Seeking proposals to investigate feasibility of connecting to existing 12-inch sanitary line",
          "Training Facility: SWPPP coordination meeting with City and Freese & Nichols",
          "Training Facility: GMP-1 package received and under review for City Council",
        ],
      },
      {
        id: "comp4",
        number: 4,
        name: "TBAAL & The Women's Museum (TWM) Relocation",
        shortName: "TBAAL & TWM",
        status: "at-risk",
        progress: 65,
        trend: "up",
        successes: [
          "TWM Temporary Certificate of Occupancy (TCO) now April 11",
        ],
        criticalPath: [
          "TWM: Final punch list continues to be addressed",
          "TWM: Fire final inspection after outstanding issues (actuators, doors, boxes) resolved",
          "TBAAL: All design efforts paused until schematic design package approved",
        ],
        otherActivity: [
          "Expedited inspections requested for Muse and Auditorium (not included in TCO)",
          "Phoenix 1 provided proposed scope, cost, and schedule for HVAC temperature inconsistencies",
          "Dikita working with Phoenix 1 to ensure all identified HVAC issues addressed",
          "Exterior areas ADA-compliance report received",
        ],
      },
      {
        id: "comp5",
        number: 5,
        name: "Pioneer Park / Plaza / Cemetery",
        shortName: "Pioneer Park",
        status: "on-track",
        progress: 8,
        trend: "flat",
        successes: [],
        criticalPath: [
          "Submission of Texas Historical Commission (THC) amended application",
          "Two soil borings near abandoned RR tunnel pending THC approval",
          "Issuance of Architectural Engineering and Design RFQ",
          "Submission of Cemetery Plat application",
          "Resolution of THC Pioneer Cemetery boundary determination",
        ],
        otherActivity: [
          "Archeologists had positive THC discussion regarding amended application",
          "Meeting with Planning and Development regarding THC comments on cemetery boundaries",
        ],
      },
      {
        id: "comp6",
        number: 6,
        name: "Eddie Bernice Johnson Union Station",
        shortName: "Union Station",
        status: "paused",
        progress: 0,
        trend: "flat",
        successes: [],
        criticalPath: [],
        otherActivity: [],
        note: "Paused and unawarded",
      },
      {
        id: "comp7",
        number: 7,
        name: "Development of 30 Acres",
        shortName: "30-Acre Development",
        status: "paused",
        progress: 0,
        trend: "flat",
        successes: [],
        criticalPath: [],
        otherActivity: [],
        note: "Paused and unawarded",
      },
    ],

    keyMilestones: [
      {
        label: "Hall D / Omni Bridge Separation",
        status: "complete",
        date: "Feb 2026",
      },
      {
        label: "GMP 2 City Council Approval",
        status: "complete",
        date: "Feb 2026",
      },
      {
        label: "FIFA Punch List 100%",
        status: "complete",
        date: "Feb 2026",
      },
      {
        label: "Truck Ramp Completion",
        status: "in-progress",
        date: "Apr 2026",
      },
      {
        label: "TWM Temporary Certificate of Occupancy",
        status: "in-progress",
        date: "Apr 11, 2026",
      },
      {
        label: "Arena GMP #1 Council Review",
        status: "upcoming",
        date: "TBD",
      },
      {
        label: "Arena Demolition Contract Award",
        status: "upcoming",
        date: "TBD",
      },
      {
        label: "Pioneer Park THC Application",
        status: "in-progress",
        date: "TBD",
      },
    ],
  },
];

// ---- Helper: get latest memo ----
function getLatestMemo() {
  return MEMOS[MEMOS.length - 1];
}

// ---- Helper: get memo by id ----
function getMemoById(id) {
  return MEMOS.find((m) => m.id === id);
}
