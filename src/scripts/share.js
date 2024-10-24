import { tasksSection } from "./add.js";

export function openSharePopUp(taskContainer) {
    const existingPopUp = document.querySelector('.pop-up-share');
    if (existingPopUp) {
        existingPopUp.remove();
    }

    const popUpShareHTML = `
        <div class="pop-up-share">
            <div class="pop-up-container-share">
                <div class="pop-up-share-buttons">
                    <button id="copy"><img src="/src/img/share_box/copy_icon.svg"></button>
                    <button id="vk"><img src="/src/img/share_box/vk_icon.svg"></button>
                    <button id="telegram"><img src="/src/img/share_box/telegram_icon.svg"></button>
                    <button id="whatsup"><img src="/src/img/share_box/whatsup_icon.svg"></button>
                    <button id="facebook"><img src="/src/img/share_box/facebook_icon.svg"></button>
                </div>
            </div>
        </div>`;

    tasksSection.insertAdjacentHTML('afterend', popUpShareHTML);

    const popUpShare = document.querySelector('.pop-up-share');

    document.querySelector('#copy').addEventListener('click', function() {
        const textToCopy = `${taskContainer.querySelector('h1').textContent} - ${taskContainer.querySelector('p').textContent}`;
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert('Copied to clipboard!');
            popUpShare.remove();
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            popUpShare.remove();
        });
    });

    document.querySelector('#vk').addEventListener('click', function() {
        shareToSocial('vk', taskContainer);
        popUpShare.remove();
    });

    document.querySelector('#telegram').addEventListener('click', function() {
        shareToSocial('telegram', taskContainer);
        popUpShare.remove();
    });

    document.querySelector('#whatsup').addEventListener('click', function() {
        shareToSocial('whatsup', taskContainer);
        popUpShare.remove();
    });

    document.querySelector('#facebook').addEventListener('click', function() {
        shareToSocial('facebook', taskContainer);
        popUpShare.remove();
    });
}

function shareToSocial(platform, taskContainer) {
    const title = taskContainer.querySelector('h1').textContent;
    const about = taskContainer.querySelector('p').textContent;
    const textToShare = `${title} - ${about}`;

    let url = '';

    switch(platform) {
        case 'vk':
            url = `https://vk.com/share.php?text=${encodeURIComponent(textToShare)}`;
            break;
        case 'telegram':
            url = `https://t.me/share/url?text=${encodeURIComponent(textToShare)}`;
            break;
        case 'whatsup':
            url = `https://wa.me/?text=${encodeURIComponent(textToShare)}`;
            break;
        case 'facebook':
            url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(textToShare)}`;
            break;
    }

    window.open(url, '_blank');
    popUpShare.remove();
}
