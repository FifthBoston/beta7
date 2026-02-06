const fs = require('fs');

const cities = [
    // Dallas County
    { name: 'Dallas', slug: 'dallas', county: 'Dallas', pop: '1.3 million', desc: 'the heart of North Texas', neighborhoods: 'Uptown, Deep Ellum, Oak Lawn, Highland Park, and Bishop Arts District' },
    { name: 'Irving', slug: 'irving', county: 'Dallas', pop: '240,000', desc: 'home to the Las Colinas business district', neighborhoods: 'Las Colinas, Valley Ranch, and North Irving' },
    { name: 'Garland', slug: 'garland', county: 'Dallas', pop: '240,000', desc: 'a thriving suburban community east of Dallas', neighborhoods: 'Firewheel, Duck Creek, and Downtown Garland' },
    { name: 'Mesquite', slug: 'mesquite', county: 'Dallas', pop: '150,000', desc: 'the Rodeo Capital of Texas', neighborhoods: 'Town East, Creek Crossing, and Historic Downtown' },
    { name: 'Richardson', slug: 'richardson', county: 'Dallas', pop: '120,000', desc: 'home to the Telecom Corridor', neighborhoods: 'Canyon Creek, Breckinridge Park, and Downtown Richardson' },
    { name: 'Carrollton', slug: 'carrollton', county: 'Dallas', pop: '140,000', desc: 'a family-friendly city spanning three counties', neighborhoods: 'Old Downtown, Castle Hills, and Indian Creek' },
    { name: 'Farmers Branch', slug: 'farmers-branch', county: 'Dallas', pop: '35,000', desc: 'one of the oldest communities in Dallas County', neighborhoods: 'Brookhaven, Mercer Crossing, and Valley View' },
    { name: 'Highland Park', slug: 'highland-park', county: 'Dallas', pop: '9,000', desc: 'one of the most prestigious neighborhoods in Texas', neighborhoods: 'the Highland Park Village area and tree-lined historic streets' },
    { name: 'University Park', slug: 'university-park', county: 'Dallas', pop: '25,000', desc: 'home to Southern Methodist University', neighborhoods: 'Snider Plaza, the SMU area, and Lovers Lane district' },
    { name: 'Balch Springs', slug: 'balch-springs', county: 'Dallas', pop: '25,000', desc: 'a growing community in southeast Dallas County', neighborhoods: 'Lake June, Elam, and Central Balch Springs' },
    
    // Collin County
    { name: 'Plano', slug: 'plano', county: 'Collin', pop: '290,000', desc: 'one of the largest and most prosperous cities in Texas', neighborhoods: 'Legacy West, Downtown Plano, Willow Bend, and West Plano' },
    { name: 'Frisco', slug: 'frisco', county: 'Collin', pop: '220,000', desc: 'one of the fastest-growing cities in America', neighborhoods: 'Stonebriar, Newman Village, Starwood, and The Star district' },
    { name: 'McKinney', slug: 'mckinney', county: 'Collin', pop: '200,000', desc: 'named the #1 Best Place to Live in America', neighborhoods: 'Historic Downtown, Craig Ranch, Stonebridge Ranch, and Adriatica' },
    { name: 'Allen', slug: 'allen', county: 'Collin', pop: '105,000', desc: 'a family-oriented community with excellent schools', neighborhoods: 'Twin Creeks, The Village at Allen, and Watters Creek' },
    { name: 'Wylie', slug: 'wylie', county: 'Collin', pop: '55,000', desc: 'a charming lakeside community near Lake Lavon', neighborhoods: 'Birmingham Farms, Stone Lake, and Downtown Wylie' },
    { name: 'Murphy', slug: 'murphy', county: 'Collin', pop: '22,000', desc: 'a tight-knit community known for excellent schools', neighborhoods: 'Maxwell Creek, Murphy Town Center, and South Murphy' },
    { name: 'Prosper', slug: 'prosper', county: 'Collin', pop: '35,000', desc: 'a rapidly growing upscale community', neighborhoods: 'Windsong Ranch, Star Trail, Gentle Creek, and Lakes of Prosper' },
    { name: 'Celina', slug: 'celina', county: 'Collin', pop: '20,000', desc: 'a fast-growing town with small-town charm', neighborhoods: 'Light Farms, Mustang Lakes, and Historic Downtown Celina' },
    
    // Denton County
    { name: 'Denton', slug: 'denton', county: 'Denton', pop: '140,000', desc: 'a vibrant college town home to UNT and TWU', neighborhoods: 'Downtown Denton, Robson Ranch, and the Square' },
    { name: 'Lewisville', slug: 'lewisville', county: 'Denton', pop: '115,000', desc: 'a lakeside city on Lewisville Lake', neighborhoods: 'Castle Hills, Old Town, Valley Vista, and Highland Village' },
    { name: 'Flower Mound', slug: 'flower-mound', county: 'Denton', pop: '80,000', desc: 'an affluent suburb known for its natural beauty', neighborhoods: 'Bridlewood, Wellington, Tour 18, and Lakeside DFW' },
    { name: 'The Colony', slug: 'the-colony', county: 'Denton', pop: '45,000', desc: 'a lakefront community on Lewisville Lake', neighborhoods: 'Stewart Peninsula, Grandscape, and The Cascades' },
    { name: 'Little Elm', slug: 'little-elm', county: 'Denton', pop: '55,000', desc: 'a lakeside community with endless water recreation', neighborhoods: 'Paloma Creek, Union Park, and Lakefront' },
    { name: 'Corinth', slug: 'corinth', county: 'Denton', pop: '22,000', desc: 'a family-friendly community near Lake Dallas', neighborhoods: 'Oakmont, Lake Sharon, and South Corinth' },
    
    // Tarrant County
    { name: 'Fort Worth', slug: 'fort-worth', county: 'Tarrant', pop: '940,000', desc: 'Cowtown and the cultural heart of West DFW', neighborhoods: 'Downtown, Sundance Square, TCU area, Southlake, and the Stockyards' },
    { name: 'Arlington', slug: 'arlington', county: 'Tarrant', pop: '395,000', desc: 'home to AT&T Stadium and Globe Life Field', neighborhoods: 'Downtown, North Arlington, Viridian, and Interlochen' },
    { name: 'Grand Prairie', slug: 'grand-prairie', county: 'Tarrant', pop: '195,000', desc: 'a diverse city between Dallas and Fort Worth', neighborhoods: 'South Grand Prairie, Mira Lagos, and Lone Star Park area' },
    { name: 'Mansfield', slug: 'mansfield', county: 'Tarrant', pop: '75,000', desc: 'a family-focused community with top-rated schools', neighborhoods: 'Walnut Creek, Creekwood, and Historic Downtown' },
    { name: 'Euless', slug: 'euless', county: 'Tarrant', pop: '55,000', desc: 'centrally located near DFW Airport', neighborhoods: 'Midway, Bear Creek, and Downtown Euless' },
    { name: 'Bedford', slug: 'bedford', county: 'Tarrant', pop: '50,000', desc: 'a central HEB community with easy access everywhere', neighborhoods: 'Harwood, Bedford Heights, and Central Bedford' },
    { name: 'Hurst', slug: 'hurst', county: 'Tarrant', pop: '40,000', desc: 'a welcoming mid-cities community', neighborhoods: 'Bellaire, North Hurst, and Pipeline corridor' },
    { name: 'Grapevine', slug: 'grapevine', county: 'Tarrant', pop: '55,000', desc: 'the Christmas Capital of Texas', neighborhoods: 'Historic Downtown, Grapevine Lake, and Southlake border' },
    { name: 'Southlake', slug: 'southlake', county: 'Tarrant', pop: '32,000', desc: 'one of the wealthiest cities in Texas', neighborhoods: 'Southlake Town Square, Timarron, and Lonesome Dove' },
    { name: 'Colleyville', slug: 'colleyville', county: 'Tarrant', pop: '27,000', desc: 'an upscale residential community', neighborhoods: 'Montclair, Colleyville Downs, and Colleyville Center' },
];

