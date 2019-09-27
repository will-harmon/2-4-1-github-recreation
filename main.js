$(function() {

  const BASE_URL = 'https://api.github.com/users/will-harmon';
  const ORGS_URL = 'https://api.github.com/users/will-harmon/orgs';
  const REPOS_URL = 'https://api.github.com/users/will-harmon/repos';
  const USERNAME = 'will-harmon';
  const CLIENT_ID = 'a0d1fd0e40189d9437d2';
  const CLIENT_SECRET = 'a0d1fd0e40189d9437d2';

//Profile Data Pull
  let getProfileData = $.ajax({
    method: "GET",
    url: "https://api.github.com/users/will-harmon",
    dataType: "jsonp",
    data: {
      CLIENT_ID: "a0d1fd0e40189d9437d2",
      CLIENT_SECRET: "bb8cd30ced3f39c4a5fcf1fbf0e7b6c3ac04eec6"
    }
  });

  let createProfileHTML = (res) => {
    console.log('res', res);

    let source = $('#profile-template').html();
    // console.log(source);
    let template = Handlebars.compile(source);
    // console.log(template);
    // you need to update context so it will contain the data you get back from the server
    let context = res.data;
    let html = template(context);
    // console.log(html);
    //taking html that handlebars created for me and is putting it .profile-data
    $('.profile-data').html(html);
  }

  getProfileData.done(createProfileHTML)







//repositories
  let getRepoData = $.ajax({
    method: "GET",
    url: "https://api.github.com/users/will-harmon/repos",
    dataType: "jsonp",
    data: {
      CLIENT_ID: "a0d1fd0e40189d9437d2",
      CLIENT_SECRET: "bb8cd30ced3f39c4a5fcf1fbf0e7b6c3ac04eec6"
    }
  });

  let createRepoHTML = (res) => {
    console.log('res', res);

  let source = $('#repositories-template').html();
  let template = Handlebars.compile(source);
  let context = res.data;
  console.log('context', context);
  // context.updated_at = moment(context.updated_at).format('MMMM Do YYYY, h:mm:ss a');
  let html = template({repos:context});

  $('.repositories-data').html(html);
}

  getRepoData.done(createRepoHTML)

  //organizations
  let getOrgData = $.ajax({
    method: "GET",
    url: "https://api.github.com/users/will-harmon/orgs",
    dataType: "jsonp",
    data: {
      CLIENT_ID: "a0d1fd0e40189d9437d2",
      CLIENT_SECRET: "bb8cd30ced3f39c4a5fcf1fbf0e7b6c3ac04eec6"
    }
  });

  let createOrgHTML = (res) => {
    console.log('res', res);

  let source = $('#organizations-template').html();
  let template = Handlebars.compile(source);
  let context = res.data;
  let html = template({orgs:context});

  $('.organizations-data').html(html);
}

  getOrgData.done(createOrgHTML)








});
