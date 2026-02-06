const fs = require('fs');
const path = require('path');

// Service data with unique content per service
const services = [
  {
    slug: 'drain-cleaning',
    title: 'Drain Cleaning',
    shortTitle: 'Drain Cleaning',
    metaKeywords: 'drain cleaning, clogged drain, slow drain, hydro jetting, drain clearing',
    heroTitle: 'Clogged Drain Ruining Your Day?',
    heroSubtitle: 'We\'ll Have It Flowing in Under an Hour',
    description: 'Professional drain cleaning services using state-of-the-art hydro-jetting technology. We clear any clog—kitchen, bathroom, or main line—with a 100% satisfaction guarantee.',
    icon: '🚿',
    priceStart: 89,
    problems: [
      { title: 'Slow-Draining Sink', desc: 'Water pools and takes forever to drain? Grease, soap, and hair buildup are strangling your pipes.' },
      { title: 'Gurgling Sounds', desc: 'Pipes making weird noises? That\'s air trapped by partial blockages—a warning sign of bigger problems.' },
      { title: 'Recurring Clogs', desc: 'Same drain clogging every few weeks? Store-bought chemicals only push the problem deeper.' },
      { title: 'Multiple Clogged Drains', desc: 'When several drains clog at once, your main sewer line is likely blocked.' }
    ],
    process: [
      { step: 1, title: 'Video Inspection', desc: 'We snake a HD camera into your pipes to see exactly what\'s causing the problem—no guessing.' },
      { step: 2, title: 'Clear the Blockage', desc: 'Using hydro-jetting (3,500 PSI water pressure), we blast away years of buildup, not just poke a hole through.' },
      { step: 3, title: 'Verify & Prevent', desc: 'We re-inspect to confirm the line is 100% clear, then advise on preventing future clogs.' }
    ],
    services: [
      'Kitchen sink drain cleaning',
      'Bathroom drain clearing',
      'Shower & tub drain service',
      'Floor drain cleaning',
      'Main sewer line cleaning',
      'Hydro-jetting service',
      'Video pipe inspection',
      'Preventive drain maintenance'
    ],
    faq: [
      { q: 'How much does drain cleaning cost in Dallas?', a: 'Our drain cleaning starts at $89 for a single drain. Most jobs fall between $89-$350 depending on the severity and location. Main sewer line cleaning is typically $250-$500. We always provide an upfront quote before starting.' },
      { q: 'Is hydro-jetting safe for old pipes?', a: 'Hydro-jetting is safe for most pipes when done by professionals. We adjust pressure based on pipe material and condition. For very old or fragile pipes, we may recommend gentler methods. Our video inspection beforehand helps us choose the right approach.' },
      { q: 'Why do my drains keep clogging?', a: 'Recurring clogs usually mean: 1) Only partial clearing from DIY methods, 2) Tree roots in the line, 3) Pipe damage or bellies where debris collects, or 4) Systemic buildup needing professional hydro-jetting. Video inspection reveals the true cause.' },
      { q: 'Are chemical drain cleaners bad for pipes?', a: 'Yes. Chemical drain cleaners can corrode pipes over time, especially older metal pipes. They also only partially clear clogs, pushing the problem further down. Hydro-jetting is safer for pipes and more effective long-term.' }
    ],
    relatedServices: ['sewer-repair', 'leak-detection', 'emergency-plumbing']
  },
  {
    slug: 'water-heater-repair',
    title: 'Water Heater Repair & Installation',
    shortTitle: 'Water Heaters',
    metaKeywords: 'water heater repair, water heater installation, tankless water heater, hot water heater, water heater replacement',
    heroTitle: 'Cold Shower This Morning?',
    heroSubtitle: 'We\'ll Restore Your Hot Water Today',
    description: 'Expert water heater repair and installation for all brands. Tank, tankless, gas, and electric. Same-day service available with up to 10-year warranties.',
    icon: '🔥',
    priceStart: 150,
    problems: [
      { title: 'No Hot Water', desc: 'Complete loss of hot water means a failed heating element, pilot light issue, or thermostat problem.' },
      { title: 'Not Enough Hot Water', desc: 'Running out of hot water quickly? Your tank may be undersized, sediment-filled, or losing efficiency.' },
      { title: 'Strange Noises', desc: 'Popping, rumbling, or cracking sounds indicate sediment buildup—your water heater is overworking.' },
      { title: 'Leaking Tank', desc: 'Water pooling around your heater is an emergency. Internal corrosion often means replacement is needed.' }
    ],
    process: [
      { step: 1, title: 'Diagnose the Problem', desc: 'We test thermostat, elements, pilot light, gas valve, and tank condition to pinpoint the exact issue.' },
      { step: 2, title: 'Present Your Options', desc: 'Repair vs. replace analysis with honest recommendations. We show you why—no pressure upselling.' },
      { step: 3, title: 'Fix It Right', desc: 'Same-day repairs when parts are available. Same-day installation for new units. Hot water by tonight.' }
    ],
    services: [
      'Tank water heater repair',
      'Tankless water heater service',
      'Water heater installation',
      'Thermostat replacement',
      'Heating element replacement',
      'Anode rod replacement',
      'Sediment flush & maintenance',
      'Gas line connections',
      'Water heater replacement',
      'Tankless conversion'
    ],
    faq: [
      { q: 'How long do water heaters last?', a: 'Tank water heaters typically last 8-12 years. Tankless units can last 15-20+ years with proper maintenance. If your heater is over 10 years old and having problems, replacement often makes more financial sense than repair.' },
      { q: 'Should I switch to tankless?', a: 'Tankless water heaters cost more upfront ($2,500-$4,500 installed) but save 20-30% on water heating costs and last twice as long. They\'re ideal for larger homes or high hot water demand. We can help you calculate the ROI for your situation.' },
      { q: 'Why is my water heater making noise?', a: 'Popping or rumbling usually indicates sediment buildup at the bottom of the tank. The water beneath the sediment boils and creates noise. Annual flushing prevents this. If severe, the tank may need replacement.' },
      { q: 'Can you repair any brand?', a: 'Yes! We service all brands: Rheem, A.O. Smith, Bradford White, Rinnai, Navien, Noritz, State, and more. We stock common parts and can get specialty parts quickly.' }
    ],
    relatedServices: ['emergency-plumbing', 'gas-line-repair', 'bathroom-remodeling']
  },
  {
    slug: 'sewer-repair',
    title: 'Sewer Line Repair & Replacement',
    shortTitle: 'Sewer Repair',
    metaKeywords: 'sewer repair, sewer line replacement, trenchless sewer repair, sewer cleaning, sewer backup, main line repair',
    heroTitle: 'Sewage Backup? Tree Roots in Your Line?',
    heroSubtitle: 'We Fix Sewer Lines Without Destroying Your Yard',
    description: 'Modern trenchless sewer repair technology fixes your sewer line in hours, not days—often with just one or two small access points. No trenches, no landscaping damage.',
    icon: '🏠',
    priceStart: 350,
    problems: [
      { title: 'Sewage Backup', desc: 'Waste coming up through drains is a health emergency. Your main sewer line is blocked or damaged.' },
      { title: 'Slow Drains Throughout House', desc: 'When multiple drains are slow simultaneously, the problem is in your main sewer line.' },
      { title: 'Soggy Yard or Foul Smell', desc: 'Wet patches or sewage smell in your yard means a cracked or collapsed sewer line underground.' },
      { title: 'Tree Root Infiltration', desc: 'Tree roots seek water and can crack pipes, causing repeated blockages and eventual pipe collapse.' }
    ],
    process: [
      { step: 1, title: 'Video Inspection', desc: 'We send a HD camera through your entire sewer line to locate and assess the damage precisely.' },
      { step: 2, title: 'Recommend Solution', desc: 'Depending on damage: hydro-jetting, pipe lining (trenchless), pipe bursting, or traditional replacement.' },
      { step: 3, title: 'Trenchless Repair', desc: 'Most repairs done with minimal digging. We access through cleanouts, not your entire yard.' }
    ],
    services: [
      'Sewer camera inspection',
      'Trenchless pipe lining (CIPP)',
      'Trenchless pipe bursting',
      'Traditional sewer replacement',
      'Tree root removal',
      'Main line cleaning',
      'Sewer cleanout installation',
      'Bellied sewer pipe repair',
      'Orangeburg pipe replacement',
      'Cast iron pipe repair'
    ],
    faq: [
      { q: 'What is trenchless sewer repair?', a: 'Trenchless repair fixes your sewer line without digging a trench across your yard. We access the pipe through small entry points (usually existing cleanouts) and either line the inside with epoxy-coated liner or burst the old pipe while pulling in new pipe. Same result, fraction of the yard damage.' },
      { q: 'How much does sewer line replacement cost in Dallas?', a: 'Sewer line replacement in Dallas typically costs $3,000-$15,000 depending on length, depth, and method. Trenchless methods are often comparable to traditional and save thousands in landscaping restoration. We provide detailed quotes after video inspection.' },
      { q: 'How do I know if I have a sewer line problem?', a: 'Warning signs: multiple slow drains, gurgling toilets, sewage smell indoors or outdoors, soggy yard spots, foundation cracks (severe cases), and recurring main line backups. Video inspection ($149, free with repair) confirms the diagnosis.' },
      { q: 'Will my homeowner\'s insurance cover sewer repair?', a: 'Standard policies usually don\'t cover sewer lines, but many insurers offer add-on coverage. If damage is from a covered event (like sudden tree root damage vs. gradual deterioration), you may have coverage. We provide documentation to support claims.' }
    ],
    relatedServices: ['drain-cleaning', 'leak-detection', 'emergency-plumbing']
  },
  {
    slug: 'leak-detection',
    title: 'Leak Detection & Repair',
    shortTitle: 'Leak Detection',
    metaKeywords: 'leak detection, slab leak, water leak, pipe leak, leak repair, hidden leak, underground leak',
    heroTitle: 'Water Bill Suddenly Doubled?',
    heroSubtitle: 'We Find Hidden Leaks Without Tearing Up Your Home',
    description: 'Advanced electronic leak detection finds leaks behind walls, under slabs, and underground—pinpointed to the inch. We fix what we find with minimal disruption.',
    icon: '💧',
    priceStart: 199,
    problems: [
      { title: 'High Water Bill', desc: 'Unexplained spike in water usage? Hidden leaks can waste 10,000+ gallons per year.' },
      { title: 'Sound of Running Water', desc: 'Hearing water when nothing\'s on? You have an active leak somewhere in your system.' },
      { title: 'Warm Spots on Floor', desc: 'Hot spot on concrete floor indicates a hot water slab leak—your slab is being heated from below.' },
      { title: 'Mold or Musty Smell', desc: 'Unexplained mold or musty odors often trace back to hidden water leaks feeding the growth.' }
    ],
    process: [
      { step: 1, title: 'Electronic Detection', desc: 'Using acoustic sensors and thermal imaging, we locate leaks to within inches—even under concrete slabs.' },
      { step: 2, title: 'Assess & Quote', desc: 'We show you exactly where the leak is, explain repair options, and provide a written estimate.' },
      { step: 3, title: 'Minimal-Impact Repair', desc: 'We access and repair with smallest possible opening. When possible, we reroute to avoid future issues.' }
    ],
    services: [
      'Slab leak detection',
      'Underground leak detection',
      'Pool leak detection',
      'Wall leak detection',
      'Thermal imaging inspection',
      'Acoustic leak detection',
      'Slab leak repair',
      'Pipe rerouting',
      'Whole-home repiping',
      'Insurance claim assistance'
    ],
    faq: [
      { q: 'How do you find a leak under concrete?', a: 'We use acoustic detection equipment that "listens" for the sound of water escaping under pressure, plus thermal imaging to detect temperature differences from leaking hot water. Combined, we can pinpoint slab leaks to within inches without any digging.' },
      { q: 'What is a slab leak?', a: 'A slab leak is a leak in the water pipes running beneath your home\'s concrete foundation. Common in Texas due to soil movement. Signs include warm floor spots, high water bills, sound of running water, and (in severe cases) foundation issues.' },
      { q: 'Is slab leak repair covered by insurance?', a: 'Most homeowner\'s policies cover the resulting water damage but not the plumbing repair itself. Some policies have endorsements for plumbing. We document everything thoroughly and work with your insurance adjuster to maximize your claim.' },
      { q: 'Should I repair or repipe?', a: 'If you have one leak, repair makes sense. If your home is 25+ years old or you\'re experiencing multiple leaks, repiping often saves money long-term. We\'ll give you honest analysis based on pipe condition, not a sales pitch.' }
    ],
    relatedServices: ['sewer-repair', 'emergency-plumbing', 'bathroom-remodeling']
  },
  {
    slug: 'emergency-plumbing',
    title: '24/7 Emergency Plumbing',
    shortTitle: 'Emergency Service',
    metaKeywords: 'emergency plumber, 24 hour plumber, after hours plumber, emergency plumbing, plumbing emergency',
    heroTitle: 'Plumbing Emergency at 3 AM?',
    heroSubtitle: 'We Answer. We Dispatch. We\'re There in 60 Minutes.',
    description: '24/7 emergency plumbing response anywhere in DFW. Burst pipes, sewage backups, gas leaks, flooding—we handle the crisis fast and minimize damage.',
    icon: '🚨',
    priceStart: 149,
    problems: [
      { title: 'Burst Pipe', desc: 'Water spraying everywhere? Shut off your main valve (we\'ll guide you) and we\'ll be there in under an hour.' },
      { title: 'Sewage Backup', desc: 'Raw sewage coming up through drains is a health hazard. Don\'t use any water until we clear the line.' },
      { title: 'Gas Leak', desc: 'Smell gas? Leave immediately, call 911 from outside, then call us. We\'re certified for gas line repair.' },
      { title: 'Flooding', desc: 'Whether from a broken pipe, overflowing toilet, or appliance failure, we stop the source and start cleanup.' }
    ],
    process: [
      { step: 1, title: 'Immediate Response', desc: 'Call us 24/7—a real person answers. We dispatch a plumber within 10 minutes of your call.' },
      { step: 2, title: 'Arrive & Assess', desc: 'We\'re on-site within 60 minutes (usually faster). First priority: stop the damage.' },
      { step: 3, title: 'Fix & Restore', desc: 'We make permanent repairs, not just patches. Water damage mitigation referrals available.' }
    ],
    services: [
      'Burst pipe repair',
      'Sewage backup clearing',
      'Gas leak detection & repair',
      'Flooding response',
      'Overflowing toilet repair',
      'Water main breaks',
      'Frozen pipe thawing',
      'Emergency water shutoff',
      'After-hours plumbing',
      'Weekend & holiday service'
    ],
    faq: [
      { q: 'Do you charge extra for nights/weekends?', a: 'No! We never charge extra for nights, weekends, or holidays. The price we quote is the price you pay—no "emergency" upcharge. Plumbing emergencies don\'t wait for business hours, and neither should fair pricing.' },
      { q: 'How fast can you get here?', a: 'Our guaranteed response time is 60 minutes anywhere in the DFW metroplex. Average actual arrival is 35-45 minutes. For life-threatening emergencies like major gas leaks, call 911 first.' },
      { q: 'What should I do while waiting?', a: 'For water emergencies: locate and shut off your main water valve (usually near the meter or where the main line enters your home). For gas: leave the house, don\'t flip any switches, and call from outside. We\'ll guide you on the phone.' },
      { q: 'Will my insurance cover emergency repairs?', a: 'Homeowner\'s insurance typically covers sudden, accidental damage (burst pipe flooding) but not gradual issues (slow leak over time). Emergency service costs are usually your responsibility; resulting damage may be covered. We document everything for your claim.' }
    ],
    relatedServices: ['leak-detection', 'sewer-repair', 'water-heater-repair']
  },
  {
    slug: 'bathroom-remodeling',
    title: 'Bathroom & Kitchen Plumbing',
    shortTitle: 'Remodeling',
    metaKeywords: 'bathroom plumbing, kitchen plumbing, plumbing remodel, fixture installation, bathroom renovation plumbing',
    heroTitle: 'Dreaming of That Perfect Bathroom?',
    heroSubtitle: 'We Handle All the Plumbing—From Plans to Final Fixture',
    description: 'Complete bathroom and kitchen plumbing for renovations, additions, and new construction. We work with your contractor or handle it ourselves.',
    icon: '🛁',
    priceStart: 250,
    problems: [
      { title: 'Moving Fixtures', desc: 'Want the toilet on a different wall? Sink in a new spot? We handle all the pipe rerouting.' },
      { title: 'Old Plumbing', desc: 'Renovating a 50-year-old bathroom? We\'ll update galvanized pipes to modern PEX while walls are open.' },
      { title: 'Adding Features', desc: 'Rain shower, body jets, soaking tub, dual vanity—we plumb it all with proper pressure and drainage.' },
      { title: 'Code Compliance', desc: 'DIY or previous work not up to code? We bring everything to current standards and handle permits.' }
    ],
    process: [
      { step: 1, title: 'Design Consultation', desc: 'We review your plans (or help create them), identify plumbing challenges, and provide a detailed quote.' },
      { step: 2, title: 'Rough-In Work', desc: 'While walls are open, we run all supply and drain lines to exact fixture locations.' },
      { step: 3, title: 'Finish & Connect', desc: 'Once surfaces are done, we install and connect all fixtures, test everything, and ensure code compliance.' }
    ],
    services: [
      'Bathroom rough-in plumbing',
      'Kitchen rough-in plumbing',
      'Fixture installation',
      'Shower & tub installation',
      'Toilet installation',
      'Vanity & sink installation',
      'Garbage disposal install',
      'Dishwasher hookup',
      'Gas line for range',
      'ADA-compliant installations'
    ],
    faq: [
      { q: 'How much does bathroom plumbing cost for a remodel?', a: 'Basic fixture replacement (toilet, vanity, shower valve) typically runs $500-$1,500 in labor. Moving fixtures adds $500-$2,000+ depending on distance and complexity. Complete gut-and-replace with new pipe runs: $2,500-$6,000. We provide detailed quotes after seeing your space.' },
      { q: 'Do you work with contractors?', a: 'Yes! We work with many general contractors across DFW. We coordinate scheduling, show up when promised, and communicate directly about any issues. Happy to be a subcontractor or work directly with you.' },
      { q: 'Should I update old pipes during a remodel?', a: 'If walls will be open anyway, it\'s the perfect time. Replacing galvanized or polybutylene pipes with PEX during a remodel costs far less than doing it separately later. We\'ll assess your existing pipes and give honest recommendations.' },
      { q: 'Do you handle permits?', a: 'Yes, we pull all required plumbing permits and schedule inspections. Permit costs vary by city ($50-$200 typically). Permitted work protects your investment and is required for selling your home.' }
    ],
    relatedServices: ['water-heater-repair', 'drain-cleaning', 'leak-detection']
  },
  {
    slug: 'gas-line-repair',
    title: 'Gas Line Repair & Installation',
    shortTitle: 'Gas Lines',
    metaKeywords: 'gas line repair, gas leak repair, gas line installation, gas pipe, gas fitting, natural gas plumber',
    heroTitle: 'Gas Leak? New Appliance Needs Gas?',
    heroSubtitle: 'Licensed Gas Fitters for Safe, Code-Compliant Work',
    description: 'Expert gas line services from leak detection and repair to new line installation for ranges, dryers, grills, generators, and pool heaters.',
    icon: '🔧',
    priceStart: 175,
    problems: [
      { title: 'Gas Smell', desc: 'Rotten egg odor means a gas leak. Leave immediately and call from outside. This is an emergency.' },
      { title: 'Dead Pilot Light', desc: 'Pilot keeps going out? Could be thermocouple, draft, or low gas pressure from a partial blockage.' },
      { title: 'New Appliance', desc: 'Installing a gas range, dryer, or outdoor grill? You need a proper gas line run by a licensed professional.' },
      { title: 'Old Gas Lines', desc: 'Corroded or undersized gas lines can cause poor appliance performance and safety hazards.' }
    ],
    process: [
      { step: 1, title: 'Safety First', desc: 'For leaks, we locate the source using electronic detection. For new lines, we assess the route and capacity needed.' },
      { step: 2, title: 'Repair or Install', desc: 'We repair leaks with proper fittings or run new lines with correct sizing for your BTU requirements.' },
      { step: 3, title: 'Test & Certify', desc: 'Pressure testing ensures zero leaks. We provide documentation and schedule city inspection if required.' }
    ],
    services: [
      'Gas leak detection',
      'Gas leak repair',
      'Gas line installation',
      'Range/stove gas hookup',
      'Dryer gas hookup',
      'Outdoor grill gas line',
      'Pool heater gas line',
      'Generator gas line',
      'Gas line pressure testing',
      'Gas appliance connection'
    ],
    faq: [
      { q: 'Is it safe to run my own gas line?', a: 'No—gas line work requires a licensed plumber or gas fitter and city permits in Texas. Improper installation can cause explosions, fires, or carbon monoxide poisoning. This isn\'t DIY territory. The risk isn\'t worth it.' },
      { q: 'How much does gas line installation cost?', a: 'A simple gas line run (under 25 feet, accessible route) typically costs $300-$800. Longer runs, multiple turns, or concealed routing cost more. We quote by the job, not by the hour, so you know the total upfront.' },
      { q: 'I smell gas—what should I do?', a: '1) Don\'t flip any switches or create sparks. 2) Open windows if easy to reach. 3) Leave the house immediately. 4) Call 911 and then call us from outside. Gas leaks are emergencies—don\'t wait.' },
      { q: 'Can you convert my electric appliances to gas?', a: 'We can run the gas line; you\'ll need to purchase gas versions of your appliances. For ranges, we can often run a line to your current location. For dryers, we need to be near the existing vent. We\'ll assess and advise.' }
    ],
    relatedServices: ['water-heater-repair', 'emergency-plumbing', 'bathroom-remodeling']
  },
  {
    slug: 'water-filtration',
    title: 'Water Filtration & Softening',
    shortTitle: 'Water Filtration',
    metaKeywords: 'water filtration, water softener, water filter, whole house water filter, reverse osmosis, water treatment',
    heroTitle: 'Hard Water Destroying Your Home?',
    heroSubtitle: 'Protect Your Pipes, Appliances, and Family',
    description: 'Whole-house water filtration and softening systems that eliminate hard water damage, improve taste, and protect your plumbing investment.',
    icon: '💎',
    priceStart: 299,
    problems: [
      { title: 'White Scale Buildup', desc: 'Crusty deposits on faucets and showerheads? That\'s calcium and magnesium destroying your fixtures.' },
      { title: 'Dry Skin & Hair', desc: 'Hard water strips natural oils. Softened water makes a noticeable difference in how you feel.' },
      { title: 'Bad Taste or Smell', desc: 'Chlorine, sulfur, or metallic taste? Filtration removes contaminants and improves water quality.' },
      { title: 'Appliance Damage', desc: 'Hard water cuts water heater lifespan in half and clogs washing machines, dishwashers, and ice makers.' }
    ],
    process: [
      { step: 1, title: 'Water Testing', desc: 'We test your water for hardness, chlorine, iron, sulfur, and other contaminants to recommend the right system.' },
      { step: 2, title: 'System Selection', desc: 'Based on your water and household size, we recommend softener, filter, or combination systems.' },
      { step: 3, title: 'Professional Install', desc: 'We install at your main water entry point, program the system, and teach you basic maintenance.' }
    ],
    services: [
      'Water testing',
      'Water softener installation',
      'Whole-house water filter',
      'Reverse osmosis systems',
      'Under-sink filtration',
      'Iron/sulfur removal',
      'UV water purification',
      'Softener repair & service',
      'Salt delivery service',
      'Filter replacement service'
    ],
    faq: [
      { q: 'Do I need a water softener in Dallas?', a: 'Dallas-area water is moderately hard (8-12 grains per gallon). A softener isn\'t strictly necessary but provides significant benefits: longer appliance life, less soap usage, softer skin/hair, and no scale buildup. Most homeowners see ROI within 5-7 years in protected appliances.' },
      { q: 'Water softener vs. water filter—what\'s the difference?', a: 'Softeners remove hardness minerals (calcium, magnesium) that cause scale. Filters remove contaminants like chlorine, sediment, and chemicals that affect taste and health. Many homes benefit from both—a softener at the main line plus an RO filter at the kitchen sink for drinking water.' },
      { q: 'How much does a water softener cost installed?', a: 'Quality water softener installation in Dallas ranges $1,500-$3,500 depending on system capacity, features, and installation complexity. Avoid big-box store units—they\'re lower quality and harder to service. We install professional-grade systems with better warranties.' },
      { q: 'How often do water softeners need service?', a: 'Mainly just add salt every 4-8 weeks (we offer delivery service). The resin bed should be cleaned annually. Full system service every 2-3 years. Quality systems last 15-20 years with basic maintenance.' }
    ],
    relatedServices: ['bathroom-remodeling', 'water-heater-repair', 'leak-detection']
  }
];

