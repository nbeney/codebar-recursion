# codebar-recursion

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
### Python

```python
def fact(n: int) -> int:
  if n <= 1:
    return 1
  else:
    return n * fact(n - 1)

print(fact(5))
```

### Java

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

### Python

```python
def reverse(text: str) -> str:
  if len(text) <= 1:
    return text
  else:
    return text[-1] + reverse(text[0:-1])

print(reverse("STEP"))
```

### Java

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

### Python

```python
def convert(number: int) -> str:
  if number < 10:
    return str(number)
  else:
    return convert(number // 10) + str(number % 10)

print(convert(1234))
```

### Java

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

    main->+fib1: 4
        fib1->+fib2: 2
            fib2->+fib3: 0
            fib3-->-fib2: 0

            fib2->+fib3: 1
            fib3-->-fib2: 1
        fib2-->-fib1: 1 = 0 + 1

        fib1->+fib2: 3
            fib2->+fib3: 1
            fib3-->-fib2: 1

            fib2->+fib3: 2
                fib3->+fib4: 0
                fib4-->-fib3: 0

                fib3->+fib4: 1
                fib4-->-fib3: 1
            fib3-->-fib2: 1 = 0 + 1
        fib2-->-fib1: 2 = 1 + 1
    fib1-->-main: 3 = 1 + 2
```

### Python

```python
def fib(n: int) -> int:
    if n < 2:
        return n
    else:
        return fib(n - 2) + fib(n - 1)

print(fib(4))
```

### Java

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