const services = [
    { name: 'Drain Cleaning', slug: 'drain-cleaning', icon: '🚿', desc: 'clogged drain repair and hydro-jetting' },
    { name: 'Water Heater Services', slug: 'water-heaters', icon: '🔥', desc: 'tank and tankless water heater repair and installation' },
    { name: 'Sewer Line Repair', slug: 'sewer-repair', icon: '🏠', desc: 'trenchless sewer repair and replacement' },
    { name: 'Leak Detection', slug: 'leak-detection', icon: '💧', desc: 'slab leak detection and pipe repair' },
    { name: 'Emergency Plumbing', slug: 'emergency', icon: '🚨', desc: '24/7 emergency plumbing services' },
    { name: 'Toilet Repair', slug: 'toilet-repair', icon: '🚽', desc: 'toilet repair and installation' },
    { name: 'Garbage Disposal', slug: 'garbage-disposal', icon: '⚙️', desc: 'garbage disposal repair and installation' },
    { name: 'Gas Line Services', slug: 'gas-lines', icon: '🔧', desc: 'gas line repair and installation' },
];

function generateCityPage(city) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Lone Star Plumbing Pros provides expert plumbing services in ${city.name}, TX. 24/7 emergency service, drain cleaning, water heater repair, and more. Call (214) 555-1234.">
    <meta name="keywords" content="plumber ${city.name} TX, ${city.name} plumbing, emergency plumber ${city.name}, drain cleaning ${city.name}, water heater repair ${city.name}">
    <title>Plumber in ${city.name}, TX | Lone Star Plumbing Pros | 24/7 Service</title>
    <link rel="canonical" href="https://beta7-dallas-plumber.netlify.app/${city.slug}.html">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Plumber",
      "name": "Lone Star Plumbing Pros - ${city.name}",
      "telephone": "+1-214-555-1234",
      "email": "info@lonestarplumbingpros.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "${city.name}",
        "addressRegion": "TX",
        "addressCountry": "US"
      },
      "url": "https://beta7-dallas-plumber.netlify.app/${city.slug}.html",
      "areaServed": "${city.name}, TX",
      "priceRange": "$$",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
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
                <a href="index.html" class="logo">
                    <span class="logo-icon">⭐</span>
                    <div class="logo-text">
                        <span class="logo-name">Lone Star Plumbing Pros</span>
                        <span class="logo-tagline">Dallas-Fort Worth's Trusted Choice</span>
                    </div>
                </a>
                <nav class="nav">
                    <a href="index.html#services">Services</a>
                    <a href="index.html#about">About</a>
                    <a href="index.html#areas">Service Areas</a>
                    <a href="index.html#reviews">Reviews</a>
                    <a href="index.html#contact">Contact</a>
                </nav>
                <a href="tel:+12145551234" class="header-cta btn btn-secondary">
                    Call Now: (214) 555-1234
                </a>
                <button class="mobile-menu-btn" aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </header>

    <!-- Breadcrumb -->
    <div class="breadcrumb">
        <div class="container">
            <a href="index.html">Home</a> <span>›</span> <a href="index.html#areas">Service Areas</a> <span>›</span> ${city.name}, TX
        </div>
    </div>

    <!-- Location Hero -->
    <section class="location-hero">
        <div class="container">
            <h1>Expert Plumber in ${city.name}, Texas</h1>
            <p>Trusted plumbing services for ${city.name} homeowners and businesses. Available 24/7 for emergencies. Licensed, insured, and committed to excellence.</p>
            <div class="hero-buttons">
                <a href="tel:+12145551234" class="btn btn-primary btn-lg">
                    <span class="btn-icon">📞</span>
                    Call Now: (214) 555-1234
                </a>
                <a href="index.html#contact" class="btn btn-outline btn-lg">
                    <span class="btn-icon">📋</span>
                    Get Free Estimate
                </a>
            </div>
        </div>
    </section>

    <!-- Trust Bar -->
    <section class="trust-bar">
        <div class="container">
            <div class="trust-items">
                <div class="trust-item">
                    <div class="trust-icon">🏆</div>
                    <div class="trust-text">
                        <strong>BBB A+ Rating</strong>
                        <span>60+ Years Accredited</span>
                    </div>
                </div>
                <div class="trust-item">
                    <div class="trust-icon">⭐</div>
                    <div class="trust-text">
                        <strong>4.9 Star Rating</strong>
                        <span>2,847+ Reviews</span>
                    </div>
                </div>
                <div class="trust-item">
                    <div class="trust-icon">🛡️</div>
                    <div class="trust-text">
                        <strong>Fully Licensed</strong>
                        <span>TX Master Plumber</span>
                    </div>
                </div>
                <div class="trust-item">
                    <div class="trust-icon">⏰</div>
                    <div class="trust-text">
                        <strong>Fast Response</strong>
                        <span>60-Min Emergency</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Location Content -->
    <section class="location-content">
        <div class="container">
            <div class="about-grid">
                <div class="about-content">
                    <span class="section-tag">${city.name} Plumber</span>
                    <h2>Your Local Plumbing Experts in ${city.name}, TX</h2>
                    <p class="about-lead">Lone Star Plumbing Pros has been proudly serving ${city.name} and ${city.county} County for over 60 years, providing reliable plumbing solutions to homeowners and businesses throughout ${city.desc}.</p>
                    <p>With a population of ${city.pop}, ${city.name} residents deserve a plumbing company they can trust. Our team of licensed master plumbers knows the unique plumbing challenges that homes in ${city.neighborhoods} face—from older pipe systems to new construction needs.</p>
                    <p>Whether you have a clogged drain at 2 AM, need a new water heater installed, or are planning a bathroom remodel, our ${city.name} plumbing team is ready to help. We offer upfront pricing, same-day service, and a 100% satisfaction guarantee on every job.</p>
                    
                    <div class="about-features">
                        <div class="about-feature">
                            <span class="about-feature-icon">🚗</span>
                            <div>
                                <strong>Fast Local Service</strong>
                                <span>Quick response to ${city.name}</span>
                            </div>
                        </div>
                        <div class="about-feature">
                            <span class="about-feature-icon">🏠</span>
                            <div>
                                <strong>Local Knowledge</strong>
                                <span>We know ${city.name} plumbing</span>
                            </div>
                        </div>
                        <div class="about-feature">
                            <span class="about-feature-icon">💯</span>
                            <div>
                                <strong>Guaranteed Work</strong>
                                <span>100% satisfaction promise</span>
                            </div>
                        </div>
                        <div class="about-feature">
                            <span class="about-feature-icon">💵</span>
                            <div>
                                <strong>Fair Pricing</strong>
                                <span>No hidden fees</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about-stats">
                    <div class="stat-card">
                        <div class="stat-number">60+</div>
                        <div class="stat-label">Years Serving DFW</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">24/7</div>
                        <div class="stat-label">Emergency Service</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">4.9</div>
                        <div class="stat-label">Star Rating</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">100%</div>
                        <div class="stat-label">Satisfaction Guarantee</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="location-services services">
        <div class="container">
            <div class="section-header">
                <span class="section-tag">Our Services</span>
                <h2>Plumbing Services in ${city.name}, TX</h2>
                <p>Comprehensive plumbing solutions for ${city.name} homes and businesses</p>
            </div>
            <div class="services-grid">
