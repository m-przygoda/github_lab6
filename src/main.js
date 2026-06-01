import dayjs from 'dayjs';

const fetchArticles = async (rs) => {
 try {
    const response = await fetch(
        `https://piwvqmsaiayahfjipzet.supabase.co/rest/v1/article?select=*&order=${rs}`, {
        headers: {
            apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpd3ZxbXNhaWF5YWhmamlwemV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3MTc3MzQsImV4cCI6MjA5NTI5MzczNH0.yy6TuHrE30QWtyzfbG0P4OZZ0PYttm4wQBd15KrZvxg",
        },
    });
    const data = await response.json();
    console.log(data);
    return data;
 } catch (error) {
 console.error('Fetch error:', error);
 }
};

const displayArticles = async (rs) => {
    const artykuly = await fetchArticles(rs);
    const wyswietlanie = document.getElementById('wyswietlanie');
    wyswietlanie.innerHTML="";
    artykuly.forEach(artykul => {
        const wa = document.createElement('div');
        wa.innerHTML = `
        <h2 class="text-2xl text-purple-700">${artykul.title}</h2>
        <h3 class="text-xl text-purple-500">${artykul.subtitle}</h3>
        <h4 class="text-lg text-purple-500">${artykul.author}</h4>
        <h5 class="text-xs text-purple-500">${dayjs(artykul.created_at).format("DD-MM-YYYY")}</h5>
        <p class="text-xs text-purple-500">${artykul.content}</p>
        `;
        wyswietlanie.appendChild(wa);
    });
};

const sort = document.getElementById('sort');
sort.addEventListener('change', (event) => {
    displayArticles(event.target.value);
})

displayArticles(sort.value);

const formularz = document.getElementById('formularz')
formularz.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
    title: document.getElementById('tytul').value,
    subtitle: document.getElementById('podtytul').value,
    author: document.getElementById('autor').value,
    content: document.getElementById('tresc').value,
    created_at: dayjs(document.getElementById('data').value)
    };
    const createNewArticle = async (data) => {
 try {
    const response = await fetch("https://piwvqmsaiayahfjipzet.supabase.co/rest/v1/article?select=*", {
        method: 'POST',
        headers: {
            apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpd3ZxbXNhaWF5YWhmamlwemV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3MTc3MzQsImV4cCI6MjA5NTI5MzczNH0.yy6TuHrE30QWtyzfbG0P4OZZ0PYttm4wQBd15KrZvxg",
            'Content-Type' : 'application/json' ,
        },
        body: JSON.stringify(data),
    });

    if (response.status !== 201) {
        throw new Error(`Status: ${response.status}`);
     }
 } catch (error) {
 console.error('Fetch error:' , error);
    }
    };
    createNewArticle(data);
    }
)


