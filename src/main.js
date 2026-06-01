import dayjs from 'dayjs';

const fetchArticles = async () => {
 try {
    const response = await fetch(
        "https://piwvqmsaiayahfjipzet.supabase.co/rest/v1/article?select=*", {
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

const displayArticles = async () => {
    const artykuly = await fetchArticles();
    const wyswietlanie = document.getElementById('wyswietlanie');
    artykuly.forEach(artykul => {
        const wa = document.createElement('div');
        wa.innerHTML = `
        <h2>${artykul.title}</h2>
        <h3>${artykul.subtitle}</h3>
        <h4>${artykul.author}</h4>
        <h5>${dayjs(artykul.created_at).format("DD-MM-YYYY")}</h5>
        <p>${artykul.content}</p>
        `;
        wyswietlanie.appendChild(wa);
    });
};

displayArticles();

const formularz = document.getElementById('formularz')
formularz.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
    title: document.getElementById('tytul').value,
    subtitle: document.getElementById('podtytul').value,
    author: document.getElementById('autor').value,
    content: document.getElementById('tresc').value
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


