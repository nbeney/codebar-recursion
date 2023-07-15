# codebar-recursion

* [Factorial](#factorial)
* [Reverse](#reverse)
* [Convert](#convert)
* [Fibonacci](#fibonacci)
* [Longest](#longest)
* [Sum](#sum)
* [Expression](#expression)

## Factorial

```mermaid
sequenceDiagram
    participant main
    participant fact1 as fact
    participant fact2 as fact
    participant fact3 as fact
    participant fact4 as fact
    participant fact5 as fact

    main->>+fact1: 5
        fact1->>+fact2: 4
            fact2->>+fact3: 3
                fact3->>+fact4: 2
                    fact4->>+fact5: 1
                    fact5-->>-fact4: 1
                fact4-->>-fact3: 2 = 2 * 1
            fact3-->>-fact2: 6 = 3 * 2
        fact2-->>-fact1: 24 = 4 * 6
    fact1-->>-main: 120 = 5 * 24
```
### Python [:arrow_forward:](https://pythontutor.com/visualize.html#code=def%20fact%28n%3A%20int%29%20-%3E%20int%3A%0A%20%20if%20n%20%3C%3D%201%3A%0A%20%20%20%20return%201%0A%20%20else%3A%0A%20%20%20%20return%20n%20*%20fact%28n%20-%201%29%0A%0Aprint%28fact%285%29%29&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false)

```python
def fact(n: int) -> int:
  if n <= 1:
    return 1
  else:
    return n * fact(n - 1)

print(fact(5))
```

### Java [:arrow_forward:](https://pythontutor.com/visualize.html#code=public%20class%20Factorial%20%7B%0A%20%20public%20static%20void%20main%28String%5B%5D%20args%29%20%7B%0A%20%20%20%20System.out.println%28fact%285%29%29%3B%0A%20%20%7D%0A%0A%20%20public%20static%20int%20fact%28int%20n%29%20%7B%0A%20%20%20%20if%20%28n%20%3C%3D%201%29%20%7B%0A%20%20%20%20%20%20return%201%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20return%20n%20*%20fact%28n%20-%201%29%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=java&rawInputLstJSON=%5B%5D&textReferences=false)

```java
public class Factorial {
  public static void main(String[] args) {
    System.out.println(fact(5));
  }

  public static int fact(int n) {
    if (n <= 1) {
      return 1;
    } else {
      return n * fact(n - 1);
    }
  }
}
```

## Reverse

```mermaid
sequenceDiagram
    participant main
    participant reverse1 as reverse
    participant reverse2 as reverse
    participant reverse3 as reverse
    participant reverse4 as reverse

    main->>+reverse1: "STEP"
        reverse1->>+reverse2: "STE"
            reverse2->>+reverse3: "ST"
                reverse3->>+reverse4: "S"
                reverse4-->>-reverse3: "S"
            reverse3->>-reverse2: "TS" = "T" + "S"
        reverse2-->>-reverse1: "ETS" = "E" + "TS"
    reverse1-->>-main: "PETS" = "P" + "ETS"
```

### Python [:arrow_forward:](https://pythontutor.com/visualize.html#code=def%20reverse%28text%3A%20str%29%20-%3E%20str%3A%0A%20%20if%20len%28text%29%20%3C%3D%201%3A%0A%20%20%20%20return%20text%0A%20%20else%3A%0A%20%20%20%20return%20text%5B-1%5D%20%2B%20reverse%28text%5B0%3A-1%5D%29%0A%0Aprint%28reverse%28%22STEP%22%29%29&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false)

```python
def reverse(text: str) -> str:
  if len(text) <= 1:
    return text
  else:
    return text[-1] + reverse(text[0:-1])

print(reverse("STEP"))
```

### Java [:arrow_forward:](https://pythontutor.com/visualize.html#code=public%20class%20Reverse%20%7B%0A%20%20public%20static%20void%20main%28String%5B%5D%20args%29%20%7B%0A%20%20%20%20System.out.println%28reverse%28%22STEP%22%29%29%3B%0A%20%20%7D%0A%0A%20%20public%20static%20String%20reverse%28String%20text%29%20%7B%0A%20%20%20%20int%20len%20%3D%20text.length%28%29%3B%0A%20%20%20%20if%20%28len%20%3C%3D%201%29%20%7B%0A%20%20%20%20%20%20return%20text%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20return%20text.charAt%28len%20-%201%29%20%2B%20reverse%28text.substring%280,%20len%20-%201%29%29%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=java&rawInputLstJSON=%5B%5D&textReferences=false)

```java
public class Reverse {
  public static void main(String[] args) {
    System.out.println(reverse("STEP"));
  }

  public static String reverse(String text) {
    int len = text.length();
    if (len <= 1) {
      return text;
    } else {
      return text.charAt(len - 1) + reverse(text.substring(0, len - 1));
    }
  }
}
```

## Convert

```mermaid
sequenceDiagram
    participant main
    participant convert1 as convert
    participant convert2 as convert
    participant convert3 as convert
    participant convert4 as convert

    main->>+convert1: 1234
        convert1->>+convert2: 123
            convert2->>+convert3: 12
                convert3->>+convert4: 1
                convert4-->>-convert3: "1"
            convert3->>-convert2: "12" = "1" + "2"
        convert2-->>-convert1: "123" = "12" + "3"
    convert1-->>-main: "1234" = "123" + "4"
```

### Python [:arrow_forward:](https://pythontutor.com/visualize.html#code=def%20convert%28number%3A%20int%29%20-%3E%20str%3A%0A%20%20if%20number%20%3C%2010%3A%0A%20%20%20%20return%20str%28number%29%0A%20%20else%3A%0A%20%20%20%20return%20convert%28number%20//%2010%29%20%2B%20str%28number%20%25%2010%29%0A%0Aprint%28convert%281234%29%29&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false)

```python
def convert(number: int) -> str:
  if number < 10:
    return str(number)
  else:
    return convert(number // 10) + str(number % 10)

print(convert(1234))
```

### Java [:arrow_forward:](https://pythontutor.com/visualize.html#code=public%20class%20Convert%20%7B%0A%20%20public%20static%20void%20main%28String%5B%5D%20args%29%20%7B%0A%20%20%20%20System.out.println%28convert%281234%29%29%3B%0A%20%20%7D%0A%0A%20%20public%20static%20String%20convert%28int%20number%29%20%7B%0A%20%20%20%20if%20%28number%20%3C%2010%29%20%7B%0A%20%20%20%20%20%20return%20%220123456789%22.charAt%28number%29%20%2B%20%22%22%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20return%20convert%28number%20/%2010%29%20%2B%20%28number%20%25%2010%29%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=java&rawInputLstJSON=%5B%5D&textReferences=false)

```java
public class Convert {
  public static void main(String[] args) {
    System.out.println(convert(1234));
  }

  public static String convert(int number) {
    if (number < 10) {
      return "0123456789".charAt(number) + "";
    } else {
      return convert(number / 10) + (number % 10);
    }
  }
}
```

## Fibonacci

```mermaid
sequenceDiagram
    participant main
    participant fib1 as fib
    participant fib2 as fib
    participant fib3 as fib
    participant fib4 as fib

    main->>+fib1: 4
        fib1->>+fib2: 2
            fib2->>+fib3: 0
            fib3-->>-fib2: 0

            fib2->>+fib3: 1
            fib3-->>-fib2: 1
        fib2-->>-fib1: 1 = 0 + 1

        fib1->>+fib2: 3
            fib2->>+fib3: 1
            fib3-->>-fib2: 1

            fib2->>+fib3: 2
                fib3->>+fib4: 0
                fib4-->>-fib3: 0

                fib3->>+fib4: 1
                fib4-->>-fib3: 1
            fib3-->>-fib2: 1 = 0 + 1
        fib2-->>-fib1: 2 = 1 + 1
    fib1-->>-main: 3 = 1 + 2
```

### Python [:arrow_forward:](https://pythontutor.com/visualize.html#code=def%20fib%28n%3A%20int%29%20-%3E%20int%3A%0A%20%20%20%20if%20n%20%3C%202%3A%0A%20%20%20%20%20%20%20%20return%20n%0A%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20return%20fib%28n%20-%202%29%20%2B%20fib%28n%20-%201%29%0A%0Aprint%28fib%284%29%29&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false)

```python
def fib(n: int) -> int:
    if n < 2:
        return n
    else:
        return fib(n - 2) + fib(n - 1)

print(fib(4))
```

### Java [:arrow_forward:](https://pythontutor.com/visualize.html#code=public%20class%20Fibonacci%20%7B%0A%20%20public%20static%20void%20main%28String%5B%5D%20args%29%20%7B%0A%20%20%20%20System.out.println%28fib%284%29%29%3B%0A%20%20%7D%0A%0A%20%20public%20static%20int%20fib%28int%20n%29%20%7B%0A%20%20%20%20if%20%28n%20%3C%202%29%20%7B%0A%20%20%20%20%20%20return%20n%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20return%20fib%28n%20-%202%29%20%2B%20fib%28n%20-%201%29%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=java&rawInputLstJSON=%5B%5D&textReferences=false)

```java
public class Fibonacci {
  public static void main(String[] args) {
    System.out.println(fib(4));
  }

  public static int fib(int n) {
    if (n < 2) {
      return n;
    } else {
      return fib(n - 2) + fib(n - 1);
    }
  }
}
```

## Longest

```mermaid
sequenceDiagram
    participant main
    participant longest1 as longest
    participant longest2 as longest
    participant longest3 as longest

    main->>+longest1: ["red", "green", "blue"]
    longest1->>+longest2: ["green", "blue"]
    longest2->>+longest3: ["blue"]
    longest3-->>-longest2: "blue"
    longest2-->>-longest1: "green" because "green" is longer than "blue"
    longest1-->>-main: "green" because "red" is not longer than "green"
```

### Python [:arrow_forward:](https://pythontutor.com/visualize.html#code=def%20longest%28words%3A%20list%29%20-%3E%20str%3A%0A%20%20%20%20if%20len%28words%29%20%3D%3D%201%3A%0A%20%20%20%20%20%20%20%20return%20words%5B0%5D%0A%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20longest_of_rest%20%3D%20longest%28words%5B1%3A%5D%29%0A%20%20%20%20%20%20%20%20if%20len%28words%5B0%5D%29%20%3E%20len%28longest_of_rest%29%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20words%5B0%5D%0A%20%20%20%20%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20longest_of_rest%0A%0Aprint%28longest%28%5B%22red%22,%20%22green%22,%20%22blue%22%5D%29%29&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false)

```python
def longest(words: list[str]) -> str:
    if len(words) == 1:
        return words[0]
    else:
        longest_of_rest = longest(words[1:])
        if len(words[0]) > len(longest_of_rest):
            return words[0]
        else:
            return longest_of_rest

print(longest(["red", "green", "blue"]))
```

### Java [:arrow_forward:](https://pythontutor.com/visualize.html#code=import%20java.util.Arrays%3B%0A%0Apublic%20class%20Longest%20%7B%0A%20%20public%20static%20void%20main%28String%5B%5D%20args%29%20%7B%0A%20%20%20%20System.out.println%28longest%28new%20String%5B%5D%20%7B%22red%22,%20%22green%22,%20%22blue%22%7D%29%29%3B%0A%20%20%7D%0A%0A%20%20public%20static%20String%20longest%28String%5B%5D%20words%29%20%7B%0A%20%20%20%20if%20%28words.length%20%3D%3D%201%29%20%7B%0A%20%20%20%20%20%20return%20words%5B0%5D%3B%0A%20%20%20%20%7D%20else%7B%0A%20%20%20%20%20%20String%5B%5D%20rest%20%3D%20Arrays.copyOfRange%28words,%201,%20words.length%29%3B%0A%20%20%20%20%20%20String%20longestOfRest%20%3D%20longest%28rest%29%3B%0A%20%20%20%20%20%20if%20%28words%5B0%5D.length%28%29%20%3E%20longestOfRest.length%28%29%29%20%7B%0A%20%20%20%20%20%20%20%20return%20words%5B0%5D%3B%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20return%20longestOfRest%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=java&rawInputLstJSON=%5B%5D&textReferences=false)

```java
import java.util.Arrays;

public class Longest {
  public static void main(String[] args) {
    System.out.println(longest(new String[] {"red", "green", "blue"}));
  }

  public static String longest(String[] words) {
    if (words.length == 1) {
      return words[0];
    } else {
      String[] rest = Arrays.copyOfRange(words, 1, words.length);
      String longestOfRest = longest(rest);
      if (words[0].length() > longestOfRest.length()) {
        return words[0];
      } else {
        return longestOfRest;
      }
    }
  }
}
```

## Sum

```mermaid
sequenceDiagram
    participant main
    participant sum1 as sum
    participant sum2 as sum
    participant sum3 as sum
    participant sum4 as sum
    participant sum5 as sum

    main->>+sum1: [1.5, 7.5, -2.0, 3.0]
        sum1->>+sum2: [7.5, -2.0, 3.0]
            sum2->>+sum3: [-2.0, 3.0]
                sum3->>+sum4: [3.0]
                    sum4->>+sum5: []
                    sum5-->>-sum4: 0.0
                sum4-->>-sum3: 3.0 = 3.0 + 0.0
            sum3-->>-sum2: 1.0 = -2.0 + 3.0
        sum2-->>-sum1: 8.5 = 7.5 + 1.0
    sum1-->>-main: 10.0 = 1.5 + 8.5
```

### Python [:arrow_forward:](https://pythontutor.com/visualize.html#code=def%20sum%28numbers%3A%20list%29%20-%3E%20str%3A%0A%20%20%20%20if%20len%28numbers%29%20%3D%3D%200%3A%0A%20%20%20%20%20%20%20%20return%200.0%0A%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20return%20numbers%5B0%5D%20%2B%20sum%28numbers%5B1%3A%5D%29%0A%0Aprint%28sum%28%5B1.5,%207.5,%20-2.0,%203.0%5D%29%29&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false)

```python
def sum(numbers: list[float]) -> str:
    if len(numbers) == 0:
        return 0.0
    else:
        return numbers[0] + sum(numbers[1:])

print(sum([1.5, 7.5, -2.0, 3.0]))
```

### Java [:arrow_forward:](https://pythontutor.com/visualize.html#code=import%20java.util.Arrays%3B%0Aimport%20java.util.List%3B%0A%0Apublic%20class%20Main%20%7B%0A%20%20%20%20public%20static%20void%20main%28String%5B%5D%20args%29%20%7B%0A%20%20%20%20%20%20%20%20System.out.println%28sum%28Arrays.asList%28new%20Double%5B%5D%20%7B1.5,%207.5,%20-2.0,%203.0%7D%29%29%29%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20public%20static%20double%20sum%28List%3CDouble%3E%20numbers%29%20%7B%0A%20%20%20%20%20%20%20%20if%20%28numbers.size%28%29%20%3D%3D%200%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%200.0%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20Double%20first%20%3D%20numbers.get%280%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20List%3CDouble%3E%20rest%20%3D%20numbers.subList%281,%20numbers.size%28%29%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20first%20%2B%20sum%28rest%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=java&rawInputLstJSON=%5B%5D&textReferences=false)

```java
import java.util.List;

public class Main {
    public static void main(String[] args) {
        System.out.println(sum(List.<Double>of(1.5, 7.5, -2.0, 3.0)));
    }

    public static double sum(List<Double> numbers) {
        if (numbers.size() == 0) {
            return 0.0;
        } else {
            Double first = numbers.get(0);
            List<Double> rest = numbers.subList(1, numbers.size());
            return first + sum(rest);
        }
    }
}
```

## Expression

```mermaid
sequenceDiagram
    participant main
    participant evaluate1 as evaluate
    participant evaluate2 as evaluate
    participant evaluate3 as evaluate
    participant evaluate4 as evaluate

    main->>+evaluate1: (10 + 20) * (30 - (40 / 2))
        evaluate1->>+evaluate2: 10 + 20
            evaluate2->>+evaluate3: 10
            evaluate3-->>-evaluate2: 10
            evaluate2->>+evaluate3: 20
            evaluate3-->>-evaluate2: 20
        evaluate2-->>-evaluate1: 30
        evaluate1->>+evaluate2: 30 - (40 / 2)
            evaluate2->>+evaluate3: 30
            evaluate3-->>-evaluate2: 30
            evaluate2->>+evaluate3: 40 / 2
                evaluate3->>+evaluate4: 40
                evaluate4-->>-evaluate3: 40
                evaluate3->>+evaluate4: 2
                evaluate4-->>-evaluate3: 2
            evaluate3-->>-evaluate2: 20.0
        evaluate2-->>-evaluate1: 10.0
    evaluate1-->>-main: 300.0
```

### Python [:arrow_forward:](https://pythontutor.com/visualize.html#code=class%20Expr%3A%0A%20%20%20%20def%20__init__%28self,%20left,%20op,%20right%29%3A%0A%20%20%20%20%20%20%20%20self.left%20%3D%20left%0A%20%20%20%20%20%20%20%20self.op%20%3D%20op%0A%20%20%20%20%20%20%20%20self.right%20%3D%20right%0A%0A%20%20%20%20def%20__str__%28self%29%3A%0A%20%20%20%20%20%20%20%20return%20f%22%28%7Bself.left%7D%20%7Bself.op%7D%20%7Bself.right%7D%29%22%0A%0Adef%20evaluate%28expr%29%3A%0A%20%20%20%20if%20isinstance%28expr,%20Expr%29%3A%0A%20%20%20%20%20%20%20%20left_val%20%3D%20evaluate%28expr.left%29%0A%20%20%20%20%20%20%20%20right_val%20%3D%20evaluate%28expr.right%29%0A%20%20%20%20%20%20%20%20if%20expr.op%20%3D%3D%20%22%2B%22%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20left_val%20%2B%20right_val%0A%20%20%20%20%20%20%20%20elif%20expr.op%20%3D%3D%20%22-%22%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20left_val%20-%20right_val%0A%20%20%20%20%20%20%20%20elif%20expr.op%20%3D%3D%20%22*%22%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20left_val%20*%20right_val%0A%20%20%20%20%20%20%20%20elif%20expr.op%20%3D%3D%20%22/%22%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20left_val%20/%20right_val%0A%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20return%20expr%0A%0A%23%20%2810%20%2B%2020%29%20*%20%2830%20-%20%2840%20/%202%29%29%0Aexpr%20%3D%20Expr%28Expr%2810,%20%22%2B%22,%2020%29,%20%22*%22,%20Expr%2830,%20%22-%22,%20Expr%2840,%20%22/%22,%202%29%29%29%0A%0Aprint%28expr,%20%22%3D%22,%20evaluate%28expr%29%29&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false)

```python
from typing import TypeVar

TExpr = TypeVar("TExpr", bound="Expr")

class Expr:
    def __init__(self, left: TExpr | int | float, op: str, right: TExpr | int | float):
        self.left = left
        self.op = op
        self.right = right

    def __str__(self):
        return f"({self.left} {self.op} {self.right})"

def evaluate(expr: TExpr | int | float) -> float:
    if isinstance(expr, Expr):
        left_val = evaluate(expr.left)
        right_val = evaluate(expr.right)
        match expr.op:
            case "+":
                return left_val + right_val
            case "-":
                return left_val - right_val
            case "*":
                return left_val * right_val
            case "/":
                return left_val / right_val
    else:
        return expr

# (10 + 20) * (30 - (40 / 2))
expr = Expr(Expr(10, "+", 20), "*", Expr(30, "-", Expr(40, "/", 2)))

print(expr, "=", evaluate(expr))
```

### Java [:arrow_forward:](https://pythontutor.com/visualize.html#code=public%20class%20Main%20%7B%0A%20%20%20%20public%20static%20void%20main%28String%5B%5D%20args%29%20%7B%0A%20%20%20%20%20%20%20%20Expression%20expr%20%3D%20new%20OperationNode%28%0A%20%20%20%20%20%20%20%20%20%20%20%20new%20OperationNode%28new%20ValueNode%2810%29,%20%22%2B%22,%20new%20ValueNode%2820%29%29,%0A%20%20%20%20%20%20%20%20%20%20%20%20%22*%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20new%20OperationNode%28%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20new%20ValueNode%2830%29,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22-%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20new%20OperationNode%28new%20ValueNode%2840%29,%20%22/%22,%20new%20ValueNode%282%29%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%29%0A%20%20%20%20%20%20%20%20%29%3B%0A%20%20%20%20%20%20%20%20System.out.println%28expr%20%2B%20%22%20%3D%20%22%20%2B%20evaluate%28expr%29%29%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20public%20static%20double%20evaluate%28Expression%20expr%29%20%7B%0A%20%20%20%20%20%20%20%20if%20%28expr%20instanceof%20ValueNode%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20%28%28ValueNode%29%20expr%29.value%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20OperationNode%20opNode%20%3D%20%28OperationNode%29%20expr%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20Double%20leftVal%20%3D%20evaluate%28opNode.left%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20Double%20rightVal%20%3D%20evaluate%28opNode.right%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20switch%20%28opNode.op%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20case%20%22%2B%22%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20leftVal%20%2B%20rightVal%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20case%20%22-%22%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20leftVal%20-%20rightVal%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20case%20%22*%22%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20leftVal%20*%20rightVal%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20case%20%22/%22%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20leftVal%20/%20rightVal%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20default%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20throw%20new%20IllegalArgumentException%28%22Unsupported%20operator%3A%20%22%20%2B%20opNode.op%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%0A%20%20%20%20public%20interface%20Expression%20%7B%0A%20%20%20%20%7D%0A%0A%20%20%20%20public%20static%20class%20ValueNode%20implements%20Expression%20%7B%0A%20%20%20%20%20%20%20%20public%20final%20Double%20value%3B%0A%0A%20%20%20%20%20%20%20%20public%20ValueNode%28Double%20value%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20this.value%20%3D%20value%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20public%20ValueNode%28Integer%20value%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20this.value%20%3D%20value.doubleValue%28%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%40Override%0A%20%20%20%20%20%20%20%20public%20String%20toString%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20value.toString%28%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%0A%20%20%20%20public%20static%20class%20OperationNode%20implements%20Expression%20%7B%0A%20%20%20%20%20%20%20%20public%20final%20Expression%20left%3B%0A%20%20%20%20%20%20%20%20public%20final%20String%20op%3B%0A%20%20%20%20%20%20%20%20public%20final%20Expression%20right%3B%0A%0A%20%20%20%20%20%20%20%20public%20OperationNode%28Expression%20left,%20String%20op,%20Expression%20right%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20this.left%20%3D%20left%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20this.op%20%3D%20op%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20this.right%20%3D%20right%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%40Override%0A%20%20%20%20%20%20%20%20public%20String%20toString%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20%22%28%22%20%2B%20left%20%2B%20%22%20%22%20%2B%20op%20%2B%20%22%20%22%20%2B%20right%20%2B%20%22%29%22%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=java&rawInputLstJSON=%5B%5D&textReferences=false)

```java
public class Main {
    public static void main(String[] args) {
        // (10 + 20) * (30 - (40 / 2))
        Expression expr = new OperationNode(
            new OperationNode(new ValueNode(10), "+", new ValueNode(20)),
            "*",
            new OperationNode(
                new ValueNode(30),
                "-",
                new OperationNode(new ValueNode(40), "/", new ValueNode(2))
            )
        );
        System.out.println(expr + " = " + evaluate(expr));
    }

    public static double evaluate(Expression expr) {
        if (expr instanceof ValueNode) {
            return ((ValueNode) expr).value;
        } else {
            OperationNode opNode = (OperationNode) expr;
            Double leftVal = evaluate(opNode.left);
            Double rightVal = evaluate(opNode.right);
            switch (opNode.op) {
                case "+":
                    return leftVal + rightVal;
                case "-":
                    return leftVal - rightVal;
                case "*":
                    return leftVal * rightVal;
                case "/":
                    return leftVal / rightVal;
                default:
                    throw new IllegalArgumentException("Unsupported operator: " + opNode.op);
            }
        }
    }

    public interface Expression {
    }

    public static class ValueNode implements Expression {
        public final Double value;

        public ValueNode(Double value) {
            this.value = value;
        }

        public ValueNode(Integer value) {
            this.value = value.doubleValue();
        }

        @Override
        public String toString() {
            return value.toString();
        }
    }

    public static class OperationNode implements Expression {
        public final Expression left;
        public final String op;
        public final Expression right;

        public OperationNode(Expression left, String op, Expression right) {
            this.left = left;
            this.op = op;
            this.right = right;
        }

        @Override
        public String toString() {
            return "(" + left + " " + op + " " + right + ")";
        }
    }
}
```
