import { SignIn } from '@clerk/nextjs'

type Props = {}

const SignInPage = (props: Props) => {
  return (
    <main>
      <SignIn />
    </main>
  )
}

export default SignInPage