document.addEventListener("DOMContentLoaded", () => {
    
    // --- AUTO-CREATE CONTAINERS ---
    let headerContainer = document.getElementById('header');
    let footerContainer = document.getElementById('footer');

    if (!headerContainer) {
        headerContainer = document.createElement('div');
        headerContainer.id = 'header';
        document.body.prepend(headerContainer); 
    }

    if (!footerContainer) {
        footerContainer = document.createElement('div');
        footerContainer.id = 'footer';
        document.body.appendChild(footerContainer); 
    }

    // --- UDAYANATH SCHOOL HEADER HTML ---
    const headerHTML = `
    <div style="background: #f1f5f9; border-bottom: 1px solid #cbd5e1; padding: 6px 20px; font-size: 0.8rem; color: #1e293b; font-family: sans-serif;">
        <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: flex-end; gap: 25px;">
            <span>📧udayanathpschool@gmail.com</span>
            <span>📞 +91 8280120734</span>
        </div>
    </div>

    <nav style="background: #002147; color: white; padding: 1rem 20px; border-bottom: 4px solid #D4AF37; font-family: 'Poppins', sans-serif;">
        <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center; gap: 15px;">
                <img src="gallery/logo.jpeg" alt="UPS Logo" style="height: 60px; width: auto; border-radius: 4px;">
                <div>
                    <h1 style="color: #D4AF37; font-size: 1.5rem; margin: 0; letter-spacing: 1px; font-weight: 700;">UDAYANATH</h1>
                    <p style="font-size: 0.75rem; margin: 0; opacity: 0.9; text-transform: uppercase; letter-spacing: 2px;">Public School | Nimapara</p>
                </div>
            </div>
            <ul style="display: flex; list-style: none; gap: 25px; margin: 0; font-weight: 600; font-size: 0.9rem;">
                <li><a href="index.html" style="color: white; text-decoration: none; transition: 0.3s;">Home</a></li>
                <li><a href="about.html" style="color: white; text-decoration: none; transition: 0.3s;">About</a></li>
                <li><a href="facilities.html" style="color: white; text-decoration: none; transition: 0.3s;">Facilities</a></li>
                                <li><a href="mandatory.html" style="color: white; text-decoration: none; transition: 0.3s;">Mandatory Disclosure</a></li>

                <li><a href="gallery.html" style="color: white; text-decoration: none; transition: 0.3s;">Gallery</a></li>
                <li><a href="admission.html" style="color: white; text-decoration: none; transition: 0.3s;">Admission</a></li>
                <li><a href="contact.html" style="color: white; text-decoration: none; transition: 0.3s;">Contact</a></li>
            </ul>
        </div>
    </nav>`;

    // --- UDAYANATH SCHOOL FOOTER HTML ---
    const footerHTML = `
    <footer style="background: #00152e; color: white; padding: 50px 20px 20px; margin-top: 60px; border-top: 5px solid #D4AF37; font-family: 'Poppins', sans-serif;">
        <div style="max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px;">
            
            <div>
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 15px;">
                    <img src="gallery/logo.jpeg" alt="Logo" style="height: 45px;">
                    <h3 style="color: #D4AF37; margin: 0; font-size: 1.2rem;">UPS NIMAPARA</h3>
                </div>
                <p style="font-size: 0.85rem; opacity: 0.7; line-height: 1.6;">
                    Providing quality education and fostering character in Nimapara, Puri. Dedicated to the holistic growth of every student.
                </p>
            </div>

            <div>
                <h4 style="color: #D4AF37; margin-bottom: 20px; border-bottom: 2px solid rgba(212,175,55,0.2); padding-bottom: 5px; display: inline-block;">Quick Links</h4>
                <ul style="list-style: none; padding: 0; font-size: 0.85rem; line-height: 2.2;">
                   <li><a href="index.html" style="color: white; text-decoration: none; transition: 0.3s;">Home</a></li>
                <li><a href="about.html" style="color: white; text-decoration: none; transition: 0.3s;">About</a></li>
                <li><a href="facilities.html" style="color: white; text-decoration: none; transition: 0.3s;">Facilities</a></li>
                                <li><a href="mandatory.html" style="color: white; text-decoration: none; transition: 0.3s;">Mandatory Disclosure</a></li>

                <li><a href="gallery.html" style="color: white; text-decoration: none; transition: 0.3s;">Gallery</a></li>
                <li><a href="admission.html" style="color: white; text-decoration: none; transition: 0.3s;">Admission</a></li>
                               </ul>
            </div>

            <div>
                <h4 style="color: #D4AF37; margin-bottom: 20px; border-bottom: 2px solid rgba(212,175,55,0.2); padding-bottom: 5px; display: inline-block;">Connect With Us</h4>
                <p style="font-size: 0.85rem; opacity: 0.8; line-height: 1.8;">
                    📍 Nimapara, Puri, Odisha - 752106<br>
                    📞 +91 8280120734<br>
                    📧 udayanathpschool@gmail.com
                </p>
            </div>
        </div>

        <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); font-size: 0.75rem; opacity: 0.6;">
            © 2026 Udayanath Public School. All Rights Reserved. | Designed with Excellence.
        </div>
    </footer>`;

    // --- INJECT CONTENT ---
    headerContainer.innerHTML = headerHTML;
    footerContainer.innerHTML = footerHTML;
});
