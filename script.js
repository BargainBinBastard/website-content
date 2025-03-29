document.addEventListener('DOMContentLoaded', function() {
    // Make the book now button more interactive
    const bookNowBtn = document.getElementById('book-now');
    
    bookNowBtn.addEventListener('click', function() {
        // Create a confirmation that looks like a psychic vision
        const confirmation = document.createElement('div');
        confirmation.innerHTML = `
            <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                      background: rgba(0,0,0,0.8); z-index: 1000; display: flex; 
                      justify-content: center; align-items: center; flex-direction: column;">
                <div style="background: linear-gradient(to bottom, #ff00ff, #0000ff); 
                            padding: 30px; border: 5px dotted #ffff00; 
                            text-align: center; max-width: 80%;">
                    <h2 style="color: #ffff00; text-shadow: 0 0 10px #00ffff;">YOUR PSYCHIC SURGERY HAS BEEN SCHEDULED!</h2>
                    <p style="color: #ffffff; font-size: 1.2em;">
                        Dr. Zoltan will psychically connect with you at the time of your choosing.
                        Please have your credit card ready for the remote payment extraction.
                    </p>
                    <button onclick="this.parentElement.parentElement.remove()" 
                            style="background: #ffff00; color: #000; border: none; 
                                   padding: 10px 20px; margin-top: 20px; font-weight: bold;">
                        I ACCEPT THESE TERMS
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(confirmation);
    });

    // Add random sparkles when mouse moves
    document.addEventListener('mousemove', function(e) {
        if (Math.random() > 0.7) {
            const sparkle = document.createElement('div');
            sparkle.style.position = 'fixed';
            sparkle.style.left = e.pageX + 'px';
            sparkle.style.top = e.pageY + 'px';
            sparkle.style.width = '10px';
            sparkle.style.height = '10px';
            sparkle.style.backgroundColor = getRandomColor();
            sparkle.style.borderRadius = '50%';
            sparkle.style.boxShadow = `0 0 10px 2px ${getRandomColor()}`;
            sparkle.style.pointerEvents = 'none';
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        }
    });

    function getRandomColor() {
        const colors = ['#ff00ff', '#ffff00', '#00ffff', '#ff0000', '#00ff00', '#0000ff'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
});