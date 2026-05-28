const fetchArticles = async () => {
 try {
 const response = await fetch(
 "https://piwvqmsaiayahfjipzet.supabase.co/rest/v1/", {
 headers: {
 apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpd3ZxbXNhaWF5YWhmamlwemV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3MTc3MzQsImV4cCI6MjA5NTI5MzczNH0.yy6TuHrE30QWtyzfbG0P4OZZ0PYttm4wQBd15KrZvxg",
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
        <h1>${artykul.title}</h1>
        <h2>${artykul.subtitle}</h2>
        <h3>${artykul.author}</h3>
        <h4>${artykul.created_at}</h4>
        <p>${artykul.content}</p>
        `;
        wyswietlanie.appendChild(wa);
    });
};
displayArticles();