
const LoginPage = () => {
  return (
    <>
      <h2>Login Page</h2>
      <main
          className="flex min-h-screen items-center
          justify-center bg-deepDark py-8">
      <div
          className="max-w-[1368px] flex-1">
        <div
          className="container grid items-center
          gap-8 lg:grid-cols-2">
              <div>
            <img
              className="mb-12 max-w-full max-lg:hidden"
              src="/assets/images/auth_illustration.png"
              alt="auth_illustration"
            />
            <div>
              <h1 className="mb-3 text-4xl font-bold lg:text-[40px]">Facehook</h1>
              <p className="max-w-[452px] text-gray-600/95 lg:text-lg">
                Create a social media app with features like, showing the post,
                post details, reactions, comments and profile.
              </p>
            </div>
          </div>
            </div>
        </div>
      </main>
    </>
  )
}

export default LoginPage