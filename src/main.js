const response = fetch('https://piwvqmsaiayahfjipzet.supabase.co/rest/v1/article?select=*', {
 headers: {
 apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpd3ZxbXNhaWF5YWhmamlwemV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3MTc3MzQsImV4cCI6MjA5NTI5MzczNH0.yy6TuHrE30QWtyzfbG0P4OZZ0PYttm4wQBd15KrZvxg',
 },
});
console.log(response);
