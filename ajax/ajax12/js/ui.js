class UI {
	constructor() {
		this.profile = document.getElementById('profile');
	}
	showProfile(user) {
		console.log(user);
		this.profile.innerHTML=` 
		<div class="card card-body mb-3> 
			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid mb-2" src="${user.avatar_url}">
					<a href="${user.html_url}" target="_blank" class="btn 
					btn-primary btn-block"></a>
				</div>
				<div class="col-md-9">
					<span class="badge badge-primary">Public Repos : ${user.public_repos} </span>
					<span class="badge badge-danger">Public gistes : ${user.public_gists} </span>
					<span class="badge badge-success">Public Followers : ${user.followers} </span>
					<br>
					<br>
					<ul class="list-group">
						<li class="list-group-items">company : ${user.company} </li>
						<li class="list-group-items">website/blog : ${user.blog} </li>
						<li class="list-group-items">Location : ${user.location} </li>
						<li class="list-group-items">Member since : ${user.created_at} </li>
					</ul>
				</div>
			</div>
		</div>
		<h3 class="page-heading mb-4">New Repos</h3>
		<div id="repo">

		</div>
		`;
	}
}