# codebar-recursion

## Factorial

```mermaid
sequenceDiagram
    participant main
    participant fact5 as fact
    participant fact4 as fact
    participant fact3 as fact
    participant fact2 as fact
    participant fact1 as fact

    main->>+fact5: 5
        fact5->>+fact4: 4
            fact4->>+fact3: 3
                fact3->>+fact2: 2
                    fact2->>+fact1: 1
                    fact1-->>-fact2: 1
                fact2-->>-fact3: 2 = 2 * 1
            fact3-->>-fact4: 6 = 3 * 2
        fact4-->>-fact5: 24 = 4 * 6
    fact5-->>-main: 120 = 5 * 24
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
    participant reverse4 as reverse
    participant reverse3 as reverse
    participant reverse2 as reverse
    participant reverse1 as reverse

    main->>+reverse4: "STEP"
        reverse4->>+reverse3: "STE"
            reverse3->>+reverse2: "ST"
                reverse2->>+reverse1: "S"
                reverse1-->>-reverse2: "S"
            reverse2->>-reverse3: "TS" = "T" + "S"
        reverse3-->>-reverse4: "ETS" = "E" + "TS"
    reverse4-->>-main: "PETS" = "P" + "ETS"
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
    participant convert4 as convert
    participant convert3 as convert
    participant convert2 as convert
    participant convert1 as convert

    main->>+convert4: 1234
        convert4->>+convert3: 123
            convert3->>+convert2: 12
                convert2->>+convert1: 1
                convert1-->>-convert2: "1"
            convert2->>-convert3: "12" = "1" + "2"
        convert3-->>-convert4: "123" = "12" + "3"
    convert4-->>-main: "1234" = "123" + "4"
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

