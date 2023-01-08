axios.get('https://api.github.com/repos/fabianskutta/personal-site/commits?per_page=1')
    .then(res => {
    let data = res.data[0];
    document.getElementById('commit').innerHTML = data.sha.substr(0, 7);
    document.getElementById('commit-link').href = data.html_url;
    });