// Top cities for cross-linking
const topCities = [
  { name: 'Dallas', slug: 'dallas' },
  { name: 'Fort Worth', slug: 'fort-worth' },
  { name: 'Plano', slug: 'plano' },
  { name: 'Irving', slug: 'irving' },
  { name: 'Arlington', slug: 'arlington' },
  { name: 'Frisco', slug: 'frisco' }
];

// Generate service page HTML
function generateServicePage(service) {
  const relatedServices = services.filter(s => service.relatedServices.includes(s.slug));
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${service.title} in Dallas-Fort Worth. ${service.description} Licensed & insured. 24/7 service. Call (214) 555-1234 for a free estimate.">
    <meta name="keywords" content="${service.metaKeywords}, Dallas TX, Fort Worth, DFW, plumber near me">
    <meta name="robots" content="index, follow">
    
    <meta property="og:title" content="${service.title} Dallas | Lone Star Plumbing Pros">
    <meta property="og:description" content="${service.description}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://beta7-dallas-plumber.netlify.app/services/${service.slug}.html">
    
    <title>${service.title} Dallas TX | From $${service.priceStart} | Lone Star Plumbing Pros</title>
    <link rel="canonical" href="https://beta7-dallas-plumber.netlify.app/services/${service.slug}.html">
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../styles.css">
    
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "${service.title}",
      "description": "${service.description}",
      "provider": {
        "@type": "Plumber",
        "name": "Lone Star Plumbing Pros",
        "telephone": "+1-214-555-1234",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dallas",
          "addressRegion": "TX",
          "addressCountry": "US"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": "Dallas-Fort Worth"
      },
      "offers": {
        "@type": "Offer",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "${service.priceStart}",
          "priceCurrency": "USD",
          "minPrice": "${service.priceStart}"
        }
      }
    }
    </script>
    
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        ${service.faq.map(f => `{
          "@type": "Question",
          "name": "${f.q.replace(/"/g, '\\"')}",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "${f.a.replace(/"/g, '\\"')}"
          }
        }`).join(',\n        ')}
      ]
    }
    </script>
    
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://beta7-dallas-plumber.netlify.app/"},
        {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://beta7-dallas-plumber.netlify.app/#services"},
        {"@type": "ListItem", "position": 3, "name": "${service.shortTitle}", "item": "https://beta7-dallas-plumber.netlify.app/services/${service.slug}.html"}
      ]
    }
    </script>