${services.map(s => `                <div class="service-card">
                    <div class="service-icon">${s.icon}</div>
                    <h3>${s.name} in ${city.name}</h3>
                    <p>Professional ${s.desc} for ${city.name} residents. Our expert plumbers provide fast, reliable service with upfront pricing.</p>
                    <a href="index.html#contact" class="service-link">Get ${city.name} Service →</a>
                </div>`).join('\n')}
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="emergency-cta">
        <div class="container">
            <div class="emergency-content">
                <div class="emergency-text">
                    <h2>🚨 Need a Plumber in ${city.name}?</h2>
                    <p>Our ${city.name} plumbing team is available 24/7 for emergencies. Fast response, fair prices, guaranteed satisfaction.</p>
                </div>
                <a href="tel:+12145551234" class="btn btn-primary btn-lg">
                    Call Now: (214) 555-1234
                </a>
            </div>
        </div>
    </section>

    <!-- Areas Near This City -->
    <section class="areas">
        <div class="container">
            <div class="section-header section-header-light">
                <h2>Also Serving Areas Near ${city.name}</h2>
                <p>Fast service throughout ${city.county} County and the DFW metroplex</p>
            </div>
            <div class="areas-list" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 15px;">
${cities.filter(c => c.slug !== city.slug).slice(0, 12).map(c => `                <a href="${c.slug}.html" style="background: rgba(255,255,255,0.15); padding: 10px 20px; border-radius: 50px; color: white;">${c.name}</a>`).join('\n')}
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <div class="contact-grid">
                <div class="contact-info">
                    <span class="section-tag">Contact Us</span>
                    <h2>Get a Free Estimate in ${city.name}</h2>
                    <p>Ready to solve your plumbing problems? Contact our ${city.name} team today for a free, no-obligation estimate.</p>
                    
                    <div class="contact-methods">
                        <a href="tel:+12145551234" class="contact-method">
                            <div class="contact-method-icon">📞</div>
                            <div>
                                <strong>Call Us 24/7</strong>
                                <span>(214) 555-1234</span>
                            </div>
                        </a>
                        <a href="mailto:info@lonestarplumbingpros.com" class="contact-method">
                            <div class="contact-method-icon">📧</div>
                            <div>
                                <strong>Email Us</strong>
                                <span>info@lonestarplumbingpros.com</span>
                            </div>
                        </a>
                        <div class="contact-method">
                            <div class="contact-method-icon">📍</div>
                            <div>
                                <strong>Service Area</strong>
                                <span>${city.name}, TX and surrounding areas</span>
                            </div>
                        </div>
                    </div>
                </div>
                <form class="contact-form" action="#" method="POST">
                    <h3>Request ${city.name} Service</h3>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="name">Name *</label>
                            <input type="text" id="name" name="name" required placeholder="Your full name">
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone *</label>
                            <input type="tel" id="phone" name="phone" required placeholder="(214) 555-1234">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="service">Service Needed *</label>
                        <select id="service" name="service" required>
                            <option value="">Select a service...</option>
                            <option value="drain">Drain Cleaning</option>
                            <option value="water-heater">Water Heater Repair/Install</option>
                            <option value="leak">Leak Detection & Repair</option>
                            <option value="sewer">Sewer Line Service</option>
                            <option value="toilet">Toilet Repair</option>
                            <option value="emergency">Emergency Service</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="message">Describe Your Issue</label>
                        <textarea id="message" name="message" rows="4" placeholder="Tell us about your plumbing problem in ${city.name}..."></textarea>
                    </div>
                    <input type="hidden" name="city" value="${city.name}">
                    <button type="submit" class="btn btn-primary btn-full btn-lg">Request Free Estimate</button>
                </form>
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
                    <p>Family-owned and operated since 1959. Proudly serving ${city.name} and the Dallas-Fort Worth metroplex.</p>
                </div>
                <div class="footer-links">
                    <h4>Services</h4>
                    <a href="index.html#drain-cleaning">Drain Cleaning</a>
                    <a href="index.html#water-heaters">Water Heaters</a>
                    <a href="index.html#sewer-repair">Sewer Repair</a>
                    <a href="index.html#leak-detection">Leak Detection</a>
                    <a href="index.html#emergency">Emergency Service</a>
                </div>
                <div class="footer-links">
                    <h4>Service Areas</h4>
                    <a href="dallas.html">Dallas</a>
                    <a href="plano.html">Plano</a>
                    <a href="frisco.html">Frisco</a>
                    <a href="fort-worth.html">Fort Worth</a>
                    <a href="index.html#areas">View All Areas</a>
                </div>
                <div class="footer-contact">
                    <h4>Contact Us</h4>
                    <p>📞 <a href="tel:+12145551234">(214) 555-1234</a></p>
                    <p>📧 <a href="mailto:info@lonestarplumbingpros.com">info@lonestarplumbingpros.com</a></p>
                    <p class="footer-license">TX Master Plumber License #M-12345</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Lone Star Plumbing Pros. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>`;
}

// Generate all city pages
cities.forEach(city => {
    const html = generateCityPage(city);
    fs.writeFileSync(`${city.slug}.html`, html);
    console.log(`Generated: ${city.slug}.html`);
});

console.log(`\nGenerated ${cities.length} city pages!`);
