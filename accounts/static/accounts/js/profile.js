const form = document.querySelector('#follow-form')
const csrftoken =  document.querySelector('[name=csrfmiddlewaretoken]').value
form.addEventListener('submit', function (event) {
  event.preventDefault()
  const userId = event.target.dataset.userId
  axios({
    method:'POST',
    url: `/accounts/follow/${userId}/`,
    headers: {'X-CSRFToken':csrftoken,}
  })
  .then((response) => {
    const isFollowed = response.data.is_followed
    const followBtn = document.querySelector('#follow-form > input[type=submit]')
    if (isFollowed === true) {
      followBtn.value = '언팔로우'
    } else {
      followBtn.value = '팔로우'
    }
    const followingsCountTag = document.querySelector('#followings-count')
    const followersCountTag = document.querySelector('#followers-count')
    const followingsCountData = response.data.followings_count
    const followersCountData = response.data.followers_count
    followingsCountTag.textContent = followingsCountData
    followersCountTag.textContent = followersCountData
  })
})