</head>
<body>
    <!-- Top Bar -->
    <div class="top-bar">
        <div class="container">
            <div class="top-bar-content">
                <div class="top-bar-left">
                    <span>🏆 BBB A+ Rated | ⭐ 4.9 Stars (2,847 Reviews)</span>
                </div>
                <div class="top-bar-right">
                    <span>🕐 24/7 Emergency Service</span>
                    <a href="tel:+12145551234">📞 (214) 555-1234</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Header -->
    <header class="header">
        <div class="container">
            <div class="header-content">
                <a href="/" class="logo">
                    <span class="logo-icon">⭐</span>
                    <div class="logo-text">
                        <span class="logo-name">Lone Star Plumbing Pros</span>
                        <span class="logo-tagline">Dallas-Fort Worth's Trusted Choice</span>
                    </div>
                </a>
                <nav class="nav">
                    <a href="/#services">Services</a>
                    <a href="/#about">About</a>
                    <a href="/#areas">Areas</a>
                    <a href="/#reviews">Reviews</a>
                    <a href="/#faq">FAQ</a>
                    <a href="/#contact">Contact</a>
                </nav>
                <a href="tel:+12145551234" class="header-cta btn btn-secondary">
                    Call Now: (214) 555-1234
                </a>
            </div>
        </div>
    </header>

    <!-- Breadcrumb -->
    <div class="breadcrumb">
        <div class="container">
            <a href="/">Home</a> / <a href="/#services">Services</a> / <span>${service.shortTitle}</span>
        </div>
    </div>

    <!-- Service Hero -->
    <section class="service-hero">
        <div class="container">
            <div class="service-hero-content">
                <div class="service-hero-text">
                    <div class="service-badge">${service.icon} ${service.shortTitle}</div>
                    <h1>${service.heroTitle}</h1>
                    <p class="service-subtitle">${service.heroSubtitle}</p>
                    <p class="service-desc">${service.description}</p>
                    <div class="service-price-hero">
                        Starting at <strong>$${service.priceStart}</strong> | Free Estimates
                    </div>
                    <div class="hero-buttons">
                        <a href="tel:+12145551234" class="btn btn-primary btn-lg">
                            📞 Call (214) 555-1234
                        </a>
                        <a href="#contact" class="btn btn-outline btn-lg">
                            📋 Get Free Quote
                        </a>
                    </div>
                    <div class="hero-features">
                        <div class="hero-feature"><span class="feature-icon">✓</span> 60-Min Emergency Response</div>
                        <div class="hero-feature"><span class="feature-icon">✓</span> Upfront Pricing</div>
                        <div class="hero-feature"><span class="feature-icon">✓</span> 100% Satisfaction Guarantee</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Problems We Solve -->
    <section class="problems-section">
        <div class="container">
            <div class="section-header">
                <span class="section-tag">Common Problems</span>
                <h2>Signs You Need ${service.shortTitle} Service</h2>
            </div>
            <div class="problems-grid">
                ${service.problems.map(p => `
                <div class="problem-item">
                    <h3>${p.title}</h3>
                    <p>${p.desc}</p>
                </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- Our Process -->
    <section class="process-section">
        <div class="container">
            <div class="section-header">
                <span class="section-tag">How It Works</span>
                <h2>Our ${service.shortTitle} Process</h2>
            </div>
            <div class="process-grid">
                ${service.process.map(p => `
                <div class="process-step">
                    <div class="step-number">${p.step}</div>
                    <h3>${p.title}</h3>
                    <p>${p.desc}</p>
                </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- Services List -->
    <section class="services-list-section">
        <div class="container">
            <div class="section-header">
                <span class="section-tag">What We Offer</span>
                <h2>${service.shortTitle} Services</h2>
            </div>
            <div class="services-checklist">
                ${service.services.map(s => `<div class="service-check-item">✓ ${s}</div>`).join('')}
            </div>
        </div>
    </section>

    <!-- FAQ -->
    <section class="faq service-faq">
        <div class="container">
            <div class="section-header">
                <span class="section-tag">Common Questions</span>
                <h2>${service.shortTitle} FAQ</h2>
            </div>
            <div class="faq-grid">
                ${service.faq.map(f => `
                <div class="faq-item">
                    <h3>${f.q}</h3>
                    <p>${f.a}</p>
                </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- Service Areas for This Service -->
    <section class="service-areas-section">
        <div class="container">
            <div class="section-header">
                <span class="section-tag">Coverage Area</span>
                <h2>${service.shortTitle} Throughout DFW</h2>
                <p>We provide ${service.shortTitle.toLowerCase()} services in all Dallas-Fort Worth cities</p>
            </div>
            <div class="city-links">
                ${topCities.map(c => `<a href="../${c.slug}.html" class="city-link">${service.shortTitle} in ${c.name}</a>`).join('')}
                <a href="/#areas" class="city-link">+ 28 More Cities</a>
            </div>
        </div>
    </section>

    <!-- Related Services -->
    <section class="related-services">
        <div class="container">
            <div class="section-header">
                <span class="section-tag">Related Services</span>
                <h2>You Might Also Need</h2>
            </div>
            <div class="related-grid">
                ${relatedServices.map(r => `
                <a href="${r.slug}.html" class="related-card">
                    <div class="related-icon">${r.icon}</div>
                    <h3>${r.shortTitle}</h3>
                    <p>From $${r.priceStart}</p>
                </a>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section id="contact" class="service-cta">
        <div class="container">
            <div class="cta-content">
                <h2>Ready for ${service.shortTitle} Service?</h2>
                <p>Get a free estimate today. No obligation, no pressure.</p>
                <div class="cta-buttons">
                    <a href="tel:+12145551234" class="btn btn-primary btn-lg">📞 Call (214) 555-1234</a>
                    <a href="/#contact" class="btn btn-outline btn-lg">📋 Request Quote Online</a>
                </div>
                <p class="cta-note">Available 24/7 for emergencies</p>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <div class="logo">
                        <span class="logo-icon">⭐</span>
                        <span class="logo-name">Lone Star Plumbing Pros</span>
                    </div>
                    <p>Family-owned since 1959. Three generations of master plumbers serving Dallas-Fort Worth.</p>
                </div>
                <div class="footer-links">
                    <h4>Services</h4>
                    ${services.slice(0, 6).map(s => `<a href="${s.slug}.html">${s.shortTitle}</a>`).join('\n                    ')}
                </div>
                <div class="footer-links">
                    <h4>Service Areas</h4>
                    ${topCities.map(c => `<a href="../${c.slug}.html">${c.name}</a>`).join('\n                    ')}
                </div>
                <div class="footer-contact">
                    <h4>Contact Us</h4>
                    <p>📞 <a href="tel:+12145551234">(214) 555-1234</a></p>
                    <p>📧 <a href="mailto:info@lonestarplumbingpros.com">info@lonestarplumbingpros.com</a></p>
                    <p>📍 1234 Main Street, Dallas, TX 75201</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Lone Star Plumbing Pros. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="../script.js"></script>
</body>
</html>`;
}

// Generate services index page
function generateServicesIndex() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Complete plumbing services in Dallas-Fort Worth. Drain cleaning, water heaters, sewer repair, leak detection, emergency plumbing & more. Licensed, insured, BBB A+ rated.">
    <meta name="keywords" content="plumbing services Dallas, plumber services Fort Worth, DFW plumbing, residential plumbing, commercial plumbing">
    
    <title>Plumbing Services Dallas-Fort Worth | Lone Star Plumbing Pros</title>
    <link rel="canonical" href="https://beta7-dallas-plumber.netlify.app/services/">
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../styles.css">
    
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Plumbing Services",
      "description": "Complete plumbing services offered by Lone Star Plumbing Pros in Dallas-Fort Worth",
      "numberOfItems": ${services.length},
      "itemListElement": [
        ${services.map((s, i) => `{
          "@type": "ListItem",
          "position": ${i + 1},
          "item": {
            "@type": "Service",
            "name": "${s.title}",
            "url": "https://beta7-dallas-plumber.netlify.app/services/${s.slug}.html"
          }
        }`).join(',\n        ')}
      ]
    }
    </script>
</head>
<body>
    <!-- Top Bar -->
    <div class="top-bar">
        <div class="container">
            <div class="top-bar-content">
                <div class="top-bar-left">
                    <span>🏆 BBB A+ Rated | ⭐ 4.9 Stars (2,847 Reviews)</span>
                </div>
                <div class="top-bar-right">
                    <span>🕐 24/7 Emergency Service</span>
                    <a href="tel:+12145551234">📞 (214) 555-1234</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Header -->
    <header class="header">
        <div class="container">
            <div class="header-content">
                <a href="/" class="logo">
                    <span class="logo-icon">⭐</span>
                    <div class="logo-text">
                        <span class="logo-name">Lone Star Plumbing Pros</span>
                        <span class="logo-tagline">Dallas-Fort Worth's Trusted Choice</span>
                    </div>
                </a>
                <nav class="nav">
                    <a href="/#services">Services</a>
                    <a href="/#about">About</a>
                    <a href="/#areas">Areas</a>
                    <a href="/#reviews">Reviews</a>
                    <a href="/#faq">FAQ</a>
                    <a href="/#contact">Contact</a>
                </nav>
                <a href="tel:+12145551234" class="header-cta btn btn-secondary">
                    Call Now: (214) 555-1234
                </a>
            </div>
        </div>
    </header>

    <!-- Breadcrumb -->
    <div class="breadcrumb">
        <div class="container">
            <a href="/">Home</a> / <span>Services</span>
        </div>
    </div>

    <!-- Services Index Hero -->
    <section class="page-hero">
        <div class="container">
            <h1>Our Plumbing Services</h1>
            <p>Complete residential and commercial plumbing solutions for Dallas-Fort Worth. Every service backed by our 100% satisfaction guarantee.</p>
        </div>
    </section>

    <!-- All Services -->
    <section class="all-services">
        <div class="container">
            <div class="services-index-grid">
                ${services.map(s => `
                <a href="${s.slug}.html" class="service-index-card">
                    <div class="service-index-icon">${s.icon}</div>
                    <h2>${s.title}</h2>
                    <p>${s.description}</p>
                    <div class="service-index-price">From $${s.priceStart}</div>
                    <span class="service-index-link">Learn More →</span>
                </a>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="service-cta">
        <div class="container">
            <div class="cta-content">
                <h2>Need Plumbing Help?</h2>
                <p>Call now for a free estimate. Available 24/7 for emergencies.</p>
                <div class="cta-buttons">
                    <a href="tel:+12145551234" class="btn btn-primary btn-lg">📞 Call (214) 555-1234</a>
                    <a href="/#contact" class="btn btn-outline btn-lg">📋 Request Quote</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <div class="logo">
                        <span class="logo-icon">⭐</span>
                        <span class="logo-name">Lone Star Plumbing Pros</span>
                    </div>
                    <p>Family-owned since 1959. Three generations of master plumbers serving Dallas-Fort Worth.</p>
                </div>
                <div class="footer-links">
                    <h4>Services</h4>
                    ${services.slice(0, 6).map(s => `<a href="${s.slug}.html">${s.shortTitle}</a>`).join('\n                    ')}
                </div>
                <div class="footer-links">
                    <h4>Service Areas</h4>
                    ${topCities.map(c => `<a href="../${c.slug}.html">${c.name}</a>`).join('\n                    ')}
                </div>
                <div class="footer-contact">
                    <h4>Contact Us</h4>
                    <p>📞 <a href="tel:+12145551234">(214) 555-1234</a></p>
                    <p>📧 <a href="mailto:info@lonestarplumbingpros.com">info@lonestarplumbingpros.com</a></p>
                    <p>📍 1234 Main Street, Dallas, TX 75201</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Lone Star Plumbing Pros. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="../script.js"></script>
</body>
</html>`;
}

// Create services directory
const servicesDir = path.join(__dirname, 'services');
if (!fs.existsSync(servicesDir)) {
  fs.mkdirSync(servicesDir, { recursive: true });
}

// Generate all service pages
services.forEach(service => {
  const html = generateServicePage(service);
  const filepath = path.join(servicesDir, `${service.slug}.html`);
  fs.writeFileSync(filepath, html);
  console.log(`Generated: services/${service.slug}.html`);
});

// Generate services index
const indexHtml = generateServicesIndex();
fs.writeFileSync(path.join(servicesDir, 'index.html'), indexHtml);
console.log('Generated: services/index.html');

console.log(`\n✅ Generated ${services.length} service pages + index`);
