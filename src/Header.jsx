export function Header() {
  return (
    <nav class="navbar navbar-expand-lg" style={{ backgroundColor: "#81de59" }}>
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Mendel's Blog
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#posts-index">
                All Posts
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#posts-new">
                New Post
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
