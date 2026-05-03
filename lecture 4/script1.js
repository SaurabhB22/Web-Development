document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.querySelector('.large-icon');
    const progressBar = document.querySelector('.progress-slider');
    const volumeSlider = document.querySelector('.volume-slider');
    const songTitle = document.querySelector('.song-title');
    const songArtist = document.querySelector('.song-artist');

    let isPlaying = false;
    let currentVolume = 100;

    // --- 1. Play/Pause Functionality ---
    playButton.addEventListener('click', () => {
        isPlaying = !isPlaying;
        if (isPlaying) {
            playButton.classList.remove('fa-play-circle');
            playButton.classList.add('fa-pause-circle');
            // In a real app: music.play()
            alert(`Now playing: ${songTitle.textContent} by ${songArtist.textContent}`);
        } else {
            playButton.classList.remove('fa-pause-circle');
            playButton.classList.add('fa-play-circle');
            // In a real app: music.pause()
            alert('Paused.');
        }
    });

    // --- 2. Progress Bar Simulation (Visual only) ---
    progressBar.addEventListener('input', (e) => {
        const value = e.target.value;
        // Visually update the progress bar background as the user drags
        e.target.style.background = `linear-gradient(to right, var(--spotify-green) 0%, var(--spotify-green) ${value}%, #535353 ${value}%, #535353 100%)`;
    });

    // --- 3. Volume Control ---
    volumeSlider.addEventListener('input', (e) => {
        currentVolume = e.target.value;
        const volumeIcon = document.querySelector('.volume-control i');

        // Update icon based on volume level
        if (currentVolume == 0) {
            volumeIcon.className = 'fas fa-volume-mute';
        } else if (currentVolume < 50) {
            volumeIcon.className = 'fas fa-volume-down';
        } else {
            volumeIcon.className = 'fas fa-volume-up';
        }
        
        // Visually update the volume bar background
        e.target.style.background = `linear-gradient(to right, var(--text-white) 0%, var(--text-white) ${currentVolume}%, #535353 ${currentVolume}%, #535353 100%)`;
        // In a real app: music.volume = currentVolume / 100
    });

    // Initialize the volume slider background
    volumeSlider.dispatchEvent(new Event('input'));
    
    // --- 4. Card Click Interactivity (To simulate selecting an album) ---
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            // Update the player bar with dummy song info
            songTitle.textContent = card.querySelector('h4').textContent;
            songArtist.textContent = 'Various Artists';
            
            // Auto-play simulation
            if (!isPlaying) {
                 playButton.click();
            }
        });
    });
});