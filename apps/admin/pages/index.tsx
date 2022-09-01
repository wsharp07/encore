import { Label, TextInput, Checkbox, Button } from 'flowbite-react';

export function Index() {
  return (
    <div>
      <h1 className="ml-10 my-10 text-lg font-bold underline">
        Encore Admin Portal
      </h1>
      <div className="grid grid-cols-6 place-content-center">
        <form className="flex flex-col gap-4 ml-10">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder=""
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required={true} />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default Index;
