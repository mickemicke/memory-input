import { Button } from "./ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "./ui/input-otp";

export default function Input({ phoneNumber }: { phoneNumber: string }) {
  return (
    <div className="flex gap-4">
      <InputOTP maxLength={10} value={phoneNumber} disabled>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
        <InputOTPGroup>
          <InputOTPSlot index={6} />
          <InputOTPSlot index={7} />
        </InputOTPGroup>
        <InputOTPGroup>
          <InputOTPSlot index={8} />
          <InputOTPSlot index={9} />
        </InputOTPGroup>
      </InputOTP>
      <Button
        disabled={phoneNumber.length !== 10}
        onClick={() => alert(`Grattis! Ditt nummer är: ${phoneNumber}`)}
      >
        Submit
      </Button>
    </div>
  );
}
