'use client'

import { useState } from 'react'
import { Button } from "../ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
import { Progress } from "../ui/progress"
import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "../ui/alert"

export default function BinaryPredictionModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [prediction, setPrediction] = useState<'yes' | 'no' | null>(null)
  const [totalPredictions, setTotalPredictions] = useState(100)
  const [yesPercentage, setYesPercentage] = useState(65)
  const [hasSubmitted, setHasSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (prediction !== null) {
      // Here you would typically send the prediction to your backend
      console.log(`Prediction submitted: ${prediction}`)
      // Update percentages (this is a simplified calculation)
      if (prediction === 'yes') {
        setYesPercentage((yesPercentage * totalPredictions + 100) / (totalPredictions + 1))
      } else {
        setYesPercentage((yesPercentage * totalPredictions) / (totalPredictions + 1))
      }
      setTotalPredictions(totalPredictions + 1)
      setHasSubmitted(true)
    }
  }

  const resetPrediction = () => {
    setPrediction(null)
    setHasSubmitted(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      setIsOpen(open)
      if (!open) resetPrediction()
    }}>
      <DialogTrigger asChild>
        <Button variant="outline" className='text-black'>Open Prediction Market</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#161616] border-[#161616]">
        <DialogHeader>
          <DialogTitle className='text-[#40959D]'>Prediction Market</DialogTitle>
          <DialogDescription>
            Will Outcome.gg cross 20,000 messages?
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <label
              className={`flex flex-col items-center justify-between rounded-md border-2 ${
                prediction === 'yes' ? 'border-primary' : 'border-muted'
              } bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer`}
            >
              <input
                type="radio"
                name="prediction"
                value="yes"
                checked={prediction === 'yes'}
                onChange={() => setPrediction('yes')}
                className="sr-only"
              />
              <span className="text-2xl">👍</span>
              Yes
            </label>
            <label
              className={`flex flex-col items-center justify-between rounded-md border-2 ${
                prediction === 'no' ? 'border-primary' : 'border-muted'
              } bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer`}
            >
              <input
                type="radio"
                name="prediction"
                value="no"
                checked={prediction === 'no'}
                onChange={() => setPrediction('no')}
                className="sr-only"
              />
              <span className="text-2xl">👎</span>
              No
            </label>
          </div>
          <div className="grid gap-2">
            <span className="text-sm font-medium text-[#40959D]">Current Prediction</span>
            <Progress value={yesPercentage} className="w-full" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{yesPercentage.toFixed(1)}% Yes</span>
              <span>{totalPredictions} predictions</span>
            </div>
          </div>
          {hasSubmitted ? (
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Success!</AlertTitle>
              <AlertDescription>
                Your prediction has been submitted. Thank you for participating!
              </AlertDescription>
            </Alert>
          ) : (
            <div className="flex justify-end">
              <Button className='bg-zinc-800 hover:bg-zinc-700' type="submit" disabled={prediction === null}>
                Submit Prediction
              </Button>
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  )
}